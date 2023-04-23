const readline = require('readline');  // readline module 
var clc = require("cli-color");


const { stdin: input, stdout: output } = require('process'); //process module



function CoffeeShopp(){
    const rl = readline.createInterface({ input, output });  // creating a combined interface to get both input and output together

  console.log("1- black cofee Rs 100 ,2- latte 200 \n")
   rl.question("Please select the menu \n ",(menu)=>{
    if(menu=="1"){
       console.log("Preparing your coffeeee \n");
       setTimeout(()=>{
        console.log("cofeee ready you have to pay 100 Rs");
         rl.close();
        // CoffeeShopp()
       },2000)
       

    }
    //

   })

}

CoffeeShopp()