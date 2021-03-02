var click_text = document.querySelector(".click_text")
var con1_text1 = document.querySelector(".con1_text1")
var con1_text2 = document.querySelector(".con1_text2")
var text1 = document.querySelector(".text1")
var text2 = document.querySelector(".text2")
var text3 = document.querySelector(".text3")
var con1 = document.querySelector(".con1")
click_text.onclick = function () {
    con1_text1.style.left = 38 + "%";
    con1_text2.style.right = 37 + "%";
    this.style.display = 'none'
    text1.style.display = "block"
    text2.style.display = "block"
    text3.style.display = "block"
    con1.style.backgroundImage = "linear-gradient(0deg, black,white,white, white)"
}
var con = document.querySelector(".con")
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
            con.style.top = 100 * text + "%"
        } else {
            text = -1
        }
    }
    if (ev.deltaY < 0) {
        text++;
        if (text <= 0) {
            con.style.top = 100 * text + "%"
        } else {
            text = 0
        }
    }
}
// 滚动事件
window.addEventListener('mousewheel', throttle(handle, 500));
var con2_ele = document.querySelector(".con2_ele")
var ele_text = document.querySelector(".ele_text")
var con2_text_text = document.querySelector(".con2_text_text")
ele_text.onclick = function () {
    con2_ele.style.display = "none"
}
con2_text_text.onclick = function () {
    window.location.href = "page4.html"
}