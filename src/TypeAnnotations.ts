/* 
Type Annotations || Signature
--Indicate The Data Types of Variables
--Indicate The Data Types of Functions Input/Output

-Why we use it ?
--Is it Mandatory ?
--What Happen if we Didn't Use if ?
*/

let theName: string = "Yasser";
let theAge: number = 25;
let hire: boolean = true;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
// console.log(typeof add(10, "20"));
