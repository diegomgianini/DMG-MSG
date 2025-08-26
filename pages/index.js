import React from 'react';

// Este é o componente que representa a página principal (a URL raiz: /)
const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo à página principal!</h1>
        <p className="text-lg text-gray-600">Esta é a página padrão do seu site.</p>
        <p className="mt-4 text-gray-500">Tente visitar `/aa`, `/ab`, `/ac` ou `/ad` para ver as mensagens especiais.</p>
      </div>
    </div>
  );
};

export default HomePage;
