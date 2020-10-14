import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
