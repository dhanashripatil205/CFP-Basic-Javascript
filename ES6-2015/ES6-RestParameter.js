//Rest Parameters

//ES5

// function sum (a,b,c,d,e,f){ //this is not efficient way.

//     console.log(a+b+c+d+e+f);//this is not efficient way.

// }

// sum(1,2,3,4,5,6); 

//---------------------------------------------------------------------------------------------------------------

//ES6 to tackle abolve problem use RestParameter ...

//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function sum (...inputs){ //inputs is an arrary & inside it [1,2,3,4,5,6] all array elements are there. 
    //console.log(inputs);  //output->[1,2,3,4,5,6]

    console.log(...inputs); //output->1 2 3 4 5 6 (print seperate values.)
        //if we want seperate array elements then use here ... before the inputs array.

        //print array element using for of loop.

        let total = 0;
        for(let i of inputs){
            total+=i;
        }

        console.log("Addition of all array elements are :",total);

}

sum(1,2,3,4,5,6); 

//------------------------------------------------------------------------------------------------------------------

//Example of RestParameter

function fun(a,b,...c){ //a=1st(parameter)=Ronaldo(1st Argument),b=2nd(parameter)=Neymar(2nd Argument)
    //...c is an array & its hold remainig arguments inside it['Pale','Mess','Edan']
    console.log(`${a} ${b}`); //output->Ronaldo,Neymar
    console.log(c);           //output->['Pale','Mess','Edan']
    console.log(c[0]);        //output->Pale
    console.log(c.length);    //output->3
    console.log(c.indexOf('Edan'));//output->2


}

fun('Ronaldo','Neymar','Pale','Mess','Edan')//Function calling(Arguments)