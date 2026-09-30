class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Yo, I am " + this.name); }
}
 
class Student extends Person {
  study() { console.log(this.name + " is pretending to be average while studying."); }
}
 
const student = new Student("Ayanokouji");
student.sayHello();
student.study();