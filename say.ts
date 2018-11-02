class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
}

function say(person: IPerson) {
    return "Hello " + person;
}

var user = new Student("Rhuan", "Carvalho");

console.log(say(user));