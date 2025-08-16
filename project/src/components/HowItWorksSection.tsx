import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      icon: '🛒',
      title: 'Você Compra',
      description: 'Adquira o pacote de forma rápida e segura',
      color: 'text-red-600'
    },
    {
      number: '2',
      icon: '📩',
      title: 'Recebe o Link',
      description: 'Receba por e-mail o link com todos os programas organizados',
      color: 'text-blue-600'
    },
    {
      number: '3',
      icon: '💾',
      title: 'Baixa e Instala',
      description: 'Execute o instalador com tutorial e aproveite',
      color: 'text-green-600'
    },
    {
      number: '4',
      icon: '⚡',
      title: 'Resultados Imediatos',
      description: 'Use os melhores programas ativados no seu PC em minutos',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          🧠 Como Funciona
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Processo simples e rápido para começar a usar agora mesmo
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute -top-3 -left-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              
              <div className={`text-3xl mb-4 ${step.color}`}>
                {step.icon}
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;