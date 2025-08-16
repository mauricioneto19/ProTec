import React, { useEffect } from 'react';

const WhatsAppButton = () => {
  useEffect(() => {
    // Load Lottie script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js';
    script.type = 'module';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/UMJ4C5WKPRP7I1', '_blank');
  };

  return (
    <>
      <style>{`
        .whatsapp-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }
        .whatsapp-container:hover {
          transform: scale(1.1);
        }
      `}</style>
      
      <div 
        onClick={handleWhatsAppClick}
        className="whatsapp-container"
      >
        <dotlottie-wc 
          src="https://lottie.host/a262da55-6c5a-45b0-aa61-dcf7a2c6d39e/nCi06qU82u.lottie" 
          style={{ width: '80px', height: '80px' }}
          speed="1" 
          autoplay 
          loop
        />
      </div>
    </>
  );
};

export default WhatsAppButton;