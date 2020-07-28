import React from "react";

import "../../styles/timerextra.css";

const TimerExtra = props => {
    const timerec = props.timerec;
    const timehandle = props.timehandle;
    const user = props.user;
    const userhandle = props.userhandle;

    const deleteOne = () => {
        fetch(`https://cube-timer-server.herokuapp.com/deleteone?id=${user}`)
        .then(out => console.log(out));

        timehandle(timerec.slice(0, -1));
    }

    const deleteAll = () => {
        fetch(`https://cube-timer-server.herokuapp.com/deleteall?id=${user}`)
        .then(out => console.log(out));

        timehandle([]);
    }

    const setUser = () => {
        const inputVal = document.getElementById("user-id-input").value;
        console.log(inputVal);
        userhandle(inputVal);
    }

    return(
        <div>
            <div id="setting-button-group" >
                <button className="setting-button" onClick={deleteOne} >Delete One</button>
                <button className="setting-button" onClick={deleteAll} >Delete All</button>
            </div>

            <div id="setting-user-input" >
                <div id="setting-id-input-group" >
                    <label id="setting-id-label">Desired Profile -- Currently using {user}</label>
                    <input id="user-id-input" type="text" />
                </div>
                <button className="setting-button" onClick={setUser}>Set User</button>
            </div>

        </div>
    );
}

export default TimerExtra;
