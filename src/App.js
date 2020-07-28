import React, { useState, useEffect } from 'react';

import Timer from "./component/timer";
import Graph from "./component/graph";

import "./styles/base.css";
import "./styles/app.css";

function App() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch(`https://cube-timer-server.herokuapp.com/gettime?id=bob`)
      .then(out => out.text())
      .then(txt => JSON.parse(txt))
      .then(out => setTimes(out.reformtime))
  }, [])

  return (
    <div className="container" >
        <h2 className="main-title"> Vdoubleu's Cube Timer </h2>
        <Timer timerec={times} timehandle={setTimes} />
        <Graph data={times} />
      {/*<TimeButtons timerec={times} timehandle={setTimes} />*/}
    </div>
  );
}

export default App;
