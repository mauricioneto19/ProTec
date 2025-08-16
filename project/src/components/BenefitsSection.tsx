import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '📁',
      title: 'Os Programas Mais Procurados',
      description: 'Premium organizados por categoria'
    },
    {
      icon: '🔐',
      title: 'Ativação Automática',
      description: 'Sem complicação'
    },
    {
      icon: '🔄',
      title: 'Sempre Atualizado',
      description: 'Versões recentes dos programas'
    },
    {
      icon: '♾️',
      title: 'Acesso Vitalício',
      description: 'Use quando e onde quiser'
    }
  ];

  const features = [
    'Os programas mais procurados organizados por Categoria',
    'Ativação silenciosa automática',
    'Programas atualizados com versões recentes',
    'Categorias: design, segurança, produtividade, drivers etc.',
    'Reinstale sempre que quiser',
    'Acesso vitalício + atualizações',
    'Compatível com Windows 7, 8, 10 e 11',
    'Vídeo tutorial passo a passo incluso'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">🎯 Benefícios do Pacote</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {features.slice(4).map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;