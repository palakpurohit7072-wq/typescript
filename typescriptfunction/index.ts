// let message: string = "Hello TypeScript";

// console.log(message);


// let name : string = "pap";

// let rev = name.split("").reverse().join("");
// if (name === rev){
//     console.log("palindrom");
// }
// else{
//     console.log("not");
// }


function ispalindrom(): boolean{
 let name : string = "pa"; 
 let rev = name.split("").reverse().join(""); 
 return name === rev
 }

 let result = ispalindrom()
 console.log(result);



let data : string = "pap";
let rev: string = ""
for (let i =data.length-1 ; i>=0 ; i-- ){
    rev += data[i]; 
}
if (data === rev){
    console.log("palindrom")
}
else{ console.log("not");}
   

