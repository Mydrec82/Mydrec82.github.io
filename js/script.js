'use strict';


const triangles = document.querySelectorAll('.first__triangle');
const circles = document.querySelectorAll('.first__circle');

circles[1].after(triangles[2]);

circles[0].textContent = '56';