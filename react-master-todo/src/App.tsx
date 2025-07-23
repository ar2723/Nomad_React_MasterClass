import React from 'react';
import {GlobalStyle} from "./theme/GlobalStyle";
import ToDoList from "./component/ToDoList";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <ToDoList/>
    </div>
  );
}

export default App;
