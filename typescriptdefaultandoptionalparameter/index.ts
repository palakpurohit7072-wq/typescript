function  test(name:string,id=1){
return {name , id}
}
const result = test("palak");
console.log(result);// default function

 
function greek(name:string,id?:number){
if(id){
    return {name,id}
}
else{
    return(name)
}
}
const result1 = greek("palak");
const result2 = greek("palak",4);
console.log(result1);
console.log(result2);

// ...........................................
// Array
let arr:number[] = Array.of(10, 20, 30);

console.log(arr);

let names:string[] = Array.of("Palak", "Riya", "Priya");

console.log(names);