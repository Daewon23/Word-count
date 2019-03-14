import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Form />
      <Footer />
      </div>
    );
  }
}

export default App;
