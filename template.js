const firstName = 'Roky';
const lastName = 'Das';
const fullName = firstName + ' ' + lastName + ' is a good boy';
console.log(fullName);
const fullName2 = `${firstName} ${lastName} is a good boy. He is ${10+12} years old.`; 
console.log(fullName2);

// ekhane fullName2 te amra ``(carret) use korsi. 
// eta dekhte '' er moto. but er kisu extra power ase. 
// ekhane amra carret er modhye ekta string liksi. 
// ekhane variable gula string er vitor ${} diye use korte parsi. 
// ete kore ager moto concat korte hoi nai. 
// ${} er vitor sob calculation o kora jai. 

const multiLine = "I am Roky Das.\nI am 22 years old." // ager niyom
console.log(multiLine);

const multiLine2 = `I am Roky Das.
I am 22 years old. 
I am a student.` // ES-6 er notun niyom. sorasori new line e likhle kaj hoye jabe. 
console.log(multiLine2);