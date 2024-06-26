document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    if (document.getElementsByClassName("ts-full-screen").length) {
        document.getElementsByClassName("ts-full-screen")[0].style.height = window.innerHeight + "px";
    }
});

function adjustFullScreenHeight() {
    if (document.getElementsByClassName("ts-full-screen").length) {
        document.getElementsByClassName("ts-full-screen")[0].style.height = window.innerHeight + "px";
    }
}

document.addEventListener('DOMContentLoaded', adjustFullScreenHeight);
window.addEventListener('resize', adjustFullScreenHeight);

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustFullScreenHeight, 150);
});

function adjustFullScreenHeight() {
    var fullScreenElements = document.getElementsByClassName("ts-full-screen");
    if (fullScreenElements.length > 0) {
        fullScreenElements[0].style.height = window.innerHeight + "px";
    }
}

