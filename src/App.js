import React from "react";
import { Routes, Route } from "react-router-dom";
import Effect from "./components/Effect";
import Home from "./components/Home";
import Memo from "./components/Memo";
import State from "./components/State";


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path = "/" element= {Home} />
          <Route path = "/Effect" element = {Effect} />
          <Route path = "/Memo" element = {Memo} />
          <Route path = "/State" element = {State} />
        </Routes>
      
    </div>
  );
}

export default App;
