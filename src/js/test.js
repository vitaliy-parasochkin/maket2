"use strict";

function solve(s){
    let res=0;
    for(let i=0;i<s.length;i++) {
        if (i===i.toUpperCase()) {
            res++;
        }
        else {
            res--;
        }
    }
    if (res>0) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}

console.log(solve('cODe'));