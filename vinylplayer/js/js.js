var music_circular = document.getElementsByClassName("music_circular")[0];
var audio = document.querySelector("audio");
var musics = document.querySelector(".music_con").children
var circular_img = document.querySelector(".circular_img").children[0];
var music_zhu = document.querySelector(".music_zhu");
var music_arr = [
    './mp3/1.mp3',
    './mp3/2.mp3',
    './mp3/3.mp3',
    './mp3/4.mp3',
    './mp3/5.mp3'
];
var slos = false
Array.from(musics).forEach( (item,index) => {
    item.onclick = function () {
        music_zhu.style.transform = "rotate(0deg) translateX(-50%)"
        audio.pause()
        audio.src = music_arr[index]
        music_circular.classList.add("rotate")
        circular_img.src = item.children[0].src
        audio.play()
        return slos = true
    }
})

music_circular.onclick = function () {
    if (slos){

        audio.pause()
        music_circular.classList.remove("rotate")
        music_zhu.style.transform = "translateX(-50%) rotate(-30deg) "
        return slos = false
    }
    if (slos== false){
        audio.play()
        music_circular.classList.add("rotate")
        music_zhu.style.transform = "translateX(-50%) rotate(-10deg) "
        return slos = true
    }

}