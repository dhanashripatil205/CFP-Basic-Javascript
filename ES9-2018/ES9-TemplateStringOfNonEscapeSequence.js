//template string of non escape sequence

// Tags allow you to parse Template Strings with functions. The first parameter of the tag function contains an array of string values. The rest of the parameters are expression dependent. Finally, your function can return the processed string (or it can return something completely different).

function foo(str) {
    return str[0].toUpperCase();
}

foo`justjavac`; // Output JUSTJAVAC
foo`Xyz`; // Output XYZ

// console output 
//[ "justjavac" , raw : [ "justjavac" ]]

foo `just\\java\\c` ;
 // console output 
//[ "just\java\c" , raw : [ "just\\java\\c" ]]