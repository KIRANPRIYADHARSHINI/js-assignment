// Question 2:
// Write a program that will display the multiplication table of a number on the webpage in a proper
// format. Take the input from the user.
// Input - 5
// Output - 5 x 1 = 5
//  5 x 2 = 10
//  and so on…

var num=prompt("Enter the Number, Which u want to Multiply :");
for (let i=1;i<=20;i++)
{
    console.log(num, 'X', i,'=', num*i);
}