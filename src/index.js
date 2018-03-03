module.exports = function longestConsecutiveLength(array) {
  if(!array.length) return 0;

  let mass = {};
  for(let i = 0; i < array.length;i++){
    mass[array[i]] = 1;
  }

  let keys = Object.keys(mass);
  let count = 0;
  let tempCount = 0;
  for(let i = 0; i < keys.length - 1;i++){
    if(keys[i+ 1] - keys[i] == 1){
      tempCount++;
    }else{
      if(tempCount > count) count = tempCount;

      tempCount = 0;
      continue;
    }
  }



 return count + 1;
}


// function longestConsecutiveLength(array) {

//   let mass = [];
//   for(let i = 0; i < array.length;i++){
//     mass[array[i]] = 1;
//   }

//   let count = 0;
//   let tempCount = 0;
 
//   for(let i = 0; i < mass.length - 1;i++){
//     if(mass[i] != undefined && mass[i+1] != undefined){
//       tempCount++;
//     }else{
//       if(tempCount > count) count = tempCount;

//       tempCount = 0;
//       continue;
//     }
//   }


//  return count + 1;
  
// }



// longestConsecutiveLength([100, 4, 200, 1, 3, 2]);