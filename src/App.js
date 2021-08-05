import React, { useState } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  function changeTheme() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <div className="App">
      <header
        className={`${
          toggle ? 'App-header-white-theme' : 'App-header-dark-theme'
        }`}
      >
        <button
          type="button"
          className={`${toggle ? 'btn btn-dark' : 'btn btn-light'}`}
          onClick={changeTheme}
        >
          {toggle ? 'Dark' : 'Light'}
        </button>
      </header>
    </div>
  );
}

export default App;
