import React from 'react';
import './App.css';
import Header from './Header';
import FeedLeft from './FeedLeft';
import Body from './Body';
import FeedRight from './FeedRight';

function App() {
  return (
    <div className="app">
      <Header />
    <div className="app__main">
    <FeedLeft />
      <Body />
      <FeedRight />
    </div>
    </div>
  );
}

export default App;
