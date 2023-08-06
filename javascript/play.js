const name='max';
let age =28;
let hasHobbies=true;    


const summarizeUser = (userName,userAge,userHasHobby) => {

    return (
        'name is ' +userName +
        ' age is ' +userAge+
        ' and the user has hobbies: '+userHasHobby
        );
}

const add = (a, b) => a+b;

console.log(add(1,2));
console.log(summarizeUser(name,age,hasHobbies));