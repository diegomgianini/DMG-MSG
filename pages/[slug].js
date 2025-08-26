import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Este componente lida com todas as URLs dinâmicas, como /aa, /ab, /ola-mundo, etc.
// O 'slug' é a parte da URL depois da barra.
const DynamicPage = () => {
  // Use o hook useRouter para acessar os parâmetros da URL.
  const router = useRouter();
  const { slug } = router.query;
  const [message, setMessage] = useState('');

  // Use useEffect para carregar a mensagem quando a rota estiver pronta.
  useEffect(() => {
    // Verifique se o roteador está pronto e o slug existe.
    if (!router.isReady || !slug) {
      return;
    }

    // Converte o slug para minúsculas para garantir que a rota seja case-insensitive.
    const lowerCaseSlug = slug.toLowerCase();

    // Lógica para determinar a mensagem com base no slug.
    let displayMessage = 'Mensagem não encontrada.';
    switch (lowerCaseSlug) {
      case 'aa':
        displayMessage = 'Você é especial';
        break;
      case 'ab':
        displayMessage = 'Creio no seu potencial';
        break;
      case 'ac':
        displayMessage = 'Olha só que lindo';
        break;
      case 'ad':
        displayMessage = 'Onde já chegamos';
        break;
      default:
        // Se não houver uma mensagem específica, mostre uma mensagem padrão.
        displayMessage = `Não há uma mensagem específica para o slug "${slug}".`;
        break;
    }
    setMessage(displayMessage);
  }, [router.isReady, slug]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100 p-4">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold text-indigo-800">DiegoMG</h1>
      </header>
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-2xl">
        <p className="text-3xl font-bold text-gray-700 mb-4">{message}</p>
        <p className="mt-4 text-gray-500">Voltar para a <a href="/" className="text-indigo-500 hover:underline">página principal</a>.</p>
      </div>
    </div>
  );
};

export default DynamicPage;
