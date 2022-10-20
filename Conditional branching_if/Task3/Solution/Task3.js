/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/


let a = prompt("Enter 'a' value");
let b = prompt("Enter 'b' value");
let result = (+a + +b < 4) ? "Below" : "Over";
//let result = ((Number(a) + Number(b)) < 4) ? "Below" : "Over";
alert(result);1