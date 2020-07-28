import React, { useState, useEffect } from 'react';

import Timer from "./component/timer";
import Graph from "./component/graph";
import TimerExtra from "./component/timerExtra";

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
        <h2 className="main-title"> Vdoubleu's Cube Timer </h2>
        <Timer timerec={times} timehandle={setTimes} user={user} />
        <Graph data={times} />
        <TimerExtra timerec={times} timehandle={setTimes} user={user} userhandle={setUser} />
    </div>
  );
}

export default App;
