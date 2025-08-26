import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Objeto de dados que armazena todas as mensagens para cada slug
// As mensagens foram fornecidas pelo usuário.
const messagesData = {
  '00': 'O futuro pertence àqueles que acreditam na beleza de seus sonhos. -00',
  '01': 'A única forma de fazer um ótimo trabalho é amar o que você faz. -01',
  '02': 'Acredite que você pode e você já estará no meio do caminho. -02',
  '03': 'A vida é 10% do que acontece com você e 90% de como você reage a isso. -03',
  '04': 'Não espere por oportunidades, crie-as. -04',
  '05': 'A persistência realiza o impossível. -05',
  '06': 'Comece onde você está. Use o que você tem. Faça o que você pode. -06',
  '07': 'O sucesso é a soma de pequenos esforços repetidos dia após dia. -07',
  '08': 'Sua única limitação é a sua imaginação. -08',
  '09': 'A maior glória não é nunca cair, mas levantar-se cada vez que caímos. -09',
  '0a': 'Ousar é perder o chão por um instante. Não ousar é perder a si mesmo. -0a',
  '0b': 'Acredite em si mesmo, e todo o resto se encaixará. -0b',
  '0c': 'Seja a mudança que você deseja ver no mundo. -0c',
  '0d': 'Nada é impossível para um coração cheio de esperança. -0d',
  '0e': 'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. -0e',
  '0f': 'A coragem não é a ausência do medo, mas o triunfo sobre ele. -0f',
  '0g': 'Seus sonhos não têm data de validade. Respire fundo e tente novamente. -0g',
  '0h': 'O segredo do progresso é começar. -0h',
  '0i': 'A felicidade não é algo pronto. Ela vem de suas próprias ações. -0i',
  '0j': 'Não conte os dias, faça os dias contarem. -0j',
  '0k': 'As dificuldades preparam pessoas comuns para destinos extraordinários. -0k',
  '0l': 'A maior aventura que você pode ter é viver a vida dos seus sonhos. -0l',
  '0m': 'Acredite na sua capacidade de superar qualquer obstáculo. -0m',
  '0n': 'A cada novo dia, uma nova chance de ser feliz. -0n',
  '0o': 'Se você pode sonhar, você pode fazer. -0o',
  '0p': 'A paciência é a chave para a felicidade. -0p',
  '0q': 'A força não vem da capacidade física, mas de uma vontade indomável. -0q',
  '0r': 'Não há atalhos para qualquer lugar que valha a pena ir. -0r',
  '0s': 'Mude seus pensamentos e você muda seu mundo. -0s',
  '0t': 'Transforme cada obstáculo em uma oportunidade. -0t',
  '0u': 'A inspiração existe, mas ela precisa te encontrar trabalhando. -0u',
  '0v': 'Faça algo hoje pelo qual o seu eu do futuro irá agradecer. -0v',
  '0w': 'Você é mais forte do que pensa. -0w',
  '0x': 'O sucesso é a soma de pequenos esforços. -0x',
  '0y': 'O tempo voa. A escolha é sua. -0y',
  '0z': 'O sucesso não é um destino, é uma jornada. -0z',
  '10': 'Persistência, paciência e determinação. A receita para o sucesso. -10',
  '11': 'A beleza do mundo está na diversidade. -11',
  '12': 'O otimismo é a fé que leva à realização. -12',
  '13': 'Acredite que o melhor ainda está por vir. -13',
  '14': 'Onde há vontade, há um caminho. -14',
  '15': 'Lute pelos seus sonhos. -15',
  '16': 'A vida é uma jornada, não um destino. -16',
  '17': 'Não desista. Você já está mais perto do que pensa. -17',
  '18': 'A vida é o que acontece enquanto você está ocupado fazendo outros planos. -18',
  '19': 'Nunca é tarde para ser o que você poderia ter sido. -19',
  '1a': 'Acredite no poder da sua mente. -1a',
  '1b': 'Seja você mesmo, todos os outros já existem. -1b',
  '1c': 'O amanhã é uma página em branco. -1c',
  '1d': 'O futuro pertence àqueles que se preparam para ele hoje. -1d',
  '1e': 'Não tenha medo de ser grande. -1e',
  '1f': 'O maior fracasso é não tentar. -1f',
  '1g': 'Não se compare a ninguém, você é único. -1g',
  '1h': 'A vida é uma tela em branco, pinte-a com as cores da sua felicidade. -1h',
  '1i': 'A felicidade está nas pequenas coisas. -1i',
  '1j': 'Acredite em milagres, mas não dependa deles. -1j',
  '1k': 'O sucesso é a melhor vingança. -1k',
  '1l': 'A única coisa que pode impedir você é você mesmo. -1l',
  '1m': 'Mantenha o foco, a fé e a determinação. -1m',
  '1n': 'O segredo da mudança é focar toda sua energia não em lutar contra o velho, mas em construir o novo. -1n',
  '1o': 'A vida é um eco. O que você envia, volta. O que você planta, colhe. O que você dá, recebe. O que você vê nos outros, existe em você. -1o',
  '1p': 'O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que está fazendo, você será bem-sucedido. -1p',
  '1q': 'Acredite em sua intuição, pois ela é a sua bússola interior. -1q',
  '1r': 'O tempo é o seu recurso mais valioso. Use-o com sabedoria. -1r',
  '1s': 'A simplicidade é o último grau de sofisticação. -1s',
  '1t': 'Seja grato pelo que você tem. -1t',
  '1u': 'Onde há amor, há vida. -1u',
  '1v': 'A paciência é a mãe da sorte. -1v',
  '1w': 'A força de vontade é a chave para o sucesso. -1w',
  '1x': 'Não se prenda ao passado, foque no presente. -1x',
  '1y': 'A vida é feita de momentos, aproveite cada um deles. -1y',
  '1z': 'A única coisa que pode limitar seu sucesso é o medo. -1z',
  '20': 'O sucesso é a jornada, não o destino. -20',
  '21': 'Acredite em si mesmo, e o mundo acreditará em você. -21',
  '22': 'A persistência é a chave para o sucesso. -22',
  '23': 'Não desista. -23',
  '24': 'Seus sonhos são a sua bússola. -24',
  '25': 'O sucesso é a melhor vingança. -25',
  '26': 'Acredite em seu potencial. -26',
  '27': 'A vida é um livro em branco, escreva sua própria história. -27',
  '28': 'O sucesso é uma escolha. -28',
  '29': 'Onde há vontade, há um caminho. -29',
  '2a': 'Acredite que você pode, e você já está no meio do caminho. -2a',
  '2b': 'A persistência é a chave para o sucesso. -2b',
  '2c': 'Não desista dos seus sonhos. -2c',
  '2d': 'Seja a mudança que você quer ver no mundo. -2d',
  '2e': 'O sucesso é a soma de pequenos esforços. -2e',
  '2f': 'A vida é uma jornada, não um destino. -2f',
  '2g': 'Seus sonhos não têm data de validade. -2g',
  '2h': 'Acredite em si mesmo. -2h',
  '2i': 'O sucesso é uma jornada, não um destino. -2i',
  '2j': 'Acredite que o melhor ainda está por vir. -2j',
  '2k': 'A vida é uma jornada, não um destino. -2k',
  '2l': 'Não desista. -2l',
  '2m': 'Acredite em seu potencial. -2m',
  '2n': 'O sucesso é uma escolha. -2n',
  '2o': 'A única coisa que pode limitar seu sucesso é o medo. -2o',
  '2p': 'O sucesso é a melhor vingança. -2p',
  '2q': 'Acredite que o melhor ainda está por vir. -2q',
  '2r': 'A vida é uma jornada, não um destino. -2r',
  '2s': 'Não desista. -2s',
  '2t': 'Acredite em seu potencial. -2t',
  '2u': 'O sucesso é uma escolha. -2u',
  '2v': 'A única coisa que pode limitar seu sucesso é o medo. -2v',
  '2w': 'O sucesso é a melhor vingança. -2w',
  '2x': 'Acredite que o melhor ainda está por vir. -2x',
  '2y': 'A vida é uma jornada, não um destino. -2y',
  '2z': 'Não desista. -2z',
  '30': 'Acredite em seu potencial. -30',
  '31': 'O sucesso é uma escolha. -31',
  '32': 'A única coisa que pode limitar seu sucesso é o medo. -32',
  '33': 'O sucesso é a melhor vingança. -33',
  '34': 'Acredite que o melhor ainda está por vir. -34',
  '35': 'A vida é uma jornada, não um destino. -35',
  '36': 'Não desista. -36',
  '37': 'Acredite em seu potencial. -37',
  '38': 'O sucesso é uma escolha. -38',
  '39': 'A única coisa que pode limitar seu sucesso é o medo. -39',
  '3a': 'O sucesso é a melhor vingança. -3a',
  '3b': 'Acredite que o melhor ainda está por vir. -3b',
  '3c': 'A vida é uma jornada, não um destino. -3c',
  '3d': 'Não desista. -3d',
  '3e': 'Acredite em seu potencial. -3e',
  '3f': 'O sucesso é uma escolha. -3f',
  '3g': 'A única coisa que pode limitar seu sucesso é o medo. -3g',
  '3h': 'O sucesso é a melhor vingança. -3h',
  '3i': 'Acredite que o melhor ainda está por vir. -3i',
  '3j': 'A vida é uma jornada, não um destino. -3j',
  '3k': 'Não desista. -3k',
  '3l': 'Acredite em seu potencial. -3l',
  '3m': 'O sucesso é uma escolha. -3m',
  '3n': 'A única coisa que pode limitar seu sucesso é o medo. -3n',
  '3o': 'O sucesso é a melhor vingança. -3o',
  '3p': 'Acredite que o melhor ainda está por vir. -3p',
  '3q': 'A vida é uma jornada, não um destino. -3q',
  '3r': 'Não desista. -3r',
  '3s': 'Acredite em seu potencial. -3s',
  '3t': 'O sucesso é uma escolha. -3t',
  '3u': 'A única coisa que pode limitar seu sucesso é o medo. -3u',
  '3v': 'O sucesso é a melhor vingança. -3v',
  '3w': 'Acredite que o melhor ainda está por vir. -3w',
  '3x': 'A vida é uma jornada, não um destino. -3x',
  '3y': 'Não desista. -3y',
  '3z': 'Acredite em seu potencial. -3z',
};

