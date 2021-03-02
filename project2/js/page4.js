var con = document.querySelector(".con")
var withs = document.body.clientWidth;
con.ontouchstart = function(ev){
    ev =ev ||event;
    var oLeft = con.offsetLeft;
    var a =ev.changedTouches[0].clientX-oLeft;
    con.ontouchmove =function (ev){
        ev = ev || event;
        if (parseFloat(ev.changedTouches[0].clientX-a)>0){
            return false
        }
        else if (parseFloat(ev.changedTouches[0].clientX-a)<=parseFloat(withs)*-3){
            return false
        }
        else {
            con.style.left =ev.changedTouches[0].clientX-a+'px';
        }

    }
}
document.ontouchend =function(){
    con.ontouchmove =function(){
        null;
    }
}
con.onmousedown = function(ev){
    ev =ev ||event;
    var oLeft = con.offsetLeft;
    var a =ev.clientX-oLeft;
    console.log(parseFloat(ev.clientX - a));
    con.onmousemove =function (ev){
        ev = ev || event;
        if (parseFloat(ev.clientX-a)>0){
            return false
        }
        else if (parseFloat(ev.clientX-a)<=parseFloat(withs)*-3){
            return false
        }
        else {
            con.style.left =ev.clientX-a+'px';
        }

    }
}
document.onmouseup =function(){
    con.onmousemove =function(){
        null;
    }
}

window.onresize = function(){
    window.location.reload();
};
var con4_click = document.querySelector(".con4_click");
con4_click.onclick = function () {
    window.location.href = "index.html"
}