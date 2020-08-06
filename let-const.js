const pi = 3.1416;
console.log(pi);

const numbers = [10, 20, 30];
numbers[1] = 25;
numbers.push(40);
console.log(numbers);
numbers.pop();
console.log(numbers);

// We can change array element by index, though we declare it as a const.
// We also can push or pop on that array. 

// numbers = [25, 30];
// console.log(numbers);

// but we cannot change the whole array just like 14 no. line. 

const student = {name: "Roky", ID: 18701035};
student['name'] = 'Roky Das';
console.log(student);

// we can change also object's elements by their index. 

// student = {name: "Riya Das", ID: 18654545};
// console.log(student);
// but we cannot change the whole object just like 25 no. line.

let a = 10;
// let dile variable er man change kora jai. 
// kintu let er arekta subidha hosse eta lick hobe na. 

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}

console.log(sum);
// console.log(i);

// ekhane sum variable ta ke age let diye declare kora hoise. tai eta for loop er baire accessable. 
// but i variable ta ke shudhu for loop er vitor declare kora hoise. tai for loop er baire eta niye kaj kora jabe na. 
// ekhane let na diye var dile i er value loop er baire cole asto. 
// tai let er subidha ta holo eta i er value ke lick hote dei nai. 