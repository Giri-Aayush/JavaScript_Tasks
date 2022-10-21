function power(x,n){
 if(n == 0) return 1;
 return x*power(x,n-1);
}

let x = prompt("Enter x:");
let n = prompt("Enter n:");

alert(power(x,n));