console.log("hello");

let oneContainer = document.getElementById("one");
let recipeOne = document.createElement("div");
oneContainer.appendChild(recipeOne);


function makeRed(merlot,brandy,liqueur,soda,bottle){
    console.log("You need stir together"+ merlot+ " cup of merlot with" + liqueur + "in a "+ bottle + " ml bottle."+ "Add " + brandy +" cup of brandy with " + soda+ " cups of soda in the add.");
    recipeOne.innerHTML = "You need stir together "+ merlot+ " cup of merlot with " + liqueur + " cup of liqueur in a "+ bottle + " ml bottle. "+ "Add " + brandy +" cup of brandy with " + soda+ " cups of soda in the end.";
}

makeRed(1,0.5,1,3,750);


let twoContainer = document.getElementById("two");
let recipeTwo = document.createElement("div");
twoContainer.appendChild(recipeTwo);


function makeFrench(gin,juice,sugar,champagne,shaker){
    console.log("You need stir together"+ gin+ " ounce of gin with" + sugar + "in a "+ shaker + " ml shaker."+ "Add " + juice +" tablespoon of juice with " + champagne+ " cups of champagne if you want.");
    recipeTwo.innerHTML = "You need stir together "+ gin+ " ounce of gin with " + sugar + " tablespoon of sugar in a "+ shaker + " ml shaker. "+ "Add " + juice +" tablespoon of juice with " + champagne+ " cups of champagne if you want.";
}

makeFrench(1,2,1,1,600);


let threeContainer = document.getElementById("three");
let recipeThree = document.createElement("div");
threeContainer.appendChild(recipeThree);


function makeCho(vodka,chocolate,cream,martini,glass){
    console.log("You need stir together"+ vodka+ " ounce of vodka with" + cream + "in a "+ glass + " ml glass with a chocolate rim and drizzle chocolate syrup."+ "Add " + chocolate +" ounce of chocolate liqueur with " + martini + " cup of martini.");
    recipeThree.innerHTML = "You need stir together "+ vodka+ " ounce of vodka with " + cream + " ounce of cream in a "+ glass + " ml glass with a chocolate rim and drizzle chocolate syrup. "+ "Add " + chocolate +" ounce of chocolate liqueur with " + martini+ " cup of martini.";
}

makeCho(1,1,0.5,1,400);