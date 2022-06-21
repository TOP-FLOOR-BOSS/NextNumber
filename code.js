
let array = [1,2,3,4,5,6];



const NumberSeq = array.values();
let one = NumberSeq.next().value;
let two = NumberSeq.next().value;
let three = NumberSeq.next().value;
let four = NumberSeq.next().value;
let five = NumberSeq.next().value;


document.querySelector('#array').innerHTML = array;

document.querySelector('#arr1').innerHTML = one;
document.querySelector('#arr2').innerHTML = two;
document.querySelector('#arr3').innerHTML = three;
document.querySelector('#arr4').innerHTML = four;
document.querySelector('#arr5').innerHTML = five;