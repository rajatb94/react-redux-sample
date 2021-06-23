

import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';


import ColorPageComponent from './components/ColorPageComponent'


function App(props) {
  return (
      <div className="App">
        <ColorPageComponent/>
      </div>
  );
}

export default App;


/*
1. We created a store that listens to actions (using reducers)
2. We provided store the the main App component

3. Whereever we wanna use the state variables, 
   we will connect the store to it and we will also tell the store which actions to listen"


*/