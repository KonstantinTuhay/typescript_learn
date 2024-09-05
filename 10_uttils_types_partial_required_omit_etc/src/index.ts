//////////////////////////////
// Pick
//////////////////////////////

type User = {
  name: string;
  age: number;
  email: string;
};

type UserProfile = Pick<User, "name" | "email">;

const userProfile: UserProfile = {
  name: "Kostya",
  //   age: 24,
  email: "tugay-k@mail.ru",
};
console.log(userProfile);

//////////////////////////////
// Partial
//////////////////////////////

type User1 = {
  name: string;
  age: number;
};

type PartialUser = Partial<User1>;

const partialUser: PartialUser = {};

partialUser.name = "Kostya";
partialUser.age = 24;
console.log(partialUser);

// partialUser.country = "spb"; // нельзя так

//////////////////////////////
// Required
//////////////////////////////

type PartialUser1 = {
  name?: string;
  age?: number;
};

type RequiredUser = Required<PartialUser1>;

const user: RequiredUser = {
  name: "Kostya",
  age: 24,
};
console.log(user);

//////////////////////////////
// Readonly
//////////////////////////////

type User2 = {
  name: string;
  age: number;
  street: string;
};

type ReadonlyUser = Readonly<User2>;

const user12: ReadonlyUser = {
  name: "Kostya",
  age: 24,
  street: "Mendeleeva",
};
// user12.age = 34;//because read-only property
console.log(user12);

//////////////////////////////
// Record
//////////////////////////////

type Fruit = "apple" | "banana" | "cherry";

type FruitInfo = {
  color: string;
  taste: string;
};

type FruitData = Record<Fruit, FruitInfo>;

const fruitData: FruitData = {
  apple: { color: "red", taste: "normal" },
  banana: { color: "yellow", taste: "middle" },
  cherry: { color: "red", taste: "ok" },
};
console.log(fruitData);

//////////////////////////////
// ReturnType
//////////////////////////////

function getUser() {
  return { name: "Alice", age: 30 };
}

type User123 = ReturnType<typeof getUser>;

const user213: User123 = { name: "Alice", age: 30 };
console.log(user213);

//////////////////////////////
// Extract
//////////////////////////////

type Colors = "red" | "green" | "blue" | "yellow";
type PrimaryColors = Extract<Colors, "red" | "blue">;

const primaryColor: PrimaryColors = "red";
// const secondaryColor: PrimaryColors = "green"; //Ошибка компиляции
console.log(primaryColor);

//////////////////////////////
// Exclude
//////////////////////////////

type Colors1 = "red" | "green" | "blue" | "yellow";
type NonPrimaryColors = Exclude<Colors1, "red" | "blue">;

const nonPrimaryColor: NonPrimaryColors = "green"; // Допустимо
// const primaryColor: NonPrimaryColors = "red"; // Ошибка компиляции

//////////////////////////////
// NonNullable
//////////////////////////////

type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;

const someString: DefinitelyString = "Hello"; // Допустимо
// const nullValue: DefinitelyString = null; // Ошибка компиляции
// const undefinedValue: DefinitelyString = undefined; // Ошибка компиляции

//////////////////////////////
// Комбинирование
//////////////////////////////

type User11 = {
  name: string;
  age: number;
  email: string;
};

type PartialNameAndEmail = Partial<Pick<User11, "name" | "email">>;

const partialNameAndEmail: PartialNameAndEmail = { name: "Charlie" }; // Допустимо, только name
