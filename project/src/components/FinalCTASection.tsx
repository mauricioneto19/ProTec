import React from 'react';

const FinalCTASection = () => {
  const handleFinalCTA = () => {
    window.open('https://www.ggcheckout.com/checkout/v2/m4le4WjFeb9faLWJoBVY', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Não perca essa oportunidade!</h2>
        <p className="text-xl mb-8">Mais de 1.500 técnicos já estão usando. Seja o próximo!</p>
        
        <button 
          onClick={handleFinalCTA}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce"
        >
          👉 QUERO ACESSO AGORA - R$ 19,90
        </button>
        
        <p className="text-sm mt-6 opacity-75">
          Acesso vitalício • Entrega imediata • Garantia de 30 dias
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">🔒</span>
            <span>Pagamento 100% seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⚡</span>
            <span>Acesso instantâneo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">🎯</span>
            <span>Sem mensalidades</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;