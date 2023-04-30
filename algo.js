function foo(n){
    let sum=0;
    
      const t0 = performance.now();
    
    
      for(let i=0;i<n;i++){
    
        
      }
    const t1 = performance.now();
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
    
      
    return sum;
    
      
    }
    
    foo(1000000000)