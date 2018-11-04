/// <reference path="IStudent.ts" />
/// <reference path="Student.ts" />
var tsbr;
(function (tsbr) {
    function run(student) {
        student.register();
    }
    var student = new tsbr.Student("Rhuan", "rsjlcarvalho@gmail.com", true, 27);
    run(student);
})(tsbr || (tsbr = {}));
