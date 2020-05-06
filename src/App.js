import React from 'react';
import Nav from './components/nav/nav';
import Heading from './components/heading/heading';
import Section from './components/section/section';
import Cards from './components/cards/cards';
import Access from './components/access/access';
import Productive from './components/productive/productive';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
     <Nav />
     <Heading />
     <Section />
     <Productive />
     <Cards />
     <Access />
     <Footer />
  </div>
  );
}

export default App;
