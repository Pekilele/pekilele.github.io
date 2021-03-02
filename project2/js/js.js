window.onload = function () {
    bgbox.style.top = 0 +"%"
}
var bgbox = document.querySelector(".con")
var text = 0
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
        if (text >= -1) {
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
window.addEventListener('mousewheel', throttle(handle, 500));
var con2_text = document.querySelector(".con2_text");
var con2 = document.querySelector(".con2")


con2_text.onclick = function () {
    con2.style.backgroundImage = "linear-gradient(-45deg, white,white, black)"
}
var con2_texts_sm = document.querySelector(".con2_texts_sm")
con2_texts_sm.onclick = function () {
    window.location.href = "page3.html"
}
