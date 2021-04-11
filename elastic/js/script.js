// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);
var sinAll;
var is_show = false

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyncWJxBEMQKdbw0" }).base(
  "appZ5dNiC1t1H6M82"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("criminal")
  .select({})
  .eachPage(gotPageOfSins, gotAllSins);

// an empty array to hold our data
var sins = [];

// callback function that receives our data
function gotPageOfSins(records, fetchNextPage) {
  // console.log("gotPageOfSins()");
  // add the records from this page to our array
  sins.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSins(err) {
  // console.log("gotAllSins()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    // console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSins();
  showSins();
}

// just loop through the books and console.log them
function consoleLogSins() {
  console.log("consoleLogSins()");
  sins.forEach(sin => {
    // console.log("Sin:", sin);
  });
}

// look through our airtable data, create elements
function showSins() {
  // console.log("showSins()");
  var classList = [
      'js-murder',
      'js-armed',
      'js-terro',
      'js-sex',
      'js-assa',
      'js-drug',
  ]
  var dh = ['dh1','dh2']
  console.log(sins)
  sins.forEach(sin => {
    // create container for each song
    var num = Math.floor(Math.random()*6);
    var sinContainer = document.createElement("div");
    sinContainer.classList.add('sin-container');
    sinContainer.classList.add(sin.fields.sort[0]);
    sinContainer.classList.add(num%2==1?'dh1':"dh2");
    sinContainer.setAttribute('id',sin.fields.image[0].url)
    sinContainer.append(sin.fields.crimes);
    document.querySelector(".box").append(sinContainer);
    sinAll = document.querySelectorAll('.sin-container')
    is_show = true
  });
}
var imgs = document.querySelector(".imgs");
document.onmouseover =  (event) =>  {
  if (event.target.classList.contains('sin-container')){
    // event.target.classList.remove('sin-container')
    // console.log(event.target.id);
    imgs.style.display = "block";
    imgs.children[0].src = event.target.id;
  }else {
    imgs.style.display = "none";
  }
}
// document.onmouseout = (event) => {
//   if (event.target.classList.contains('cons')){
//     event.target.classList.add('sin-container')
//   }
// }
var btn1 = document.querySelector('.js-murder')
var btn2 = document.querySelector('.js-armed')
var btn3 = document.querySelector('.js-terrorist')
var btn4 = document.querySelector('.js-sexually')
var btn5 = document.querySelector('.js-assassination')
var btn6 = document.querySelector('.js-drug')

var btn7 = document.querySelector('.js-reset')
var pd6 = false
var pd1 = false
var pd2 = false
var pd3 = false
var pd4 = false
var pd5 = false
btn7.addEventListener('click',e=>{
  location.reload()
})
btn1.addEventListener('click',e=>{
  let str = e.target.className.split(' ')[0].split('-')
  console.log(str)
  let arr = sinAll
  if(is_show){
    pd6 = false
    pd2 = false
    pd3 = false
    pd4 = false
    pd5 = false
    if(!pd1){
      document.querySelector(".box").style.background = "#fff"
      arr.forEach((item,index)=>{
        item.classList.remove('white')
        if(item.classList[1] != str[1]){
          item.classList.add('white')
        }
      })
      pd1 = !pd1
    }else{
      // document.querySelector(".box").style.background = "green"
      arr.forEach((item,index)=>{
        if(item.classList[1] != str[1]){
          item.classList.remove('white')
        }
      })
      pd1 =!pd1
    }
  }
})

btn2.addEventListener('click',e=>{
  let str = e.target.className.split(' ')[0].split('-')
  let arr = sinAll
  if(is_show){
    pd6 = false
    pd1 = false
    pd3 = false
    pd4 = false
    pd5 = false
    if(!pd2){
      document.querySelector(".box").style.background = "#fff"
      arr.forEach((item,index)=>{
        item.classList.remove('white')
        if(item.classList[1] != str[1]){
          item.classList.add('white')
        }
      })
      pd2 = !pd2
    }else{
      // document.querySelector(".box").style.background = "green"
      arr.forEach((item,index)=>{
        if(item.classList[1] != str[1]){
          item.classList.remove('white')
        }
      })
      pd2 =!pd2
    }
  }
})

btn3.addEventListener('click',e=>{
  let str = e.target.className.split(' ')[0].split('-')
  let arr = sinAll
  if(is_show){
    pd1 = false
    pd2 = false
    pd4 = false
    pd6 = false
    pd5 = false
    if(!pd3){
      document.querySelector(".box").style.background = "#fff"
      arr.forEach((item,index)=>{
        item.classList.remove('white')
        if(item.classList[1] != str[1]){
          item.classList.add('white')
        }
      })
      pd3 = !pd3
    }else{
      // document.querySelector(".box").style.background = "green"
      arr.forEach((item,index)=>{
        if(item.classList[1] != str[1]){
          item.classList.remove('white')
        }
      })
      pd3 =!pd3
    }
  }
})

btn4.addEventListener('click',e=>{
  let str = e.target.className.split(' ')[0].split('-')
  let arr = sinAll
  if(is_show){
    pd6 = false
    pd2 = false
    pd3 = false
    pd1 = false
    pd5 = false
    if(!pd4){
      document.querySelector(".box").style.background = "#fff"
      arr.forEach((item,index)=>{
        item.classList.remove('white')
        if(item.classList[1] != str[1]){
          item.classList.add('white')
        }
      })
      pd4 = !pd4
    }else{
      // document.querySelector(".box").style.background = "green"
      arr.forEach((item,index)=>{
        if(item.classList[1] != str[1]){
          item.classList.remove('white')
        }
      })
      pd4 =!pd4
    }
  }
})

btn5.addEventListener('click',e=>{
  let str = e.target.className.split(' ')[0].split('-')
  let arr = sinAll
  if(is_show){
    pd1 = false
    pd2 = false
    pd3 = false
    pd4 = false
    pd6 = false
    if(!pd5){
      document.querySelector(".box").style.background = "#fff"
      arr.forEach((item,index)=>{
        item.classList.remove('white')
        if(item.classList[1] != str[1]){
          item.classList.add('white')
        }
      })
      pd5 = !pd5
    }else{
      // document.querySelector(".box").style.background = "green"
      arr.forEach((item,index)=>{
        if(item.classList[1] != str[1]){
          item.classList.remove('white')
        }
      })
      pd5 =!pd5
    }
  }
})

btn6.addEventListener('click',e=>{
  let str = e.target.className.split(' ')[0].split('-')
  let arr = sinAll
  if(is_show){
    pd4 = false
    pd2 = false
    pd3 = false
    pd1 = false
    pd5 = false
    if(!pd6){
      document.querySelector(".box").style.background = "#fff"
      arr.forEach((item,index)=>{
        item.classList.remove('white')
        if(item.classList[1] != str[1]){
          item.classList.add('white')
        }
      })
      pd6 = !pd6
    }else{
      // document.querySelector(".box").style.background = "green"
      arr.forEach((item,index)=>{
        if(item.classList[1] != str[1]){
          item.classList.remove('white')
        }
      })
      pd6 =!pd6
    }
  }
})
