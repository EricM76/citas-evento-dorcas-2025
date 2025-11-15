
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImageName, setShowImageName] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ocultar el nombre después de 3 segundos cuando cambia la imagen
  useEffect(() => {
    // Mostrar el nombre cuando cambia la imagen
    setShowImageName(true);
    
    // Limpiar el timeout anterior si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Ocultar después de 3 segundos
    timeoutRef.current = setTimeout(() => {
      setShowImageName(false);
    }, 3000);
    
    // Limpiar el timeout al desmontar o cuando cambia el índice
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  // Función para extraer el nombre de la imagen sin extensión
  const getImageName = (imagePath: string): string => {
    // Extraer el nombre del archivo de la ruta
    const fileName = imagePath.split('/').pop() || '';
    // Remover la extensión
    const name = fileName.replace(/\.[^/.]+$/, '');
    // No mostrar "0"
    return name === '0' ? '' : name;
  };

  return (
    <div className="relative h-screen w-full select-none overflow-hidden">
      {/* Image Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel image ${index + 1}`}
            className="h-full w-full flex-shrink-0 bg-gray-800 object-contain object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              // Error al cargar la imagen - silencioso para producción
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all hover:bg-black/60 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 md:left-4"
      >
        <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next image"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all hover:bg-black/60 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 md:right-4"
      >
        <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Image Name Display */}
      {(() => {
        const imageName = getImageName(images[currentIndex]);
        // No mostrar si está vacío
        return imageName && showImageName;
      })() && (
        <div className="absolute bottom-[36px] left-1/2 z-10 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg transition-opacity duration-300">
          <span className="text-gray-900 font-bold text-lg">
            {getImageName(images[currentIndex])}
          </span>
        </div>
      )}
    </div>
  );
};

export default Carousel;
