
function digitalclk() {
    let date = new Date();
    let hours = date.getHours()
    let minutue = date.getMinutes()
    let sec = date.getSeconds()
    let timeformat = " AM";


    if (hours > 12) {
        hours = hours - 8
    }

    hours = hours < 10 ? "0" + hours : hours
    minutue = minutue < 10 ? "0" + minutue : minutue
    sec = sec < 10 ? "0" + sec : sec

    let final = `${hours} : ${minutue} : ${sec} `

    document.querySelector("#h1input").innerHTML = final
    document.querySelector("#smallinput").innerHTML = timeformat

    setInterval( digitalclk, 1000)
}

digitalclk()

let x = document.querySelector(".atick")

function clickfun(element) {
    x.classList.toggle("xyz")
}