// Este componente lida com todas as URLs dinâmicas, como /aa, /ab, /ola-mundo, etc.
// O 'slug' é a parte da URL depois da barra.
const DynamicPage = () => {
  // Use o hook useRouter para acessar os parâmetros da URL.
  const router = useRouter();
  const { slug } = router.query;
  const [message, setMessage] = useState('');

  // Função para validar se o slug é uma combinação alfanumérica de 2 dígitos.
  const isValidSlug = (s) => {
    return s && s.length === 2 && /^[a-z0-9]{2}$/i.test(s);
  };

  // Use useEffect para carregar a mensagem quando a rota estiver pronta e o slug mudar.
  useEffect(() => {
    // Verifique se o roteador está pronto e o slug existe.
    if (!router.isReady || !slug) {
      return;
    }

    // Converte o slug para minúsculas para garantir que a rota seja case-insensitive.
    const lowerCaseSlug = slug.toLowerCase();

    // Lógica para buscar a mensagem do objeto local.
    if (isValidSlug(lowerCaseSlug)) {
      const displayMessage = messagesData[lowerCaseSlug];
      if (displayMessage) {
        setMessage(displayMessage);
      } else {
        setMessage(`O slug "${slug}" não corresponde a nenhuma mensagem definida.`);
      }
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
        <p className="text-3xl font-bold text-gray-700 mb-4">{message}</p>
        <p className="mt-4 text-gray-500">Voltar para a <a href="/" className="text-indigo-500 hover:underline">página principal</a>.</p>
      </div>
    </div>
  );
};

export default DynamicPage;
