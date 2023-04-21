//Global objects--- >window object

//console.log(process);  // prints all the objects available in process

//console.log(process.argv);  // you can get the second argument of array passed by user

function sum(a,b){

    return a+b;

}
let a=Number(process.argv[2]) // you will get in string so convert it to number
let b=Number(process.argv[3]) // you will get in string so convert it to number


let result=sum(a,b)

console.log(result)