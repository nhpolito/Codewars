// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// string s = "01000000X000X011X0X"

// '0' : uninfected

// '1' : infected

// 'X' : ocean

// start: map1 = "01000000X000X011X0X"
// end:   map1 = "11111111X000X111X0X"
// total = 15
// infected = 11
// percentage = 100*11/15 = 73.33333333333333

function infected(s) {
    console.log(s.split("X"))
    return 0;
  }

infected('01000000X000X011X0X')