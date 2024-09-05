// 1.

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "Laptop",
  price: 999.99,
};

console.log(`Product: ${product.name}, Price: $${product.price}`);

// 2.

type Person = {
  name: string;
  age: number;
  address: Address;
};

type Address = {
  street: string;
  city: string;
  zipCode: string;
};

const person: Person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Cityville",
    zipCode: "12345",
  },
};

console.log(`Name: ${person.name}, Age: ${person.age}`);
console.log(
  `Address: ${person.address.street}, ${person.address.city}, ${person.address.zipCode}`
);

// 3.

type Cart = {
  product: string;
  quantity: number;
};

const cart: Cart[] = [
  { product: "Shirt", quantity: 2 },
  { product: "Shoes", quantity: 1 },
  { product: "Hat", quantity: 3 },
];

cart.map((el) => console.log(el));

// 4.

type PaymentMethod = {
  type: string;
  cardNumber: string;
};

type Person1 = {
  name: string;
  age: number;
  address: Address1;
};

type Address1 = {
  street: string;
  city: string;
  zipCode: string;
};

type CreditCardPayment = PaymentMethod & Person1;

const creditCardPayment: CreditCardPayment = {
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
console.log(
  `Address: ${creditCardPayment.address.street}, ${creditCardPayment.address.city}, ${creditCardPayment.address.zipCode}`
);

// 5.

type Order = {
  customerName: string;
  products: Product[];
  shippingInfo: ShippingInfo;
};

type Products = {
  name: string;
  price: number;
};

type ShippingInfo = {
  address: string;
  deliveryDate: string;
};

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

// 6.

type Movie = {
  title: string;
  director: Director;
  actors: Actors[];
  genres: Array<string>;
};

type Director = {
  name: string;
  birthYear: number;
};

type Actors = {
  actor: Actor;
  films: Films[];
};

type Actor = {
  name: string;
  birthYear: number;
};

type Films = {
  movieTitle: string;
  roles: Roles[];
};

type Roles = {
  movieTitle: string;
  characterName: string;
};

const movie: Movie = {
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

// 7.

type Zoo = {
  name: string;
  species: Species;
  characteristics: Characteristics;
  habitats: Habitats[];
};

type Species = {
  name: string;
  classification: string;
};

type Characteristics = {
  size: string;
  diet: string;
};

type Habitats = {
  habitatType: string;
  location: string;
};

const zoo: Zoo[] = [
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
