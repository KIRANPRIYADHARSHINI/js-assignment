var sales =prompt("Enter the total sale");

if(sales>=0 && sales<=5000)
{
    var reward=sales*0.02;
    console.log("The commision earn by Emloyee :", reward);
}
if(sales>=5001 && sales<=10000)
{
    reward=(5001 *0.02) + ((sales-5001) * 0.05);
    console.log("The commision earn by Emloyee :", reward);
}
if(sales>=10001 && sales<=20000)
{
    reward=(5001 *0.02) + (5001 *0.02)+ ((sales-10001) * 0.07);
    console.log("The commision earn by Emloyee :", reward);
}
if(sales >=20000)
{
    reward=(5000 *0.02)+(5001 *0.05)+(10001 *0.07)+((sales-20000)*0.1)
    console.log("The commision earn by Emloyee :", reward);
}