//object destructuring

// console.log('destructuring')

// const Person = {
//     name: 'Vinny',
//     age: 26,
//     location: {
//         city: 'Singapore',
//         temp: 33
//     }
// }

// //creates name and age variable off of person object
// const { name: firstName = 'Anonymous', age } = Person;

// const { city, temp: temperature } =Person.location;

// console.log(`${firstName} is ${age}`);

// if (city && temperature) {
//     console.log(`its ${temperature} in ${city}`)
// };

const Book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = Book.publisher

console.log(publisherName);


//Array destructuring

// const address = ['52 Telok Blangah Drive', 'Singapore', 'SG', '100052'];
// const [street = 'Southside', city, state = 'Mars', zip] = address;
// console.log(`you are in ${street} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drinkName, small, mediumPrice, large] = item;
console.log(`A medium ${drinkName} costs ${mediumPrice}`)