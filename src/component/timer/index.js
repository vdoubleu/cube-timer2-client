import React from "react";

import "../../styles/timer.css";

const Timer = props => {
    const timeRecord = props.timerec;
    const timeHandler = props.timehandle;
    const user = props.user;

    let timerState = "off";
   
    let startTime;
    let tInterval;

    const updateTime = () => {
        const newTime = parseFloat(document.getElementById("timer-number").innerHTML);
        timeHandler([...timeRecord, {"name": timeRecord.length, "solvetime": newTime}]);
        fetch(`https://cube-timer-server.herokuapp.com/addtime?id=${user}&time=${newTime}`, {
          "method": "POST",
        });
    }

    const startTimer = () => {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
    }

    const resetTimer = () => {
        timerState = "off";
        clearInterval(tInterval);
    }

    const getShowTime = () => {
        const updatedTime = new Date().getTime();
        const difference = updatedTime - startTime;

        let afterDec = difference % 1000;
        if (afterDec < 10)
            afterDec *= 10;

        if (afterDec < 100)
            afterDec *= 10;

        let beforeDec = Math.floor(difference/1000);

        document.getElementById("timer-number").innerHTML = beforeDec + "." + afterDec;
    }

    document.body.onkeypress = (e) => {
        if (e.keyCode === 32) {
            e.preventDefault();

            if (timerState === "off") {
                timerState = "wait";
                document.getElementById("timer-number").style.color = "red";

                setTimeout(() => {
                    if (timerState === "wait") {
                        timerState = "ready";
                        document.getElementById("timer-number").style.color = "#00d639";
                    }
                }, 1000);
            }
        }
    }
    
    document.body.onkeyup = (e) => {
        if(e.keyCode === 32) {
            if (timerState === "ready") {
                document.getElementById("timer-number").style.color = "#fffdc9";
                timerState = "on";
                startTimer();
            } else if (timerState === "on") {
                updateTime();
                document.getElementById("timer-number").style.color = "#fafafa";
                timerState = "off";
                resetTimer();
            } else {
                document.getElementById("timer-number").style.color = "#fafafa";
                timerState = "off";
            }
        }
    }

    return (
        <div>
            <h1 className="timer" id="timer-number">0.000</h1>
        </div>
    );
}

export default Timer;
