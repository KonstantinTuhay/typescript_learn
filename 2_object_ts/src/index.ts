// 1.

type Movie = {
  title: string;
  director: string;
  releaseYear: number;
  ratings: Ratings;
};

type Ratings = {
  imdb: number;
  metacritic: number;
};

const movie: Movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  ratings: {
    imdb: 8.8,
    metacritic: 74,
  },
};
console.log(movie);

// 2.

type Car = {
  make: string;
  model: string;
  year: number;
  specifications: Specifications;
};

type Specifications = {
  engineType: string;
  color: string;
};

const car: Car = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  specifications: {
    engineType: "Gasoline",
    color: "Blue",
  },
};
console.log(car);

//3.

interface IApartment {
  address: string;
  numberOfRooms: number;
  features: Features;
}

interface Features {
  hasBalcony: boolean;
  hasParking: boolean;
}

const apartment = {
  address: "456 Elm Street",
  numberOfRooms: 2,
  features: {
    hasBalcony: true,
    hasParking: false,
  },
};
console.log(apartment);

//4.

interface Product {
  name: string;
  price: number;
  details: Details;
}

interface Details {
  brand: string;
  screen: string;
}

const product = {
  name: "Smartphone",
  price: 599,
  details: {
    brand: "Samsung",
    screen: "6.5 inches",
  },
};
console.log(product);

type Car = {
  make: string;
  model: string;
  year?: number; // Необязательное свойство
};

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
};
console.log(myCar);
