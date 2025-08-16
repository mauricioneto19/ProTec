import React from 'react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: '🎨',
      text: 'Trabalha com manutenção ou design e precisa dos mesmos programas sempre'
    },
    {
      icon: '💸',
      text: 'Cansou de pagar por licenças e planos mensais'
    },
    {
      icon: '🤯',
      text: 'Se frustrou tentando instalar software que trava, expira ou vem com vírus'
    },
    {
      icon: '📚',
      text: 'Precisa de programas profissionais para TCCs e estudos'
    },
    {
      icon: '📦',
      text: 'Quer tudo isso em um único lugar, prático e vitalício'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Se identificou com alguma dessas situações?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{problem.icon}</div>
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600 mb-4">
            🚀 Então este pacote foi feito pra você.
          </p>
          <div 
            onClick={() => window.open('https://www.ggcheckout.com/checkout/v2/m4le4WjFeb9faLWJoBVY', '_blank')}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Vamos resolver seus problemas!
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;