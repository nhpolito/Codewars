function count (string) {  

   let x = string.split("").reduce( (pv,cv) => {
        if (!pv[cv]) {
            pv[cv] = 0
        } 
        pv[cv] = pv[cv] + 1
        return pv

    }, {})
    console.log(x)
    // The function code should be here
     return x;
  }

console.log(count('fuck'))