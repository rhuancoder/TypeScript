/// <reference path="IStudent.ts" />
/// <reference path="ISubscriber.ts" />



module tsbr {
    export class Student implements IStudent, ISubscriber {
        constructor(public name: string, public email: string, public isSubscriber: boolean, public age?: number) {}
    
        register(): void {
            console.log("Student has been registered !");
        }
    }
}