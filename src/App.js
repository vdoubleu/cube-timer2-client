import React, { useState, useEffect } from 'react';

import Timer from "./component/timer";
import Graph from "./component/graph";
import TimerExtra from "./component/timerExtra";
import Info from "./component/info";
import ErrorMessage from "./component/error";

import "./styles/base.css";
import "./styles/app.css";

function App() {
  const [times, setTimes] = useState([]);
  const [user, setUser] = useState("defaultUser");
  const [timeoutError, setTimeoutError] = useState("");

  useEffect(() => {
    promiseTimeout(3000, fetch(`https://cube-timer-server.herokuapp.com/health`))
      .then(out => 
        fetch(`https://cube-timer-server.herokuapp.com/gettime?id=${user}`)
          .then(out => out.text())
          .then(txt => JSON.parse(txt))
          .then(out => setTimes(out.reformtime))
      )
      .catch(err => {
        setTimeoutError("Request for data timed out - server might be booting up, please try refreshing the page in a few seconds");
      })
  }, [user])

  function promiseTimeout(msTimeout, promise) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('TIMEOUT'))
      }, msTimeout)

      promise
        .then(value => {
          clearTimeout(timer)
          resolve(value)
        })
        .catch(reason => {
          clearTimeout(timer)
          reject(reason)
        })
    })
  }

  return (
    <div className="container" >
        <div id="inner-container" className="container" >
            <h2 className="main-title"> Vdoubleu's Cube Timer </h2>
            <Timer timerec={times} timehandle={setTimes} user={user} />
            <Graph data={times} />
        </div>
        <ErrorMessage message={timeoutError} />
        <TimerExtra timerec={times} timehandle={setTimes} user={user} userhandle={setUser} />

        <Info />
    </div>
  );
}

export default App;
