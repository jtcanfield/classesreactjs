// YOUR IMPORTS BELOW:


// YOUR FUNCTION CALLS BELOW:



// WHEN COMPLETE - THIS LINE AND EVERYTHING BELOW SHOULD BE REMOVED
/*
INSTRUCTIONS
1- The only thing that should be in app.js are all of the appropriate imports and all the function calls.
2 - For each category, create a corresponding file. i.e, Strings = strings.js
3 - Put each of the files created in a /utils directory
4 - Each category will have export / import instructions. Read carefully!
*/

//  WARMUP
// Export warmUp() as a 'default'
function warmUp(data) {
  return console.log("Imported this function: ", data);
};

warmUp(warmUp);


// DATEANDTIME
// Export ALL date and time functions, inline.
// Import  using the * operator (as = allfunctions).
function getCurrentTime(){
  var time = new Date().toLocaleTimeString();
  return console.log(time);
};

function getCurrentDate(){
  var date = new Date().toLocaleDateString();
  return console.log(date);
};

getCurrentTime();
getCurrentDate();


// MATH
// Export all functions individually.
// Import only square and round, using { }.

function power(x,y){
  return console.log(Math.pow(x,y));
};

power(8,2);

function square(x){
  return console.log(Math.sqrt(x));
};

square(64);

function round(x){
  return console.log(Math.round(x))
};

round(6.234);

// ARRAYS
// Keep variables in the arrays file, no need to export.
// Export each function individually.
// Import each function individually using { }.

var allLanguages = [];
var languages = ["JavaScript", "Ruby", "Phython", "CSS"]
var moreLanguages = {
  html: "HTML",
  php: "php"
}

function mapper(){
  return Object.keys(moreLanguages).map(function(key){
    var items = moreLanguages[key];
    console.log("mapper: ", items);
    return items;
  });
}

function concatArrays(){
 var newArray = languages.concat(mapper())
 console.log(newArray);
}

mapper();
concatArrays();

// UTILITIES
// Export both the function and myObject, inline.
// Import both using the * operator (as = utilities).

function iterator(data){
  data.forEach(function(item){
    console.log("Item:", item)
  })
};

var myObject = {
  array: ["motheboard", "memory", "processor"],
  greeting: function(name){
    return console.log("Hello, my name is " + name + ".");
  }
};

iterator(myObject.array);
myObject.greeting('Matt');
