let start = document.getElementsByClassName("start")[0];
let store = document.getElementsByClassName("store")[0];
let sidebar = document.getElementById("hel")[0];

document.getElementById("menu").style.bottom = "-655px";

let startfunc = function (elss) {
    if (document.getElementById("menu").style.bottom != "50px") {
        if (elss == "yes") {
            document.getElementById("menu").style.bottom = "50px";
        }
    } else {

        document.getElementById("menu").style.bottom = "-655px";

    }
}

start.addEventListener("click", () => {
    startfunc(elss = "yes")
})
store.addEventListener("click", () => {
    window.open('https://www.microsoft.com/en-in/store/apps/windows', '_blank');
})

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    startfunc()
}

const createClock = setInterval(displayTime, 15000);
