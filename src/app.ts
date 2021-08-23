import { PersonGreeter } from "./personGreeter";

const firstName = "Jake";
const secondName = "Winwood";

console.log(`Hello ${firstName} ${secondName}`);

type Person = {
    firstName: string;
    secondName: string;
    age: number;
    dob: Date;
}

const person: Person = {
    firstName: 'Jake',
    secondName: 'Winwood',
    age: 23,
    dob: new Date(1997, 8, 10)
};

const sayHelloToPerson = (p: Person) => {
    console.log(`Hello ${p.firstName} ${p.secondName} your date of birth is ${p.dob}`)
}

sayHelloToPerson(person);

const greeter: PersonGreeter = new PersonGreeter("Jake", "Winwood", new Date(19967, 8, 10));
greeter.greet();