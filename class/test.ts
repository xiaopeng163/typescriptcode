class Person {
  private name: string
  constructor() {
    this.name = "default name"
  }
  changeName(name: string){
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Student extends Person {
  school: string;
  constructor() {
    super()
    this.school = "default school"
  }
  changeSchool(school: string) {
    this.school = 'new school'
  }

}


let person = new Person()

console.log(person.getName())

person.changeName("new name")

console.log(person.getName())


let student = new Student()
console.log(student.getName())
console.log(student.school)
