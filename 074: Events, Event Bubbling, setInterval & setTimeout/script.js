let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yayyy you were clicked</b> Enjoy your click!"
})

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yayyy you were clicked</b> Enjoy your click!"
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})

setInterval(() => {
    document.querySelector(".childContainer").style.background = "red";
}, 5000);