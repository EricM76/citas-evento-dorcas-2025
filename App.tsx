import React from 'react';
import Carousel from './components/Carousel';

const images = [
  '/images/0.jpg',
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3a.jpg',
  '/images/3b.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6a.jpg',
  '/images/6b.jpg',
  '/images/7.jpg',
  '/images/8.jpg'
];

function App() {
  return (
    <main className="h-screen w-screen bg-black">
      <Carousel images={images} />
    </main>
  );
}

export default App;
