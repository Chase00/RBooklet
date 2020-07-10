import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY;

  return (
    <div>
      <h1>Recipe Booklet</h1>
    </div>
  );
}

export default App;
