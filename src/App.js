import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Sections from './Sections';
import Bg_circles from './components/Bg_circles';
import Geo from './components/Geo';
import Scroll_loc from './components/Scroll_loc';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Scroll_loc />
      <Landing />
      <section id="home">
        <Canvas camera={{ position: [0, 0, 2], fov: 100 }}>
          <Geo />
        </Canvas>
      </section>
      <Bg_circles />
      <Sections />
    </>
  );
}

export default App;
