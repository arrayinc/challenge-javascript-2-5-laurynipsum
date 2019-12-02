// *** YOUR ANSWER BELOW ***
"use strict";

function negate(x){
    return "un" + x;
}
console.log(negate("cold"));

function intensify(x){
    return "plus" + x;
}
console.log(intensify("cold"));

function reinforce(x){
    return "double" + x;
}
console.log(reinforce(intensify("cold")));

console.log(reinforce(intensify(negate("cold"))));