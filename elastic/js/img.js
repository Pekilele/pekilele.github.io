window.onload = function(){
    var sins =JSON.parse(localStorage.getItem('sins'));
    var index = localStorage.getItem('index');
    var text = sins[index].fields.crimes;
    var year = sins[index].fields.year;
    var color = sins[index].fields.sort[0];
    var img = sins[index].fields.image[0].url;
    var region = sins[index].fields.region;
    var name = sins[index].fields.name;
    var box = document.querySelector(".box");
    var img_con = document.querySelector(".img_con"); 
    img_con.src = img;
    box.classList.add(color);
    var title = document.querySelector(".title");
    title.innerHTML = name;
    var text1 = document.querySelector(".text1")
    var text2 = document.querySelector(".text2")
    var text3 = document.querySelector(".text3")
    text1.innerHTML = text;
    text2.innerHTML = year;
    text3.innerHTML = region;
    var mx = document.querySelector('.mx');
    mx.onclick = function(){
        window.location = 'text.html';
        localStorage.setItem('img',JSON.stringify(img))
    }
    var btn = document.querySelector(".btn");
    btn.onclick = function(){
        window.location = 'index.html'
    }
}
