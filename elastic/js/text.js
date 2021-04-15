window.onload = ()=>{
    var sins =JSON.parse(localStorage.getItem('sins'));
    var index = localStorage.getItem('index');
    var color = sins[index].fields.sort[0];
    var img = sins[index].fields.image[0].url;
    var box = document.querySelector(".box");
    var imgzz = document.querySelector(".imgzz"); 
    var btns = document.querySelector(".btns"); 
    imgzz.src = img;
    if(color == 'murder'){
        box.style.backgroundColor = 'red';
    }
    if(color == 'armed'){
        box.style.backgroundColor = 'green';
    }
    if(color == 'terrorist'){
        box.style.backgroundColor = 'blue';
    }
    if(color == 'sexually'){
        box.style.backgroundColor = 'hotpink';
    }
    if(color == 'assassination'){
        box.style.backgroundColor = 'gray';
    }
    if(color == 'drug'){
        box.style.backgroundColor = 'gold';
    }
    box.classList.add(color);
    btns.onclick = function(){
        var demo = Math.round(Math.random()*99);
         img = sins[demo].fields.image[0].url;
         color = sins[demo].fields.sort[0];
         if(color == 'murder'){
             
            box.style.backgroundColor = 'red';
        }
        if(color == 'armed'){
            box.style.backgroundColor = 'green';
        }
        if(color == 'terrorist'){
            box.style.backgroundColor = 'blue';
        }
        if(color == 'sexually'){
            box.style.backgroundColor = 'hotpink';
        }
        if(color == 'assassination'){
            box.style.backgroundColor = 'gray';
        }
        if(color == 'drug'){
            box.style.backgroundColor = 'gold';
        }
        imgzz.src = img;
    }
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var img3 = document.querySelector('.img3');
    var img4 = document.querySelector('.img4');
    var img5 = document.querySelector('.img5');
    var img6 = document.querySelector('.img6');
    var img7 = document.querySelector('.img7');

    var btn1 = document.querySelector('.btn1');
    var btn2 = document.querySelector('.btn2');
    var btn3 = document.querySelector('.btn3');
    var btn4 = document.querySelector('.btn4');
    var btn5 = document.querySelector('.btn5');
    var btn6 = document.querySelector('.btn6');
    var btn7 = document.querySelector('.btn7');
    var btn = document.querySelector(".btn");
    btn.onclick = function(){
        window.location = 'index.html'
    }
    btn1.onclick = function(){
        if(img4.style.display == 'none'){
            img4.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img4.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
    btn2.onclick = function(){
        if(img3.style.display == 'none'){
            img3.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img3.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
    btn3.onclick = function(){
        if(img6.style.display == 'none'){
            img6.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img6.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
    btn4.onclick = function(){
        if(img5.style.display == 'none'){
            img5.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img5.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
    btn5.onclick = function(){
        if(img2.style.display == 'none'){
            img2.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img2.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
    btn6.onclick = function(){
        if(img1.style.display == 'none'){
            img1.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img1.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
    btn7.onclick = function(){
        if(img7.style.display == 'none'){
            img7.style.display = 'block';
            this.style.backgroundColor = "black";
            this.style.color = "white";
        }else{
            img7.style.display = 'none';
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    }
  
}