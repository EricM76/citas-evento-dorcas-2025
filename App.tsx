import React from 'react';
import Carousel from './components/Carousel';

// Obtener el base path - Vite reemplaza esto en tiempo de build
const BASE_URL = import.meta.env.BASE_URL || '/';

// Función para construir rutas correctas con el base path
const getImagePath = (imageName: string): string => {
  // Asegurar que BASE_URL termine con /
  const base = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
  
  // Asegurar que imageName no empiece con /
  const image = imageName.startsWith('/') ? imageName.slice(1) : imageName;
  
  // Construir la ruta: base + image
  // Ejemplo: '/citas-evento-dorcas-2025/' + 'images/0.jpg' = '/citas-evento-dorcas-2025/images/0.jpg'
  return `${base}${image}`;
};

const images = [
  getImagePath('images/0.jpg'),
  getImagePath('images/1.jpg'),
  getImagePath('images/2.jpg'),
  getImagePath('images/3a.jpg'),
  getImagePath('images/3b.jpg'),
  getImagePath('images/4.jpg'),
  getImagePath('images/5.jpg'),
  getImagePath('images/6a.jpg'),
  getImagePath('images/6b.jpg'),
  getImagePath('images/7.jpg'),
  getImagePath('images/8.jpg')
];

// Debug: verificar rutas en consola
console.log('BASE_URL:', BASE_URL);
console.log('First image path:', images[0]);
console.log('Sample paths:', images.slice(0, 3));

function App() {
  return (
    <main className="h-screen w-screen bg-black">
      <Carousel images={images} />
    </main>
  );
}

export default App;
