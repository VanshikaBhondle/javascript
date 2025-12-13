//array
 const myarr=[0,1,2,3,4,5]
// arr of different datatype can be there 
// array use index 0
// array in js can increse it size any time

const myhero=['sid','abhi','kartik']

//array ke andr bhi prototype  hota hai 

 console.log(myarr[0])

 // array methods
//  myarr.push(6)
//  myarr.push(7)
//  myarr.pop()

//  myarr.unshift(9) /// samne wo element add hoga aur sbko shift krega
// myarr.shift(); // samne wala element remove ho jayega


// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newarr=myarr.join()// join-> bind kr dega array ko and convert it into string type 

// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr);


//******* slice,splice******//


 console.log("A",myarr);
 const myn1 = myarr.slice(1,3)


 console.log(myn1);
 console.log("B",myarr);

 const myn2=myarr.splice(1,3)
 console.log("c",myarr)
 console.log(myn2);
 
 
 
 
 
