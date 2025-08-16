import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '📦 Como recebo o pacote?',
      answer: 'Você recebe um link de download por e-mail logo após a compra.'
    },
    {
      question: '💻 Funciona em quais versões do Windows?',
      answer: 'Compatível com Windows 7, 8, 10 e 11.'
    },
    {
      question: '🔐 Preciso ativar algo?',
      answer: 'Não! Todos os programas já estão ativados e prontos para instalar.'
    },
    {
      question: '♾ O acesso é vitalício?',
      answer: 'Sim! Baixe e use quando quiser, pra sempre.'
    },
    {
      question: '🎥 Tem tutorial?',
      answer: 'Sim! Você recebe um vídeo com passo a passo completo.'
    },
    {
      question: '👨‍💻 Posso usar em mais de um PC?',
      answer: 'Sim! Pode usar em quantos quiser.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          ❓ Dúvidas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <h3 className="font-bold text-lg text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;