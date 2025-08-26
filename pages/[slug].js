import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Este componente lida com todas as URLs dinâmicas, como /aa, /ab, /ola-mundo, etc.
// O 'slug' é a parte da URL depois da barra.
const DynamicPage = () => {
  // Use o hook useRouter para acessar os parâmetros da URL.
  const router = useRouter();
  const { slug } = router.query;
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Função para validar se o slug é uma combinação alfanumérica de 2 dígitos.
  const isValidSlug = (s) => {
    return s && s.length === 2 && /^[a-z0-9]{2}$/i.test(s);
  };

  // Função assíncrona para buscar a mensagem motivacional do modelo de linguagem.
  const fetchMotivationalMessage = async (inputSlug) => {
    setIsLoading(true);
    // Converte o slug para minúsculas para garantir consistência.
    const lowerCaseSlug = inputSlug.toLowerCase();
    
    // Constrói o prompt para a API.
    const prompt = `Crie uma breve e inspiradora mensagem motivacional para a combinação alfanumérica "${lowerCaseSlug}".`;
    
    // Prepara a chamada de API para o modelo de linguagem.
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "text/plain",
      },
    };
    const apiKey = ""; // A chave da API é fornecida automaticamente.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    let response;
    try {
      // Tenta fazer a chamada da API com retentativas em caso de falha.
      let retries = 0;
      const maxRetries = 5;
      while (retries < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (response.ok) {
            break;
          }
        } catch (error) {
          console.error("Erro na chamada de API:", error);
        }
        retries++;
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, retries) * 100));
      }
      
      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        // Formata a mensagem final com o slug.
        setMessage(`${generatedText} - ${lowerCaseSlug}`);
      } else {
        setMessage(`Não foi possível gerar uma mensagem para o slug "${inputSlug}".`);
      }
    } catch (error) {
      console.error("Erro ao buscar a mensagem:", error);
      setMessage(`Ocorreu um erro ao carregar a mensagem para o slug "${inputSlug}".`);
    } finally {
      setIsLoading(false);
    }
  };

  // Use useEffect para carregar a mensagem quando a rota estiver pronta e o slug mudar.
  useEffect(() => {
    // Verifique se o roteador está pronto e o slug existe.
    if (!router.isReady || !slug) {
      return;
    }

    if (isValidSlug(slug)) {
      fetchMotivationalMessage(slug);
    } else {
      setMessage(`O slug "${slug}" não é válido. Por favor, use combinações de 2 dígitos alfanuméricos.`);
    }
  }, [router.isReady, slug]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100 p-4">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold text-indigo-800">DiegoMG</h1>
      </header>
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-2xl">
        {isLoading ? (
          <p className="text-3xl font-bold text-gray-500 mb-4">Gerando sua mensagem...</p>
        ) : (
          <p className="text-3xl font-bold text-gray-700 mb-4">{message}</p>
        )}
        <p className="mt-4 text-gray-500">Voltar para a <a href="/" className="text-indigo-500 hover:underline">página principal</a>.</p>
      </div>
    </div>
  );
};

export default DynamicPage;
