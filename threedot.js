const ages = [22, 20, 17, 14, 10];
const ages2 = [15, 16, 12, 40];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5, 10]).concat(ages3); // purano niyom

const allAges2 = [ages, ages2, 5, 10, ages3]; 
// array er vitor array. bangla niyom. eta amra cai nai. 

const allAges3 = [...ages, ...ages2, 5, 10, ...ages3];
// evabe array gular age three dot (...) dile sob array mile ekta notun array hoye jabe. 

console.log(allAges);
console.log(allAges2);
console.log(allAges3);

const business = 650;
const minister = 450;
const sochib = 250;

const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const takaPoisha = [650, 450, 250]; 
//const maximumTakaPoisha = Math.max(takaPoisha); 
// ekhane Math.max() er vitor full array diye dile jhamela lege jabe. 

const maximumTakaPoisha = Math.max(...takaPoisha);
// kintu eivabe ... diye dile function er vitor just array er element gula jabe. 
// ... spread out kore dei array gula ke. 
console.log(maximumTakaPoisha);