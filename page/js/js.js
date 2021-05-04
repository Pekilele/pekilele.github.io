function fn3(){
    var r = Math.floor( Math.random() * 256 );
    var g = Math.floor( Math.random() * 256 );
    var b = Math.floor( Math.random() * 256 );
    return "rgb("+r+','+g+','+b+")";
}
var body = document.querySelector("body");
document.onkeydown = function (ev) {
    if(ev.keyCode >= 65 && ev.keyCode <=90 ){
        var down = document.querySelectorAll('.'+ ev.key)[0]
        var audios = document.querySelectorAll('.'+ ev.key)[1]
        if(down.style.display === 'none'){
            down.style.display = 'block'
            body.style.backgroundColor = fn3();
            audios.play()
        }else {
            down.style.display = 'none'
        }
    }
}
var x = 0;      //鼠标的位置  移动位置 = 原来的位置 + （鼠标移动后的位置 - 鼠标松开时的位置）
var y = 0;
var dom;
var domX = 0;
var domY = 0;      //dom 位置
var ydx = 0;
var ydy = 0;
var client = false;
document.onmousedown = function (e) {
    e.preventDefault();
    var event = e.target;
    if(event.parentNode.classList.contains('imgs')){
        dom = event.parentNode
         x = e.clientX;
         y = e.clientY;
         domX = dom.offsetLeft;
         domY = dom.offsetTop;
         client = true;
    }
    document.onmousemove = function (e) {
        e.preventDefault();
        if(client){
            // console.log(e);
            ydx = e.clientX - x + domX;
            ydy = e.clientY - y + domY;
            dom.style.left = ydx + 'px';
            dom.style.top = ydy + 'px';
        }
    }
    document.onmouseup = function (ev) {
        e.preventDefault();
        x = 0;      //鼠标的位置  移动位置 = 原来的位置 + （鼠标移动后的位置 - 鼠标松开时的位置）
        y = 0;
        dom = '';
        domX = 0;
        domY = 0;      //dom 位置
        ydx = 0;
        ydy = 0;
        client = false;
    }
}
/**手机触屏事件**/
// document.ontouchstart = function (e) {
//     e.preventDefault();
//     var event = e.target;
//     if(event.parentNode.classList.contains('imgs')){
//         dom = event.parentNode
//         x = e.clientX;
//         y = e.clientY;
//         domX = dom.offsetLeft;
//         domY = dom.offsetTop;
//         client = true;
//     }
//     document.ontouchmove = function (e) {
//         e.preventDefault();
//         if(client){
//             // console.log(e);
//             ydx = e.clientX - x + domX;
//             ydy = e.clientY - y + domY;
//             dom.style.left = ydx + 'px';
//             dom.style.top = ydy + 'px';
//         }
//     }
//     document.ontouchend = function (ev) {
//         e.preventDefault();
//         x = 0;      //鼠标的位置  移动位置 = 原来的位置 + （鼠标移动后的位置 - 鼠标松开时的位置）
//         y = 0;
//         dom = '';
//         domX = 0;
//         domY = 0;      //dom 位置
//         ydx = 0;
//         ydy = 0;
//         client = false;
//     }
// }
//
