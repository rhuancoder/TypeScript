var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function say(person) {
    return "Hello " + person;
}
var user = new Student("Rhuan", "Carvalho");
console.log(say(user));
