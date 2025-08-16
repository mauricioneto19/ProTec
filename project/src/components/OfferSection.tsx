import React from 'react';

const OfferSection = () => {
  const handlePurchase = () => {
    window.open('https://www.ggcheckout.com/checkout/v2/m4le4WjFeb9faLWJoBVY', '_blank');
  };

  return (
    <section id="offer" className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">💰 Oferta Especial</h2>
        
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">
            🔥 Acesso Completo: Os Programas Mais Procurados Premium
          </h3>
          <p className="text-lg mb-6">
            🔐 Ativados + Acesso Vitalício<br />
            📩 Envio imediato por e-mail
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-left">
              <p className="text-sm opacity-75 line-through">De R$197,00</p>
              <p className="text-4xl font-bold text-yellow-300">R$19,90</p>
              <p className="text-sm">(vitalício)</p>
            </div>
            <div className="bg-yellow-400 text-red-600 px-4 py-2 rounded-full font-bold text-lg animate-pulse">
              90% OFF
            </div>
          </div>
          
          <button 
            onClick={handlePurchase}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
          >
            👉 QUERO MEU PACOTE AGORA
          </button>
          
          <div className="mt-6 text-sm opacity-90">
            <p>🔒 Compra 100% segura</p>
            <p>⚡ Acesso liberado em segundos</p>
            <p>🎯 Garantia de 30 dias</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;