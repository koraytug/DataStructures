// Create a function that reverses a string :
// "abcdefg" should be :
// "gfedcba"

function reverse(str) {
  if(!str || str.lenght<2 || typeof str !== 'string' ){
    return "ops! something wrong!"
  }

  const reversedArray = [];

  for(let i = str.length-1 ;  i >=0 ; i-- ) {
      reversedArray.push(str[i]);
  }

  console.log(reversedArray);
  //return reversedArray;
}

module.exports.reverse = function(){
  reverse('abcdefg');
} 