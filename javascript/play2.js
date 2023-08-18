const person ={
    name:'Max',
    age:29,
    greet(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

const printName =(personData)=>{
    console.log(personData.name);
}

printName(person);


//destructuring object
const printName2 =({name})=>{
    console.log(name);
}

printName2(person);

const {name, age} = person;
console.log(name, age);

//destructuring array
const hobbies = ['cooking','sports'];
let [hobby1 , hobby2]  = hobbies ;
console.log(hobby1,hobby2);

