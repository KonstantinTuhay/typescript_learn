"use strict";
// 1.
const product = {
    name: "Laptop",
    price: 999.99,
};
console.log(`Product: ${product.name}, Price: $${product.price}`);
const person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Cityville",
        zipCode: "12345",
    },
};
console.log(`Name: ${person.name}, Age: ${person.age}`);
console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.zipCode}`);
const cart = [
    { product: "Shirt", quantity: 2 },
    { product: "Shoes", quantity: 1 },
    { product: "Hat", quantity: 3 },
];
cart.map((el) => console.log(el));
const creditCardPayment = {
    type: "Credit Card",
    cardNumber: "1234-5678-9101-1121",
    name: "Bob",
    age: 25,
    address: {
        street: "789 Oak St",
        city: "Villagetown",
        zipCode: "67890",
    },
};
console.log(`Payment Type: ${creditCardPayment.type}`);
console.log(`Card Number: ${creditCardPayment.cardNumber}`);
console.log(`Name: ${creditCardPayment.name}, Age: ${creditCardPayment.age}`);
console.log(`Address: ${creditCardPayment.address.street}, ${creditCardPayment.address.city}, ${creditCardPayment.address.zipCode}`);
const order = {
    customerName: "Alice",
    products: [
        { name: "Laptop", price: 999.99 },
        { name: "Headphones", price: 49.99 },
    ],
    shippingInfo: {
        address: "123 Main St",
        deliveryDate: "2023-09-30",
    },
};
console.log(order);
const movie = {
    title: "Inception",
    director: {
        name: "Christopher Nolan",
        birthYear: 1970,
    },
    actors: [
        {
            actor: { name: "Leonardo DiCaprio", birthYear: 1974 },
            films: [
                {
                    movieTitle: "Inception",
                    roles: [{ movieTitle: "Inception", characterName: "Cobb" }],
                },
                {
                    movieTitle: "The Revenant",
                    roles: [{ movieTitle: "The Revenant", characterName: "Hugh Glass" }],
                },
            ],
        },
        {
            actor: { name: "Joseph Gordon-Levitt", birthYear: 1981 },
            films: [
                {
                    movieTitle: "Inception",
                    roles: [{ movieTitle: "Inception", characterName: "Arthur" }],
                },
            ],
        },
    ],
    genres: ["Science Fiction", "Action", "Thriller"],
};
console.log("movie", movie.actors);
const zoo = [
    {
        name: "Lion",
        species: {
            name: "Panthera leo",
            classification: "Mammal",
        },
        characteristics: {
            size: "Large",
            diet: "Carnivore",
        },
        habitats: [
            { habitatType: "Grasslands", location: "Africa" },
            { habitatType: "Savanna", location: "Africa" },
        ],
    },
    {
        name: "Panda",
        species: {
            name: "Ailuropoda melanoleuca",
            classification: "Mammal",
        },
        characteristics: {
            size: "Medium",
            diet: "Bamboo",
        },
        habitats: [
            { habitatType: "Bamboo Forest", location: "China" },
            { habitatType: "Mountainous Regions", location: "China" },
        ],
    },
];
console.log(zoo[0].habitats);
