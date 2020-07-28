import React, { useState, useEffect } from 'react';

import Timer from "./component/timer";
import Graph from "./component/graph";
import TimerExtra from "./component/timerExtra";
import Info from "./component/info";

import "./styles/base.css";
import "./styles/app.css";

function App() {
  const [times, setTimes] = useState([]);
  const [user, setUser] = useState("defaultUser");

  useEffect(() => {
    fetch(`https://cube-timer-server.herokuapp.com/gettime?id=${user}`)
      .then(out => out.text())
      .then(txt => JSON.parse(txt))
      .then(out => setTimes(out.reformtime))
  }, [user])

  return (
    <div className="container" >
        <div id="inner-container" className="container" >
            <h2 className="main-title"> Vdoubleu's Cube Timer </h2>
            <Timer timerec={times} timehandle={setTimes} user={user} />
            <Graph data={times} />
        </div>
        <TimerExtra timerec={times} timehandle={setTimes} user={user} userhandle={setUser} />

        <Info />
    </div>
  );
}

export default App;
