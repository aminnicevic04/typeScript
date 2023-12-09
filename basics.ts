let userName = "max";

// userName = 34 ;  //error
userName = "amci";

// ----------------------

let age: number;

// age = '18'; //error

age = 18;

let isValid = true;

//string , numbers, boolean

// -----------------------

type StrOrNum = string | number;

// let userID: string | number = "abc1";
let userID: StrOrNum;
userID = 123;

// -----------------------

let user1: object;

user1 = {}; // is not error

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
}; //we can use this also

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};
//----------------------

// let hobbies: Array<string>;
let hobbies: string[]; //we can use on this way also

// {name: string; age: number}[] //niz objekata

hobbies = ["sports", "cooking", "reading"];
// hoobies = [1,2,3] //error

//------------------------
//undefined
//void
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

//------------------------
//definiting custom types with interface

type AddFn = (a: number, b: number) => number;
function calculate(
  a: number,
  b: number,
  //   calcFn: (a: number, b: number) => number // oznacavamo da je funkcija i da ocekujemo broj
  calcFn: AddFn
) {
  calcFn(a, b);
}

calculate(2, 5, add);

//-------------------------
//create custom types with interface

type User123 = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user123: User123; //drugi nacin za dodavanje tipova obj

//--------------------------
//definiting object types with interface

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@gmail.com",
};

//---------------------------
//interface vs custom types

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string; // ovde imamo credentials i plus dodajemo jos userName
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

//----------------------------
//merging types

// type Admin = {
//   permissons: string[];
// };

// type appUser = {
//   userName: string;
// };

// // type appAdmin = Admin | appUser; //unija znaci ili to ili to

// type appAdmin = Admin & appUser; //merging znaci oboje

// let admin: appAdmin;

// admin = {
//   permissons: ["login"],
//   userName: "dzenis",
// };

interface Admin {
  permissions: string[];
}
interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "dzenis",
};

//---------------------------
//literal types

type Role = "admin" | "user" | "editor";

let role: Role; // 'admin', 'user', 'editor'

role = "admin";
role = "user";
role = "editor";
// role = "abc"; //error

//----------------------------

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

//-----------------------------
// generic types

let roles: Array<Role>;
roles: ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void; //void znaci da ne vraca nista
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Amci" },
  { age: 18 }
);
