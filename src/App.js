import React from 'react';

import InputHolder from './components/InputHolder'

import './App.css';

function App() {
  return (
    <div className="App">
      <form action="https://google.bg" method="get">
        <h2>Mimoza</h2>
        <div class="container">
          <InputHolder name="uname" type="text" placeholder="Username" />
          <InputHolder name="psw" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
