console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

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
  console.log("gotPageOfSins()");
  // add the records from this page to our array
  sins.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSins(err) {
  console.log("gotAllSins()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
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
    console.log("Sin:", sin);
  });
}

// look through our airtable data, create elements
function showSins() {
  console.log("showSins()");
  sins.forEach(sin => {
    // create container for each song
    var sinContainer = document.createElement("div");
    sinContainer.classList.add("sin-container");
    document.querySelector(".container").append(sinContainer);

    // add song titles
    // var sinCrimes = document.createElement("h1");
    // sinCrime.classList.add("sin-crimes");
    // sinCrime.innerText = sin.fields.crimes;
    // sinContainer.append(sinCrimes);


    // var sinImage = document.createElement("img");
    // sinImage.classList.add("sin-image");
    // sinImage.src = sin.fields.image[0].url;
    // sinContainer.append(sinImage);

    var sinCrimes = document.createElement("h1");
    sinCrime.classList.add("sin-crimes");
    sinCrime.innerText = sin.fields.crimes;
    document.body.append(sinCrimes);


    var sinImage = document.createElement("img");
    sinImage.classList.add("sin-image");
    sinImage.src = sin.fields.image[0].url;
    document.body.append(sinImage);


 
  });
}
