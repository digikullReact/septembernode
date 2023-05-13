function Factorial(n){

    // Base condition
      if(n==0){
        return 1;
      }
    
    // Returning in each recursion
      return n* Factorial(n-1)
      
    }
    //console.log(Factorial(5))
    
    
    
    // How to calculate the nth fibonacci number --->
    // 0,1,1,2,3,5,8,13,21,34---->

    let mp={};
    function NthFibonacci(n){
    
    
      if(n==0 || n==1){
        return n
      }
    
      
      if(mp[n]){
        return mp[n];
      }
    
      // we have the recursive 
       mp[n]=NthFibonacci(n-1)+NthFibonacci(n-2);
      return mp[n];
      
    }
    
    function NthFibonacciRe(n){
    
    if(n==0 || n==1){
        return n
      }
    // we have the recursive 
    
      return NthFibonacciRe(n-1)+NthFibonacciRe(n-2);
      
    }
    
    
    // O(2^n)
    console.log(NthFibonacci(500))