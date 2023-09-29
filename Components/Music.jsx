import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import op from '/op.mp3';

const BackgroundMusic = () => {
  const location = useLocation();
  const audioRef = useRef(null);

  useEffect(() => {
    // Verifica si la ruta actual es la página de inicio
    if (location.pathname === '/') {
      // Comienza la reproducción de audio solo en la página de inicio
      audioRef.current.play();
    } else {
      // Detén la reproducción en cualquier otra página
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [location]);

  return (
    <audio key={Date.now()} ref={audioRef} src={op} loop preload="auto" controls={false} style={{ width: 0, height: 0, border: 'none' }} />
  );
};

export default BackgroundMusic;
