console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyncWJxBEMQKdbw0" }).base(
  "appSYm60MLzHkJRqZ"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("playlist")
  .select({})
  .eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our data
var songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSongs();
  showSongs();
}

// just loop through the books and console.log them
function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach(song => {
    console.log("Song:", song);
  });
}

// look through our airtable data, create elements
function showSongs() {
  console.log("showSongs()");
  songs.forEach(song => {
    // create container for each song
    var songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    document.querySelector(".container").append(songContainer);

    // add song titles
    var songTitle = document.createElement("h1");
    songTitle.classList.add("song-title");
    songTitle.innerText = song.fields.title;
    songContainer.append(songTitle);

    var nameOfArtist = document.createElement("h1");
    nameOfArtist.classList.add("song-artist");
    nameOfArtist.innerText = song.fields.artist;
    songContainer.append(nameOfArtist);


    var songImage = document.createElement("img");
    songImage.classList.add("song-image");
    songImage.src = song.fields.song_image[0].url;
    songContainer.append(songImage);

 
  });
}
