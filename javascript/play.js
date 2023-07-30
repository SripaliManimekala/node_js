var name='max';
var age =28;
var hasHobbies=true;    


function summarizeUser(userName,userAge,userHasHobby){

    return (
        'name is ' +userName +
        ' age is ' +userAge+
        ' and the user has hobbies: '+userHasHobby
        );
}

console.log(summarizeUser(name,age,hasHobbies));