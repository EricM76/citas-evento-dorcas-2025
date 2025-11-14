import React from 'react';
import Carousel from './components/Carousel';

const images = [
  'https://i.ibb.co/p1v0mH9/1.jpg',
  'https://i.ibb.co/8Yj05Wp/2.jpg',
  'https://i.ibb.co/z5pB0bV/3.jpg',
  'https://i.ibb.co/bF4N3Zk/4.jpg',
  'https://i.ibb.co/SswJp2P/5.jpg',
  'https://i.ibb.co/3cZf5fL/6.jpg',
  'https://i.ibb.co/8XY55Yq/7.jpg',
  'https://i.ibb.co/mHqjqnW/8.jpg',
  'https://i.ibb.co/JqbjxHF/9.jpg',
  'https://i.ibb.co/wJCMz89/10.jpg',
  'https://i.ibb.co/Dtd5zWf/11.jpg'
];

function App() {
  return (
    <main className="h-screen w-screen bg-black">
      <Carousel images={images} />
    </main>
  );
}

export default App;
