const person = {
    name: 'John',
    age: 29,
    greet(){
        console.log('Hi, im ' + this.name);
    }
}

person.greet();