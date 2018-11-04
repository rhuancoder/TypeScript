/// <reference path="IStudent.ts" />
/// <reference path="ISubscriber.ts" />
var tsbr;
(function (tsbr) {
    var Student = /** @class */ (function () {
        function Student(name, email, isSubscriber, age) {
            this.name = name;
            this.email = email;
            this.isSubscriber = isSubscriber;
            this.age = age;
        }
        Student.prototype.register = function () {
            console.log("Student has been registered !");
        };
        return Student;
    }());
    tsbr.Student = Student;
})(tsbr || (tsbr = {}));
