import React from 'react';

// Este é o componente que representa a página principal (a URL raiz: /)
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      {/* Container principal para o conteúdo */}
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center w-full max-w-2xl transform transition-all duration-500 hover:scale-105">

        {/* Logo e cabeçalho */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-white text-6xl mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16 text-indigo-600">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4zm-4-4c0-2.21 1.79-4 4-4h2c0-1.1-.9-2-2-2s-2 .9-2 2h-2zm0 0h-2c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2z"/>
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold text-indigo-800">DiegoMG</h1>
        </div>

        {/* Mensagem da página principal */}
        <p className="text-3xl font-bold text-gray-800 mb-6 font-inter leading-relaxed">Bem-vindo à página principal!</p>
        <p className="text-lg text-gray-600">Esta é a página padrão do seu site. Tente visitar `/aa`, `/ab`, `/ac` ou `/ad` para ver as mensagens especiais.</p>
        
        {/* Botões das redes sociais */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="instagram.com/dmginf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-200">
            {/* Ícone do Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram Pessoal</span>
          </a>
          <a href="www.instagram.com/xpartybr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram de Eventos</span>
          </a>
          <a href="https://www.instagram.com/diegogianinioficial" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram Empresarial</span>
          </a>
          <a href="https://www.youtube.com/@diegogianinioficial" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200">
            {/* Ícone do YouTube */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2A51 51 0 0012 3c-5.84 0-11.46.33-12.54 1.42A2.78 2.78 0 000 6.42C0 12.39.46 16.5 1.46 17.58a2.78 2.78 0 001.94 2A51 51 0 0012 21c5.84 0 11.46-.33 12.54-1.42a2.78 2.78 0 001.94-2A51 51 0 0024 12c0-5.84-.46-11.46-1.46-12.58z"></path><polygon points="9 11 15 8 15 14 9 11"></polygon></svg>
            <span>Canal do YouTube</span>
          </a>
          <a href="https://www.tiktok.com/@diegogianini" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200">
            {/* Ícone do TikTok */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21a2 2 0 01-2 2H5a2 2 0 01-2-2V3a2 2 0 012-2h14a2 2 0 012 2v18z"></path><path d="M12 18V6a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            <span>Canal do TikTok</span>
          </a>
        </div>
      </div>
      <style jsx>{`
        .text-shadow-md {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
