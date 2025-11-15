import React from 'react';
import Carousel from './components/Carousel';

// Obtener el base path - Vite reemplaza esto en tiempo de build
// Si BASE_URL es '/', necesitamos detectar el nombre del repositorio desde la URL
const getBaseUrl = (): string => {
  const viteBaseUrl = import.meta.env.BASE_URL || '/';
  
  // Si BASE_URL es '/', intentar detectar desde window.location
  if (viteBaseUrl === '/' && typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const hostname = window.location.hostname;
    
    // Si estamos en GitHub Pages (github.io), detectar el nombre del repositorio
    if (hostname.includes('github.io')) {
      // Si la pathname tiene un segmento que no es 'images' o 'assets', usarlo como base
      const match = pathname.match(/^\/([^\/]+)\//);
      if (match && match[1] !== 'images' && match[1] !== 'assets' && match[1] !== '') {
        return `/${match[1]}/`;
      }
      // Si no hay match pero estamos en github.io, el repositorio probablemente es 'citas-evento-dorcas-2025'
      // Intentar detectar desde el script src o usar el nombre conocido
      const scripts = document.querySelectorAll('script[src]');
      for (const script of scripts) {
        const src = (script as HTMLScriptElement).src;
        const scriptMatch = src.match(/github\.io\/([^\/]+)\//);
        if (scriptMatch && scriptMatch[1] !== 'images' && scriptMatch[1] !== 'assets') {
          return `/${scriptMatch[1]}/`;
        }
      }
      // Fallback: usar el nombre conocido del repositorio
      return '/citas-evento-dorcas-2025/';
    }
  }
  
  return viteBaseUrl;
};

const BASE_URL = getBaseUrl();

// Función para construir rutas correctas con el base path
const getImagePath = (imageName: string): string => {
  // Asegurar que BASE_URL termine con /
  const base = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
  
  // Asegurar que imageName no empiece con /
  const image = imageName.startsWith('/') ? imageName.slice(1) : imageName;
  
  // Construir la ruta: base + image
  // Ejemplo: '/citas-evento-dorcas-2025/' + 'images/0.jpg' = '/citas-evento-dorcas-2025/images/0.jpg'
  const fullPath = `${base}${image}`;
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

// Debug: verificar rutas en consola
console.log('BASE_URL (from import.meta.env):', import.meta.env.BASE_URL);
console.log('BASE_URL (detected):', BASE_URL);
console.log('Current location:', typeof window !== 'undefined' ? window.location.href : 'N/A');
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
