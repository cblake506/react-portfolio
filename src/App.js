import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;