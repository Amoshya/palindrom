const input = require("readline-sync");

let a = input.questionInt("number :- ");
let t = a;
let s = 0;
while (t>0)
{
    r = t % 10;
    t = Math.floor(t/10);
    s = s*10+r;

} 
if (s==a)
{
    console.log("p");
} 
else{
console.log("n");}