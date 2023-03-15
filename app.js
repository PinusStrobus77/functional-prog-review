// 1

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
  }
// 2

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
   
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

  // Only change code above this line
}

nonMutatingSort(globalArray);

// 3

function splitify(str) {
  // Only change code below this line

  return str.split(/\W/);
  // Only change code above this line
}

splitify("Hello World,I-am code");

// 4

function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/).join(" ");

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

// 5


// Only change code below this line


function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// 6

function checkPositive(arr) {
  // Only change code below this line
 return arr.every(val => val > 0);

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// 7 

function checkPositive(arr) {
  // Only change code below this line

  return arr.some(elem => elem > 0);
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// 8

function add(x) {
  // Only change code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };

  // Only change code above this line
}

add(10)(20)(30);
