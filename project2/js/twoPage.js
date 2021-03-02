// window.onload = function () {
//     bgbox.style.top = 0 +"%"
// }
// var bgbox = document.querySelector(".bgbox")
// var text = 0
// document.onmousewheel = function (ev) {
//     var ev = ev || window.event;
//     console.log(ev.deltaY);
//     if (ev.deltaY > 0){
//         text--;
//         if (text>=-1){
//             bgbox.style.top = 100 * text +"%"
//         }else {
//             text = -1
//         }

//     }
//     if (ev.deltaY < 0){
//         text++;
//         if (text<=0){
//             bgbox.style.top = 100 * text +"%"
//         }else {
//             text = 0
//         }

//     }
// }

var glow = document.querySelector(".glow")
glow.onclick = function () {
    window.location.href = "light.html"
}