function fibb(n) {

     if (n === 1) {
         return 0
     }
     if (n === 2) {
         return 1
     }
         return fibb(n-1) + fibb(n-2)
    
}


function fibonacci(num)
    {   
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }


console.log(fibb(8))
console.log(fibonacci(8))