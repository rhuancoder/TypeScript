/// <reference path="IStudent.ts" />
/// <reference path="Student.ts" />

module tsbr {
    
    function run(student: IStudent) {
        student.register();
    }
    
    var student = new Student("Rhuan", "rsjlcarvalho@gmail.com", true, 27);
    run(student);
}
