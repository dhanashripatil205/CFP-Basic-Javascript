//Object Destructuring

//ES5-We have writing the object like this.

// const bioData = {
//     name:"Kriti",
//     age:26,
//     degree:"Doctor"
// }

//console.log(bioData.name);

//ES6 1st way---we can access the name without (bioData.name).

// const bioData = {
//     name:"Kriti",
//     age:26,
//     degree:"Doctor"
// }


// let {name,age,degree} = bioData; //variable declared on same line so no need to use () bracket like below.

// console.log(`${name}`);

//ES6 2nd way---we can access the name without (bioData.name).

// const bioData = {
//         name:"Kriya",
//         age:26,
//         degree:"Doctor"
//     }

// let name,age,degree; //variabe declared

// ({name,age:myage,degree} = bioData); //if variable is declared seperately use () bracket around the object

// //you can also rename the variable e.g age:myage

// console.log(`${name}`);
// console.log(`${myage}`); //use new variable name here.

//--------------------------------------------------------------------------------------------------------

//Declared object inside the object

const bioData = {
    name:"Kriya",
    age:26,
    degree:"Doctor",

    hobby:{

        first : 'playing',
        sec: 'youtube videos'

    }
}

//i want to access sec variable of 2nd object.

let {name,age:myage,degree,hobby} = bioData; //passed hobby here

console.log(`My fav hobby is making ${hobby.sec}`);