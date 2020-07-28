import React from "react";

import "../../styles/info.css"; 

const Info = () => {
    return (
        <p id="info">
            Hello, 

            This is a quick lil project I whipped together because I got fet up with timers online always missing some features that I wanted (these were pretty basic features as well). So I created this.

            To use the timer simply press and hold the space bar until the timer turns green. Then you can let go when you are ready. This will start the timer. When you are done, you can stop the timer by pressing space again. It will record your time and plot it on the graph. You can delete the most recent solve by clicking on "delete one" and you can delete all your solves by pressing "delete all". Your solves are saved to a profile. You can change profiles by changing the name below. 
        
        </p>
    );
}

export default Info;
