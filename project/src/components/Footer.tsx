import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © 2025 Pacote Completo de Ferramentas. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Este produto é destinado apenas para uso educacional e de backup pessoal.
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;