const person = {
    name: 'John',
    age: 29,
    greet(){
        console.log('Hi, im ' + this.name);
    }
}

person.greet();

const coppiedPerson = {...person}

console.log(coppiedPerson);

const hobbies = ['cooking','sports'];
 for (let hobby of hobbies){
    console.log(hobby);
 }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

hobbies.push('programming');//even though array is const since its reference type we can edit it
//console.log(hobbies);

// const coppiedArray = hobbies.slice();
// //copying the whole array to new variable
// console.log(coppiedArray);

// const coppiedArray2 = [hobbies];
// console.log(coppiedArray2);
const coppiedArray = [...hobbies];
console.log(coppiedArray);