import React from 'react';
import Carousel from './components/Carousel';

const baseUrl = import.meta.env.BASE_URL;

const images = [
  `${baseUrl}images/0.jpg`,
  `${baseUrl}images/1.jpg`,
  `${baseUrl}images/2.jpg`,
  `${baseUrl}images/3a.jpg`,
  `${baseUrl}images/3b.jpg`,
  `${baseUrl}images/4.jpg`,
  `${baseUrl}images/5.jpg`,
  `${baseUrl}images/6a.jpg`,
  `${baseUrl}images/6b.jpg`,
  `${baseUrl}images/7.jpg`,
  `${baseUrl}images/8.jpg`
];

function App() {
  return (
    <main className="h-screen w-screen bg-black">
      <Carousel images={images} />
    </main>
  );
}

export default App;
