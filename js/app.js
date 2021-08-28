let day = document.getElementById('day');
let month = document.getElementById('month');
let hours = document.getElementById('hours');
let minute = document.getElementById('minute');
let second = document.getElementById('second');


function timeCount() {
    const valaintainDay = new Date('14 February 2022 12:00');
    const currentaTime = new Date()
    const totalTime = valaintainDay - currentaTime;

    let totalScond = Math.floor(totalTime / 1000);
    let totalMinute = Math.floor(totalScond / 60);
    let totalHoure = Math.floor(totalMinute / 60);
    let totalDay = Math.floor(totalHoure / 24);
    let totalMonth = Math.floor(totalDay / 30);
    // console.log(totalMonth);
    console.log(totalDay);

    let monthRemain = totalMonth % 30;
    let dayRemain = totalDay % 24;
    let houreRemain = totalHoure % 60;
    let minuteRemain = totalMinute % 60;
    let secondRemain = totalScond % 30;

    month.innerText = (monthRemain);
    day.innerText = (dayRemain);
    hours.innerText = (houreRemain);
    minute.innerText = (minuteRemain);
    second.innerText = (secondRemain)
    console.log(monthRemain, dayRemain, houreRemain, minuteRemain, secondRemain);


}
timeCount()
setInterval(timeCount, 1000);

