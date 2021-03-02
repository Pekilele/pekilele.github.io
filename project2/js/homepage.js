window.onload = function () {
    bgbox.style.top = 0 +"%"
}
let timer = null;
var bgbox = document.querySelector(".bgbox")
var text = 0

var ele = document.querySelector(".ele")
var box3 = document.querySelector(".box3")
var box_news_text = document.querySelector(".box_news_text")

ele.onclick = function () {
    this.style.display = "none"
    box3.classList.add("box3_bg")
    box_news_text.style.display = "none"
}
var links = document.querySelector(".links")
links.onclick = function () {
    window.location.href = "twoPage.html"
}
var throttle = function(func, delay) {
    var prev = Date.now();
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
// 处理函数
function handle(ev) {
    var ev = ev || window.ev;
    if (ev.deltaY > 0) {
        text--;
        if (text >= -3) {
            bgbox.style.top = 100 * text + "%"
        } else {
            text = -3
        }
    }
    if (ev.deltaY < 0) {
        text++;
        if (text <= 0) {
            bgbox.style.top = 100 * text + "%"
        } else {
            text = 0
        }
    }
}
// 滚动事件
window.addEventListener('mousewheel', throttle(handle, 1000));
