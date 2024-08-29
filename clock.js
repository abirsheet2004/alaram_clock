let start = document.getElementById("play")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let amandpm = document.getElementById("amorpm")
let time = document.getElementById("time")
let stop = document.getElementById("stop")
var audio = new Audio('alarm-clock.mp3');

setInterval(() => {
    let a = new Date()
    let h = a.getHours()
    let aorp = null
    if (h < 12) {
        aorp = 'AM'
    }
    else {
        aorp = 'PM'
    }
    if (h > 12) {
        h = h - 12
        if (h == 0) {
            h = 12;
        }
    }
    let m = a.getMinutes()
    if (m < 10) {
        m = '0' + m
    }
    let s = a.getSeconds()
    if (s < 10) {
        s = '0' + s
    }

    time.innerHTML = (`<h1>WACTH</h1>  <center><h1>${h} : ${m} : ${s} ${aorp}</h1></center>`)
}, 1000)
function chalja() {
    var hour = input1.value
    hour = Number.parseInt(hour)
    console.log(typeof hour, hour)
    var minet = input2.value
    minet = Number.parseInt(minet)
    console.log(minet,typeof minet)
    let pmoram = amandpm.value
    if (hour) {
        let min = minet
        if(min<10){
            min = '0'+min
        }
        alert(`your alarm is Successfully set at ${hour}:${min} ${pmoram}`)
        i = setInterval(() => {
            let a = new Date()
            let h = a.getHours()
            let aorp = null
            if (h < 12) {
                aorp = 'AM'
            }
            else {
                aorp = 'PM'
            }
            if (h > 12) {
                h = h - 12
                if (h == 0) {
                    h = 12;
                } 
            }
            let m = a.getMinutes()
            if (hour == h && minet == m && aorp==pmoram) {
                audio.play();
            }
        }, 1000)
    }
    else {
        alert("pleace enter time")
    }
}

stop.addEventListener('click', () => {
    audio.pause();
    clearInterval(i)
    console.log(i)

})
start.addEventListener('click', chalja)




