class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.varsity = "CU";
    }
}

const student1 = new student(18701035, "Roky Das");
const student2 = new student(18701027, "Jabed Hosen");

console.log(student1, student2);
console.log(student1.name, student2.name);