class Parent{
    constructor(){
        this.fatherName = "Mintu Das";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    printMessage(){
        return "I am " + this.name + ". My father's name is " + this.fatherName;
    }
}

const baby1 = new Child("Roky");
const baby2 = new Child("Riya");
console.log(baby1.printMessage());
console.log(baby2.printMessage());