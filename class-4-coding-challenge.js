function LongestWord(sen) { 

    // code goes here
      
    sen = sen.replace(/[\W_]+/g, ' ').split(" ");
  
    let sorted = sen.sort(function(a, b) {
      return b.length - a.length;
    });
  
    return sorted[0]; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));