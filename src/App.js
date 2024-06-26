import React from 'react';
import { ReactDOM } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Main from './components/main';
import Footer from './components/footer';
function App() {
  return (
      <>
      <div className="ts-page-wrapper" id="page-top">
        <Navbar />
        <Hero/>
        <Main/>
        <Footer/>
      </div>
   </>
  );
}

export default App;
