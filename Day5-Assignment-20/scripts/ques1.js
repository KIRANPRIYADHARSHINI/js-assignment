// Question 1:
// Write a program which does the following things:
// 1. Takes a positive number from the user.
// 2. Makes an array of numbers till the number given by user
// 3. Use higher order function to filter the odd numbers
// 4. Generate and array of the cubes of the filtered numbers.

let  arr=[]; 
var n=parseInt(prompt("Enter positive number:"));
for(let i=1;i<=n;i++)
{
    arr.push(i);
}
let arr1=arr.filter((n)=>n%2==0).map((n)=>n**3)
{
    console.log(arr1);
}

arr.forEach((el)=>{
    console.log(el**3);  
})
let odd=arr.filter(el=>el%2==1);
let oddcubes=arr.filter(el=>el%2==1).map(el=>el**3);
console.log(odd);
console.log(oddcubes);