//hoisting exercises

name = 'Nellie';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Eleanor';
    console.log(name);
}

console.log('before anything called');
let avg = average(5, 2);
console.log('after avg was stored in let and called', avg);
function average(a, b) {
    var answer = (a + b)/2;
    return answer;
}


//scoping exercises

let fruits = ['strawberry', 'blueberry', 'mango'];

// let favFruit;

function printFirstFruit() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
    
}

printFirstFruit();

// function printFavFruit() {
//     console.log(favFruit);
// }

// printFavFruit();

writeName();
function writeName() {
    console.log('Hello, Nellie');
}