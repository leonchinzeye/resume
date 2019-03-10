import React, { Component } from 'react';
import { About, Contact, Footer, Header, Resume } from './components/index';
import resumeData from './data/resumeData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
