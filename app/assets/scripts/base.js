console.log("loaded js")
var homeFilePath = ("pages/home.html")
fetch(homeFilePath)
            .then((res) => res.text())
            .then((text) => {
                var mainEle = document.querySelector("main")
                mainEle.innerHTML = text
            })
            .catch((e) => console.error(e));

var navItemEles = document.querySelectorAll(".navitem")
console.log(navItemEles)
for (let i = 0; i < navItemEles.length; i++) {
    console.log(i)
    navItemEles[i].addEventListener("click", function () {
        console.log(this)
        var value = this.innerHTML.toLowerCase()
        console.log("grab value based on which event was pressed: ", value)
        var fileStr = (value + ".html")
        console.log("make html file: ", fileStr)
        var filePath = ("pages/" + fileStr)
        console.log("path to html: ", filePath)
        fetch(filePath)
            .then((res) => res.text())
            .then((text) => {
                // do something with "text"
                console.log("loads selected html into main: ")
                console.log(text)
                var mainEle = document.querySelector("main")
                console.log(mainEle)
                mainEle.innerHTML = text
            })
            .catch((e) => console.error(e));
        console.log("clears nav bar")
    })
}

