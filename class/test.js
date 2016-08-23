var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person() {
        this.name = "default name";
    }
    Person.prototype.changeName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this);
        this.school = "default school";
    }
    Student.prototype.changeSchool = function (school) {
        this.school = 'new school';
    };
    return Student;
}(Person));
var person = new Person();
console.log(person.getName());
person.changeName("new name");
console.log(person.getName());
var student = new Student();
console.log(student.getName());
console.log(student.school);
