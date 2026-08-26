// let calfun = (a:number , b:number):number=>{
// let sum = a + b;
// return sum;
// }
// let result:number = calfun(3,"5");
// console.log (result);

// for checking typeOF
let myname = 5;
let namenumber = "palak";
console.log(typeof myname.toString());

//in case of NaN
let name: number = NaN;
let number = "palak";
console.log( typeof name);


//  boolean and  bigint

function check(a:number):boolean
{
    return a%2===0;
}
let result = check(4);
console.log(result);

// any and unknown
let a1:any = 55;   //example of any
a1 = "palak";
console.log(a1);
   
// example of unknown
let a2:unknown = 55;
a2 = "palak";
if(typeof a2==="string"){
    console.log(a2.toUpperCase());
}

