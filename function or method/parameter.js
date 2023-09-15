//parameterized functions
//using function with parameter i.e. sum(parameter)

// no parameter no return

// function getnumber(){
//     let num = parseInt(prompt("Enter the Number: "));
//     vin = num**3;
//     document.write(vin);
// }
// getnumber();



//parameter with no return

// function sum(a,b){   //add
//     c = a+b;    
//     document.write("Sum is "+c);
// }
// sum(20,50);

// function subtract(a,b){   //subtract
//     c = a-b;    
//     document.write("Minus is "+c);
// }
// subtract(20,50);


//parameter with return

// function getSum(a,b){  //addition
//     c = a+b;
//     return "Sum is: "+c;
// }
// document.write(getSum(10,20));

// function getDivision(a,b){  //division
//     c = a/b;
//     return "Division of two numbers is: "+c;
// }
// document.write(getDivision(20,10));


//only return

// function sum(){
//     var a = parseInt(prompt("Enter the value of a:"));
//     var b = parseInt(prompt("Enter the value of b: "));
//     c = a + b
//     return "Addition of two numbers is: "+c;
// }
// document.write(sum());

//anonymous function

var z = function(a,b){
    sum = a+b;
    // document.write(+sum);
    return "The Sum is: "+sum;
}
document.write(z(10,20));