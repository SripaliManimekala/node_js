var name='max';
var age =28;
var hasHobbies=true;
console.log(name);

function summarizeUser(userName,useAge,useHasHobby){

    return (
        'name is ' +userName +
        'age is ' +useAge+
        'and the user has hobbies: '+hasHobbies
        );
}

console.log(summarizeUser);