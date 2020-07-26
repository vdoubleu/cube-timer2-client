import React, { useState } from 'react';

import Timer from "./component/timer";
import Graph from "./component/graph";

import "./styles/base.css";
import "./styles/app.css";

function App() {
  const [times, setTimes] = useState([]);

  return (
    <div className="container" >
        <h2> Vdoubleu's Cube Timer </h2>
        <Timer timerec={times} timehandle={setTimes} />
        <Graph data={times} />
    </div>
  );
}

export default App;
