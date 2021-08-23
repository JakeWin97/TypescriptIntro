export class PersonGreeter {
    constructor(private firstName: string, private secondName: string, private dateofbirth: Date) {
        
    }

    greet() {
        console.log(`Hello ${this.firstName}`);
    }
}