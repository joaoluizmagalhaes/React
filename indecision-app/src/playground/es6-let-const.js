var nameVar = 'Joao';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Pedro';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Function scoping
function getPetName() {
    const petName = 'Hal';

    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping
const fullName = 'Joao Magalhaes';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);