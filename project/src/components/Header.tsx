import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
      
    <div className="container mx-auto px-4 text-center relative z-10">
  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
    As mesmas ferramentas<br />
    que os técnicos usam.<br />
    <span className="text-yellow-300 animate-pulse">Agora nas suas mãos</span>
  </h1>
        
       <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto text-center leading-relaxed">
  Seja técnico, estudante ou usuário comum.<br />
  Esse kit foi feito para resolver o seu problema!
</p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span>📩 Entrega imediata por e-mail</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span>♾️ Acesso vitalício</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;