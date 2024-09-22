let optines = document.querySelector(".optins")
let optinesIcondiv = document.querySelector(".optins .i")
let optinesIcon = document.querySelector(".optins i")
let spans = document.querySelectorAll(".bg span")
let bgyes = document.querySelector(".yes")
let bgno = document.querySelector(".no")
let root = document.querySelectorAll(".color ul li")
let land = document.querySelector("header")
let mypuctuer = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg"]
let imges = document.querySelectorAll(".imgBox img")
let a = document.querySelectorAll(" header nav a")

optinesIcondiv.addEventListener("click", function () {
    optines.classList.toggle("open")
    optinesIcon.classList.toggle("fa-spin")
})

if (localStorage.color) {
    document.documentElement.style.setProperty("--mainColor", localStorage.color)
    document.querySelectorAll(".color ul li").forEach(e => {
        e.classList.remove("activee")
        if (e.dataset.color === localStorage.color) {
            e.classList.add("activee")
        }
    })
}
root.forEach(e => {
    e.addEventListener("click", (li) => {
        document.querySelector(".activee").classList.remove("activee")
        localStorage.setItem("color", li.currentTarget.dataset.color)
        document.documentElement.style.setProperty("--mainColor", localStorage.color)
        li.currentTarget.classList.add("activee")
    })
})

spans.forEach(element => {
    element.classList.remove("activee")
    if (localStorage.bacground === "true") {
        test = true
        bgyes.classList.add("activee")
    } else {
        bgno.classList.add("activee")
        test = false
    }
});

let ok;
spans.forEach(e => {
    e.addEventListener("click", (li) => {
        li.target.parentElement.querySelectorAll(".activee").forEach(e => {
            e.classList.remove("activee")
        })
        li.currentTarget.classList.add("activee")
        if (li.target.dataset.imge === "yes") {
            test = true
            andremovebg()
            localStorage.bacground = "true"
        } else {
            test = false
            clearInterval(ok)
            localStorage.bacground = "false"
        }

    })
})


andremovebg()
function andremovebg() {
    if (test === true) {
        ok = setInterval(() => {
            let random = Math.floor(Math.random() * mypuctuer.length)
            land.style.backgroundImage = `url('assets/${mypuctuer[random]}')`
        }, 5000);
    }
}


document.querySelector("header").onclick = function () {
    optinesIcon.classList.toggle("fa-spin")
    document.querySelector(".optins").classList.remove("open")
}

let progspan = document.querySelectorAll(".progres p span")
window.onscroll = function () {
    if (window.scrollY >= 800) {
        progspan.forEach(e => {
            e.style.width = e.dataset.size
        })
    }
}


imges.forEach((e) => {
    e.addEventListener("click", function () {
        let imgcontainer = document.createElement("div")
        imgcontainer.classList.add("imgeoverlay")
        let pop = document.createElement("div")
        pop.classList.add("imgepopup")
        document.body.appendChild(imgcontainer)
        let popimg = document.createElement("img")
        pop.style.display = "block"
        let iconClose = document.createElement("i")
        iconClose.classList.add("fa-close")
        iconClose.classList.add("fa")
        iconClose.classList.add("closeicon")
        iconClose.classList.add("fa-2x")
        pop.appendChild(iconClose)
        popimg.src = e.src
        pop.appendChild(popimg)
        document.body.appendChild(pop)
        if (e.alt !== null) {
            let imghead = document.createElement("h3")
            imghead.innerHTML = e.alt
            pop.prepend(imghead)
        }
        iconClose.onclick = _ => {
            imgcontainer.remove()
            pop.remove()
        }
    })

})

a.forEach(e=>{
    e.addEventListener("click",(li)=> {
        document.querySelector(".active").classList.remove("active")
        li.target.classList.add("active")
    })
})
let bults = document.querySelectorAll(".navboluts .bolut")
traveling(a)
traveling(bults)
function traveling(elements) {
    elements.forEach(e => {
        e.addEventListener("click", (el) => {
            el.preventDefault()
            document.querySelector(el.currentTarget.dataset.section).scrollIntoView()
        })
    })
}

let show = document.querySelectorAll(".m")
let showbox = document.querySelector(".navboluts")

show.forEach(e => {
    e.addEventListener("click", function (el) {
        if (el.target.dataset.blot == "yes") {
            localStorage.display = "flex"
        } else {
            localStorage.display = "none"
        }
        showbox.style.display = localStorage.display
    })

})
if(localStorage.display){
    showbox.style.display = localStorage.display
}

document.querySelector(".reset").onclick=_=>{
    localStorage.clear()
    location.reload()
}

let ul = document.querySelector(".culcontainer ul")
let togole = document.querySelector(".toggole")

togole.onclick=e=>{
    e.stopPropagation()
    ul.classList.toggle("togel")
    togole.classList.toggle("togarrow")
}
ul.onclick=E=>{
    E.stopPropagation()
}
document.addEventListener("click", e =>{
    if (e.target !== togole || e.target !== ul){
        ul.classList.remove("togel")
        togole.classList.remove("togarrow")
    }
})
