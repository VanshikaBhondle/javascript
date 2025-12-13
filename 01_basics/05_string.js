const name= "hitesh"
const ID=50
// console.log(name +ID +"value")
//*** it is very out dated to print it...... */


//@@@@@________STRING INTERPOLATION_______@@@@@@@@@@@@@//
console.log( 'HELLO my name is ${name} and my repo count is ${ID} ');
 const gameName= new String ('hitesh-hc-com')
 console.log(gameName[0]);
  console.log(gameName.__proto__);

   console.log(gameName.length);
    console.log(gameName.toUpperCase());
     console.log(gameName.charAt(2));
     console.log(gameName.indexOf('t'));

     


     const newString = gameName.substring(0,4);
     console.log(newString);
      const nString = gameName.slice(-8,4);
console.log(nString);
     const  anotherString ="    hitesh  "
     console.log(anotherString);
     console.log(anotherString.trim());
     // trim.start trim.end bho=i hota hai
     const url="https://vanshika.com/vanshika%20Bhondle"
     console.log(url.replace('20%','-'));
     console.log(url.includes('vanshika'))
      console.log(url.includes('veena'))

     console.log(gameName.split('-'));
     
//      The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.
     
    //  separator	Optional.********
// A string or regular expression to use for splitting.
// If omitted, an array with the original string is returned.
// limit	Optional.**********
// An integer that limits the number of splits.
// Items after the limit are excluded.
let you ="harru"
let friend ="naman"
 console.log(name.concat("is  friend of  ", friend,"ok",you))
 // name me add hua gaya sab

 
 