import React from 'react';
import Carousel from './components/Carousel';

// Función para construir rutas correctas con el base path
// En Vite, los archivos de public se copian a la raíz, pero necesitamos el base path
const getImagePath = (imageName: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // BASE_URL siempre termina con /, así que solo necesitamos concatenar
  // Asegurar que imageName no empiece con /
  const cleanImage = imageName.startsWith('/') ? imageName.slice(1) : imageName;
  const fullPath = `${baseUrl}${cleanImage}`;
  // Debug: descomentar para ver las rutas en consola
  // console.log('Image path:', fullPath, 'BASE_URL:', baseUrl);
  return fullPath;
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

// Debug: verificar rutas en desarrollo
if (import.meta.env.DEV) {
  console.log('BASE_URL:', import.meta.env.BASE_URL);
  console.log('First image path:', images[0]);
}

function App() {
  return (
    <main className="h-screen w-screen bg-black">
      <Carousel images={images} />
    </main>
  );
}

export default App;
