// function doubleIt(num){ // ager niyom
//     return num * 2;
// }

// const doubleIt = function myFunction(num){ // eta majhari niyom. 
//     return num * 2;
// }

// ekhane myFunctin function ta ke doubeleIt function e assign kore dilam. 
// ete kore ekhon theke myFunction ar function hisebe kaj korbe na. 
// ekhon theke doubleIt function kaj kobe. 

// arrow function
// const (functionName) = (parameter) => (return something)
// return er age arrow use kora hosse bole etake bole arrow function

const doubleIt = num => num * 2;

const result = doubleIt(5); 
console.log(result);

const add = (x, y) => x + y;

const result1 = add(50, 70);
console.log(result1);

//without parameter. ekta () bracket dite hobe. eta kono parameter nai seta bujabe. 
give5 = () => 5;

const result2 = give5();
console.log(result2);

//Multiline arrow function
const math = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multi = sum * diff;
    return multi; 
}

const result3 = math(7, 8);
console.log(result3);

// multiline arrow function e return keyword ta use korte hoi. 
// kintu single line e return keyword use kora hoi na. eta mul difference. 