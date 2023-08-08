const person = {
    name: 'John',
    age: 29,
    greet(){
        console.log('Hi, im ' + this.name);
    }
}

person.greet();

const hobbies = ['cooking','sports'];
 for (let hobby of hobbies){
    console.log(hobby);
 }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));