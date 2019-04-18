const person = {
    name: 'Joao',
    age: 36,
    location: {
        city: 'Sao Paulo',
        temp: 25
    }
};

// Normal approach
// const name = person.name;
// const age = person.age;

//Destructuring
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       // name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
if(publisherName) {
    console.log(publisherName); // Penguin, default Self-Published
}