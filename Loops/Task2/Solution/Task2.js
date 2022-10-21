const { it } = require("node:test");

let i = 0;
while (++i < 5) alert( i );

// in this case we can see we are using the calue of i after incrementing it
// so we will see the output in this case as -> 1 2 3 4

let i = 0;
while (i++ < 5) alert( i );

// in this case we can see we are using the value of i before incrementing it
// so we will see the output in this case as -> 1 2 3 4 5