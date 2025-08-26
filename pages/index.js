import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-6 font-sans relative overflow-hidden">
      
      {/* Fundo com overlay de brilho */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>

      {/* Container principal */}
      <div className="relative bg-white/90 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl text-center w-full max-w-md sm:max-w-xl md:max-w-2xl transform transition-all duration-500 hover:scale-[1.02]">

        {/* Logo e cabeçalho */}
        <div className="flex flex-col items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 24 24"
            className="w-16 h-16 text-indigo-600 drop-shadow-md mb-3">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
              10 10 10 10-4.48 10-10S17.52 2 
              12 2zm0 14c-2.21 0-4-1.79-4-4h2c0 
              1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 
              4-4 4zm-4-4c0-2.21 1.79-4 4-4h2c0-1.1-.9-2-2-2s-2 
              .9-2 2h-2zm0 0h-2c-2.21 0-4 1.79-4 
              4h2c0-1.1.9-2 2-2z"/>
          </svg>
          <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-lg">DiegoMG</h1>
        </div>

        {/* Mensagem */}
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-relaxed drop-shadow-sm">
          Bem-vindo à página principal!
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Tente visitar <code className="bg-gray-200 px-1 rounded">/aa</code>, <code className="bg-gray-200 px-1 rounded">/ab</code>, <code className="bg-gray-200 px-1 rounded">/ac</code> ou <code className="bg-gray-200 px-1 rounded">/ad</code> para ver mensagens especiais.
        </p>

        {/* Botões redes sociais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="https://www.instagram.com/dmginf" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 
                4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>Instagram Pessoal</span>
          </a>

          <a href="https://www.instagram.com/xpartybr" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 
                4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>Instagram Eventos</span>
          </a>

          <a href="https://www.instagram.com/diegogianinioficial" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 
                4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>Instagram Empresarial</span>
          </a>

          <a href="https://www.youtube.com/@diegogianinioficial" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M22.54 6.42a2.78 2.78 
                0 00-1.94-2A51 51 0 0012 3c-5.84 
                0-11.46.33-12.54 1.42A2.78 2.78 
                0 000 6.42C0 12.39.46 16.5 1.46 
                17.58a2.78 2.78 0 001.94 2A51 51 
                0 0012 21c5.84 0 11.46-.33 
                12.54-1.42a2.78 2.78 0 001.94-2A51 
                51 0 0024 12c0-5.84-.46-11.46-1.46-12.58z"/>
              <polygon points="9 11 15 8 15 14 9 11"/>
            </svg>
            <span>YouTube</span>
          </a>

          <a href="https://www.tiktok.com/@diegogianini" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M21 21a2 2 0 01-2 2H5a2 
                2 0 01-2-2V3a2 2 0 012-2h14a2 2 
                0 012 2v18z"/>
              <path d="M12 18V6a2 2 0 012-2h2a2 
                2 0 012 2v12a2 2 0 01-2 2h-2a2 2 
                0 01-2-2z"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
