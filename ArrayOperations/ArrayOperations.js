//************************************************ Array Operations **********************************************/

//Array.pop()

const fruits = ["Banana", "Orange", "Apple", "Mango"]; //delete last element(LIFO)
fruits.pop();

//console.log(fruits);

//-----------------------------------------------------------------------------------------------------------------


//Array.push()

const fruitssssss = ["Banana", "Orange", "Apple", "Mango"]; //Insert element
fruitssssss.push("Kiwi");

//console.log(fruitssssss);

//-----------------------------------------------------------------------------------------------------------------


//Array shift() ->removes the first array element and "shifts" all other elements to a lower index.

const apple = ["Banana", "Orange", "Apple", "Mango"];
apple.shift();

console.log(apple);

//-----------------------------------------------------------------------------------------------------------------

//Array unshift()->adds a new element to an array (at the beginning), and "unshifts" older elements:

const cat = ["Banana", "Orange", "Apple", "Mango"];
cat.unshift("Lemon");

console.log(cat);
//-----------------------------------------------------------------------------------------------------------------

//Array length

// const papaya = ["Banana", "Orange", "Apple", "Mango"];

// console.log(papaya.length);

//-----------------------------------------------------------------------------------------------------------------

//Array delete()

const fly = ["Banana", "Orange", "Apple", "Mango"];
delete fly[0];

console.log(fly);

//-----------------------------------------------------------------------------------------------------------------

//Merging (Concatenating) Arrays

const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren = array1.concat(array2, array3); 
console.log(myChildren);

//-----------------------------------------------------------------------------------------------------------------

//Array splice()

const fruitee = ["Banana", "Orange", "Apple", "Mango"];
fruitee.splice(2, 2, "Lemon", "Kiwi");
//1st parameter defines position,2nd parameter defines how many ele shoud be removed, The rest of the parameters define the new elements to be added.

console.log(fruitee);

//-----------------------------------------------------------------------------------------------------------------

//Using splice() to Remove Elements

const kap = ["Banana", "Orange", "Apple", "Mango"];
kap.splice(1, 2);//(1) defines the position & (2) defines how many elements should be removed.

console.log(kap);

//-----------------------------------------------------------------------------------------------------------------
//Array slice()

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

const Liquid = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = Liquid.slice(1);

console.log(citrus);

//-----------------------------------------------------------------------------------------------------------------

//slice() method can take two arguments like slice(1, 3).

const craft = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const s = craft.slice(1, 3);
console.log(s);

//-----------------------------------------------------------------------------------------------------------------

//Array sort()

const sorting = ["Banana", "Orange", "Apple", "Mango"];
let app = sorting.sort();

console.log(app);

//-----------------------------------------------------------------------------------------------------------------

//Array reverse()

const logical = ["Banana", "Orange", "Apple", "Mango"];

let logics = logical.reverse();

console.log(logics);


//-----------------------------------------------------------------------------------------------------------------

//Array split()


//The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.


let text = "How are you doing today?";

// const mArray = text.split(" ");
// console.log(mArray);

// //string.split(separator, limit)
// const myArray = text.split(" " ,4); //output-> How, are ,you ,doing
// let word = myArray[1];

// console.log(myArray);
// console.log(word);

const myArray2 = text.split("o");
console.log(myArray2);                //output-[ 'H', 'w are y', 'u d', 'ing t', 'day?' ]


//-----------------------------------------------------------------------------------------------------------------

//Array valueOf()

// The valueOf() method returns the array itself.

// The valueOf() method does not change the original array.

const animal = ["Banana", "Orange", "Apple", "Mango"];
const myArray = animal.valueOf();
console.log(myArray); //["Banana", "Orange", "Apple", "Mango"];


//-----------------------------------------------------------------------------------------------------------------

//Array forEach Loop()

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum);
}