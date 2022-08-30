import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  const changePage = () => {
    switch (currentPage){
      case 'Projects':
        return <Projects />
      default:
        return <About />
    }
  }
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {changePage()}
      <Footer />
    </div>
  );
}

export default App;