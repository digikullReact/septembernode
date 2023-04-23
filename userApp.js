const readline = require('readline');  // readline module 

const { stdin: input, stdout: output } = require('process'); //process module

//stdin --->is an interface from where you can take the input from the user
//stdout --->is an interface from where your application can send output to the outside world

const rl = readline.createInterface({ input, output });  // creating a combined interface to get both input and output together
/**
 * rl.question("Enter you name \n",(name)=>{  // \n -->is a new line character
    console.log(name);

    rl.close();

})
 */


// --->calculator   ----->

function UserInput(rl,operation){


    rl.question("Please enter the first number \n",(firstNumber)=>{
        let fn=Number(firstNumber);

        rl.question("Please enter the second number \n",(secondNumber)=>{
            let sn=Number(secondNumber);
            if(operation==1){
                console.log("the addition is",sn+fn);
            }
            else if(operation==2){
                console.log("the subtraction is",fn-sn);
            }
            else if(operation==3){
                console.log("the multiplication is",fn*sn);
            }
            else if(operation==4){
                console.log("the divison is",fn/sn);
            }
            else{
                console.log("Please try again");
            }
           
            //rl.close(); // to close the prompt and exit
            UserAdd();


        })
    

    })


}

function UserAdd(){
   
    rl.question("Enter the operation you want to perform [1 - add]  [2 - subtract] [3 - multiplication] [4 - division]  \n",(operation)=>{  // \n -->is a new line character
    
        UserInput(rl,Number(operation));
       /*
        switch (Number(operation)) {
            case 1:
                // then you have to ask again to the user for the numbers
    
                UserInput(rl);
    
    
                
                break;
            
                case 2:
                    UserInput(rl);

                
                break;
                case 3:
    
                UserInput(rl);

                
                break;
                case 4:
                    UserInput(rl);

                
                break;
            default:
                console.log("Wrong input ,please try again");
                UserAdd();
                break;
        }
        */
    
      
    
    })

}


UserAdd();





