import React from 'react';

const IncludedSection = () => {
  const categories = [
    {
      icon: '📊',
      title: 'Office',
      description: '2025, 2021, 2019, 2016',
      color: 'from-blue-50 to-blue-100 border-blue-200'
    },
    {
      icon: '🎨',
      title: 'Adobe',
      description: 'Photoshop, Illustrator, Premiere etc.',
      color: 'from-purple-50 to-purple-100 border-purple-200'
    },
    {
      icon: '🛡️',
      title: 'Antivírus',
      description: 'Avast, Malwarebytes, Bitdefender',
      color: 'from-green-50 to-green-100 border-green-200'
    },
    {
      icon: '🌐',
      title: 'Navegadores',
      description: 'Chrome, Firefox, Brave, Opera',
      color: 'from-orange-50 to-orange-100 border-orange-200'
    },
    {
      icon: '🧹',
      title: 'Otimizadores',
      description: 'limpeza completa de seu notebook ou pc',
      color: 'from-red-50 to-red-100 border-red-200'
    },
    {
      icon: '🔧',
      title: 'Ferramentas',
      description: 'para técnicos e formatadores',
      color: 'from-indigo-50 to-indigo-100 border-indigo-200'
    },
    {
      icon: '⚡',
      title: 'Drivers',
      description: 'Atualizadores automáticos',
      color: 'from-teal-50 to-teal-100 border-teal-200'
    },
    {
      icon: '📄',
      title: 'Conversores',
      description: 'gravadores, leitores de PDF',
      color: 'from-pink-50 to-pink-100 border-pink-200'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          📁 O que você vai receber:
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.color} rounded-lg p-6 border hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;