import React from 'react';

const VideoSection = () => {
  const handleCTAClick = () => {
    window.open('https://www.ggcheckout.com/checkout/v2/m4le4WjFeb9faLWJoBVY', '_blank');
  };

  React.useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.net/player.js';
    playerScript.async = true;
    
    // Add error handling for script loading
    playerScript.onerror = () => {
      console.warn('Wistia player script failed to load');
    };
    
    document.head.appendChild(playerScript);

    // Add global error handler for Wistia CORS/server errors
    const handleWistiaErrors = (event: ErrorEvent) => {
      if (event.filename && event.filename.includes('wistia.net')) {
        // Suppress Wistia-related errors from showing in console
        event.preventDefault();
        console.warn('Wistia service error (suppressed):', event.message);
      }
    };

    window.addEventListener('error', handleWistiaErrors);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(playerScript)) {
        document.head.removeChild(playerScript);
      }
      window.removeEventListener('error', handleWistiaErrors);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          🎥 Assista ao vídeo e entenda como funciona:
        </h2>
        
       <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gray-100">
            <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/lfmxpyr19b?web_component=true&seo=false&controlsVisibleOnLoad=false&playButton=true&smallPlayButton=false&volumeControl=false&fullscreenButton=false&settingsControl=false&qualityControl=false&playbackRateControl=false" 
                  title="vsl final Video" 
                  allow="autoplay; fullscreen" 
                  allowTransparency={true}
                  frameBorder="0" 
                  scrolling="no" 
                  className="wistia_embed" 
                  name="wistia_embed" 
                  width="100%" 
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleCTAClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          👉 QUERO ACESSO AGORA
        </button>
      </div>
    </section>
  );
};

export default VideoSection;