export const getTimes = name => {
    const url = `https://cube-timer-server.herokuapp.com/gettime?id=bob`;
}

export const addTime = (time, name) => {
    const url = `https://cube-timer-server.herokuapp.com/addtime`;
}

export const deleteLastTime = name => {
    const url = `https://cube-timer-server.herokuapp.com/deleteone`;

}

export const deleteAllTime = name => {
    const url = `https://cube-timer-server.herokuapp.com/deleteall`;
}
