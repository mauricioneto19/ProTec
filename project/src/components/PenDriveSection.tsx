import React from 'react';

const PenDriveSection = () => {
  const handleAccessClick = () => {
    window.open('https://www.ggcheckout.com/checkout/v2/m4le4WjFeb9faLWJoBVY', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg max-w-4xl mx-auto p-10"
          style={{
            boxShadow: '0 0 25px rgba(0,0,0,0.05)'
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            🛠️ Pen Drive Técnico de Reparo
          </h2>
          <p className="text-center text-lg text-white mb-8 max-w-2xl mx-auto">
            Inicie, diagnostique e repare qualquer PC com ferramentas profissionais — direto do seu pen drive.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">✅ Dentro você encontrará:</h3>
              <ul className="space-y-2 text-white">
                <li><strong>DLC Boot, Hirens Boot, Sergei Strelec, Lazesoft Recovery</strong></li>
                <li>Distribuições Linux: Ubuntu, Mint, Big Linux e outros</li>
                <li>Ferramentas para teste de rede, memória, HD, placa-mãe e mais</li>
                <li>Programas de backup, clonagem, particionamento e recuperação de dados</li>
                <li>Acesso a sistemas com erro, senha ou arquivos bloqueados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">🔧 Ferramentas Profissionais Incluídas:</h3>
              <ul className="space-y-2 text-white mb-5">
                <li>EaseUS Data Recovery, Disk Genius, AOMEI Partition</li>
                <li>HDD Regenerator, Acronis, Paragon, Reflect, Norton Ghost e outros</li>
              </ul>

              <h3 className="text-xl font-bold text-yellow-300 mb-3">🚀 Ideal para:</h3>
              <ul className="space-y-2 text-white">
                <li>Técnicos que querem agilidade no atendimento</li>
                <li>Iniciantes que precisam de um kit completo e fácil de usar</li>
                <li>Quem deseja salvar arquivos de máquinas que não iniciam</li>
                <li>Diagnósticos rápidos e precisos de qualquer problema no PC</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-xl font-bold text-yellow-300 mb-3">
            </p>
            <button 
              onClick={handleAccessClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ✅ QUERO ACESSAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenDriveSection;