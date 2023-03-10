function off() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch").textContent = "Switched Off";
    document.getElementById("offButton").style.backgroundColor = "#cbd2d9"
    document.getElementById("onButton").style.backgroundColor = "#22c55e"
}

function on() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch").textContent = "Switched On";
    document.getElementById("onButton").style.backgroundColor = "#cbd2d9"
    document.getElementById("offButton").style.backgroundColor = "red"
}