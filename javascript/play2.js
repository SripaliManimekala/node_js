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

const printName2 =({name})=>{
    console.log(name);
}

printName2(person);
