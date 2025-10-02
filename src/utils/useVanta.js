import { useEffect } from 'react';

const useVanta = () => {
  useEffect(() => {
    let vantaEffect = null;

    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect = window.VANTA.NET({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: "rgba(146, 36, 75, 0.2)",
          backgroundColor: 0x23153c,
          points: 10,
          maxDistance: 20,
          spacing: 15,
          showDots: true,
          opacity: 0.3  // Hace las líneas más transparentes
        });
      }
    };

    // Verificar si las librerías ya están cargadas
    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      // Esperar a que las librerías se carguen
      const checkLibraries = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkLibraries);
          initVanta();
        }
      }, 100);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
};

export default useVanta;