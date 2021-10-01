function deleteNth(a, b) {
  console.log(a);
  console.log(b);
  //   reduce the array and return an obect
  let bigboy = a.reduce(
    (cv, nv) => {
      // create an item in the object that counts the instances of a number
      if (!cv[nv]) {
        cv[nv] = 0;
      }
      //   add up the instances
      cv[nv]++;
    // if the object number instance is less than b 
    // then from the array of our Object.keys(cv), we push the array item that matches the next value
    // we push this into the array stored in our object
      if (cv[nv] <= b) {
        cv.array.push(a[a.indexOf(nv)]);
      }

      console.log(cv);
       //   return the object
      return cv;
    },
    { array: [] }
  );

  console.log(bigboy);
  
  return bigboy.array
}

console.log(deleteNth([1,1,1,1],2)); // return [1,1]

// deleteNth ([20,37,20,21],1) // return [20,37,21]
