const person = {name: 'Roky Das', age: 22, job: 'facebook', address: 'Chittagong', phone: '01521227862', friends: ['Tonmoy', 'Bonda', 'Drubo', 'Rajesh']};

console.log(person.address);

const address = person.address;
console.log(address);

const { phone, age, name } = person; 
// { something } evabe kisu thakle er namer j property ase obect er sei property er value ta assign hobe. 
console.log(phone, age, name);

// object e nai emon kisu { } er vitor dile tar man undefined hoye jabe. 

const friends = ['Tonmoy', 'Bonda', 'Drubo', 'Rajesh', 'Soruj'];
const [firstFriend, secondFriend, ...restFriends] = friends;
console.log(firstFriend, secondFriend, restFriends);
//...something dile sekhane baki sob cole asbe. 

//nested object theke destructuring kora. 
const complexObject = {
    name: 'abc',
    info: {
        address2: 'Chittagong',
        leader: 'Jhankar Vhai'
    }
}

const {address2} = complexObject.info;
console.log(address);