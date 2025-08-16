import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-lg p-8 shadow-lg">
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-2xl font-bold mb-4">Garantia de 30 Dias</h3>
          <p className="text-lg mb-4">Satisfação ou seu dinheiro de volta.</p>
          <p className="text-sm opacity-90">
            Teste sem riscos. Se não ficar satisfeito, devolvemos 100% do seu investimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;