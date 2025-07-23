import React from 'react';
import ToDoList from "./component/ToDoList";
import {GlobalStyle} from "./theme/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <ToDoList/>
    </div>
  );
}

export default App;
