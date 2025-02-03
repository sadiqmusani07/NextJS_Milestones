console.log("Task 2");
let studentName: string = "saDiq muSani";

console.log(
  "Hello " + studentName + ", would you like to learn some Python today?"
);

console.log("Task 3");
//This is a comment for tas 10
// Assigning upperCase LowerCase and TitleCase
let upperCase = studentName.toUpperCase();
let lowerCase = studentName.toLowerCase();
let titleCase: string = "";
lowerCase.split(" ").forEach((element) => {
  titleCase += element.charAt(0).toUpperCase() + element.slice(1) + " ";
});

titleCase = titleCase.trim();

console.log(
  "Upper: " + upperCase + "\nLower: " + lowerCase + "\nTitle Case: " + titleCase
);

console.log("Task 4 & 5 combined");

let message: string =
  ' once Said, "A nation can never make progress unless it marches in one formation."';

let famous_person: string = "Quaid-e-Azam";

console.log(famous_person + message);

console.log("Task 6");
//This is a comment for tas 10
// this task is to element the white spaces and new line

let person: string = "  Quaid-e-Azam \nMuhammad Ali \tJinnah  ";

console.log("Person with White Spaces:" + person);

let clean: string = person.trim().replace(/[\n\t]/g, "");

console.log("Person W/O White Spaces:" + clean);

console.log("Task 7 & 8");

console.log("Addition: " + (5 + 3));

console.log("Subtraction: " + (10 - 2));

console.log("Multiplication: " + 4 * 2);

console.log("Division: " + 16 / 2);

console.log("Task 9");

let favNumber: number = 3;

console.log("My Favourite Number is : " + favNumber);

console.log("Task 10 comments are added in  6 and 3");

console.log("Task 11");

let friends: string[] = ["Suhayb", "Yahya", "Saheeb", "Muzammil"];

friends.forEach((element) => {
  console.log(element);
});

console.log("Task 12");

friends.forEach((element) => {
  console.log("Dear, " + element + " you are one of my closest friend.");
});

console.log("Task 13");

let statements: string[] = [
  "My most favourite mode of transportation is ",
  "I love every bit of my time in ",
  "I have no words to describe how much I love ",
];

let modes: string[] = ["Car", "Aeroplance", "train"];

modes.forEach((item) => {
  statements.forEach((subItem) => {
    console.log(subItem + item);
  });
});

console.log("Task 14");

let invitees: string[] = ["Zia Khan", "Kamran Tessori", "Daniyal Nagori"];

let invitation: string =
  ",\nSir we would love your company at the house party held at my residence";

invitees.forEach((item) => {
  console.log("Dear, " + item + invitation);
});

console.log("Task 15");

console.log(
  "Appologies," +
    invitees[1] +
    "will not be able to make it to the party because of his busy schedule"
);

invitees[1] = "Arif Alvi";

invitees.forEach((item) => {
  console.log(item + invitation);
});

console.log("Task 16");

invitees.forEach((item) => {
  console.log(item + ", table is now bigger now more guests and more fun.");
});

//to the beginning
invitees.unshift("Qasim Shah");

//to the end
//invitees.push("Guest");

//getting middle of the array of string and adding in the middle
let middle: number = Math.floor(invitees.length / 2);
invitees.splice(middle, 0, "Imran Khan");

invitees.forEach((item) => {
  console.log("Dear, " + item + invitation);
});

console.log("Task 17");

invitees.forEach((item) => {
  console.log("Appologies, " + item + ", we can only invite two people");
});

if (invitees != null && invitees != undefined) {
  for (let i = 0; invitees.length > 2; i++) {
    let uninvited: string = invitees.splice(0, 1)[0];
    console.log(
      "Sorry " + uninvited + " we have removed you from the guest list"
    );
  }
}
console.log("You guys are still invited:" + invitees);

if (invitees.length == 2) {
  invitees.pop();
  invitees.pop();

  console.log(invitees);
}

console.log("Task 18");

let countries: string[] = [
  "Switzerland",
  "Malaysia",
  "Pakistan",
  "Tokyo",
  "America",
];

console.log(countries);

let sortedCountries = countries.slice();
sortedCountries.sort();

console.log(sortedCountries);

console.log(countries);

let reversedCountries = countries.sort((a, b) => b.localeCompare(a));

console.log(reversedCountries);

console.log(countries);

countries.sort();

console.log("Alphabetical Sort: " + countries);

countries.sort((a, b) => b.localeCompare(a));

console.log("reverse Aplhabetical Sort: " + countries);

console.log("Task 19");

friends.forEach((friend) => {
  invitees.push(friend);
});

console.log(invitees.length + " persons are invited to the dinner!!");

console.log("Task 20");

console.log("List of Countries:\n" + countries);

console.log("Task 21");

let personObject: { name: string; age: number; citizenship: string }[] = [];

for (let i = 0; i < countries.length; i++) {
  let newPerson = {
    name: "citizen" + i.toString(),
    age: i + 20,
    citizenship: countries[i],
  };
  personObject.push(newPerson);
}

console.log(personObject);

console.log("task 22");

let myArr: string[] = ["infinix", "Oppo", "Samsung", "Vivo", "Apple"];

//let arr = myArr[10]; //this line throws intentional Error because we have only 5 index array (0 to 4)
let arr = myArr[2];

console.log(arr);

console.log("Task 23");

let car: string[] = ["Subaru", "Toyota", "Suzuki", "Lambo", "Buggati"];

console.log(
  "Is Is car.includes('Subaru')? I predict True. && Is car.includes('subaru')? I predict false"
);

console.log(car.includes("Subaru")); //true
console.log(car.includes("Toyota")); //true
console.log(car.includes("Suzuki")); //true
console.log(car.includes("Lambo")); //true
console.log(car.includes("Buggati")); //true
console.log(car.includes("subaru")); //false because it is case sensitive
console.log(car.includes("toyota")); //false because it is case sensitive
console.log(car.includes("suzuki")); //false because it is case sensitive
console.log(car.includes("lambo")); //false because it is case sensitive
console.log(car.includes("buggati")); //false because it is case sensitive

console.log("Task 24");

let str1: string = "SADIQ";
let str2: string = "sadiq";

console.log("Test using lowercase function:");
console.log(str1.toLowerCase() === str2.toLowerCase());

let num1: number = 3;
let num2: number = 7;

console.log("Numerical Tests including all the conditions mentioned");

console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false

let cond1: boolean = true;
let cond2: boolean = false;

console.log("&& and || operator test");
console.log(cond1 && cond2); // true && false = false (AND)
console.log(cond1 || cond2); // true || false = true (OR)

console.log("test array includes item or not");

console.log(car.includes("Subaru")); // true includes
console.log(car.includes("Mercedes")); // false not includes
console.log(!car.includes("Mercedes")); // true because it does not contains

console.log("Task 25");

let alien_color: string = "Red";

if (alien_color == "Red") {
  // test with output
  console.log("Player just earned 5 points");
}
if (alien_color == "Yellow") {
  //test with no output
  console.log("Player just earned 5 points");
}

console.log("Task 26");

if (alien_color == "Greem") {
  console.log("Player just earned 5 points");
} else {
  console.log("else block");
  console.log("Player just earned 10 points");
}

if (alien_color == "Red") {
  console.log("if block");
  console.log("Player just earned 5 points");
} else {
  console.log("Player just earned 10 points");
}

console.log("task 27");

if (alien_color == "Green") {
  console.log("if block");
  console.log("Player just earned 5 points");
} else if (alien_color == "Yellow") {
  console.log("else if block");
  console.log("Player just earned 10 points");
} else if (alien_color == "Red") {
  console.log("else if block2");
  console.log("Player just earned 15 points");
}

console.log("below remianinign both colors not equal nmethod");

if (alien_color != "Green") {
  console.log("Not Equal to Green");
  console.log("Player just earned 5 points");
}
if (alien_color != "Yellow") {
  console.log("Not equal to Yellow");
  console.log("Player just earned 10 points");
}

console.log("Task 28");

let age: number = 65;

if (age < 2) {
  console.log("the person is a baby");
} else if (age >= 2 && age < 4) {
  console.log("the person is a toddler");
} else if (age >= 4 && age < 13) {
  console.log("the person is a kid");
} else if (age >= 13 && age < 20) {
  console.log("the person is a teenager");
} else if (age >= 20 && age < 65) {
  console.log("the person is an adult");
} else if (age >= 65) {
  console.log("the person is an elder");
}

console.log("Task 29");

let favorite_fruits: string[] = ["Grapes", "Water Melon", "Apple"];

if (favorite_fruits.includes("Grapes")) {
  let msg: string = "I really like ";
  msg += "Grapes";
  console.log(msg);
}

if (favorite_fruits.includes("Water Melon")) {
  let msg: string = "I really like ";
  msg += "Water Melon";
  console.log(msg);
}

if (favorite_fruits.includes("Apple")) {
  let msg: string = "I really like ";
  msg += "Apple";
  console.log(msg);
}

if (favorite_fruits.includes("Melon")) {
  let msg: string = "I really like ";
  msg += "Melon";
  console.log(msg);
}

if (favorite_fruits.includes("Orange")) {
  let msg: string = "I really like ";
  msg += "Orange";
  console.log(msg);
}

console.log("Task 30");

let users: string[] = ["Muhammad", "Sadiq", "Admin", "Ghazali", "Zulfiqar"];

users.forEach((element) => {
  if (element == "Admin") {
    console.log(
      "Hello " + element + ", would you like to see a status report?"
    );
  } else {
    console.log("Hello " + element + ", thank you for logging in again");
  }
});

console.log("Task 31");

if (users.length > 0) {
  console.log("List of users is not empty");
}

users = [];

if (users.length == 0) {
  console.log("Now the Array is empty");
}

console.log("Task 32")

let current_users: string[] = [
  "Muhammad",
  "Sadiq",
  "Admin",
  "Ghazali",
  "Zulfiqar",
];

current_users = current_users.map(user => user.toLowerCase());

let new_users: string[] = ["Muhammad", "Sadiq", "Shafi", "Saad", "Zulfiqar"];

new_users.forEach(element => {
  let lowerElement = element.toLowerCase()
  if (current_users.includes(lowerElement)) {
    console.log(element + " is already used please enter a new username")
  }
  else {
    console.log(element + " is available")
  }
})

console.log("Task 33")

let ordinalNumber : number[] = [1,2,3,4,5,6,7,8,9]

ordinalNumber.forEach(num => {
  if (num == 1) {
    console.log("Ordinal Number: "+num+ "st")
  }
  else if (num == 2) {
    console.log("Ordinal Number: "+num+ "nd")
  }
  else if (num == 3) {
    console.log("Ordinal Number: "+num+ "rd")
  }
  else if (num > 3) {
    console.log("Ordinal Number: "+num+ "th")
  }
})

console.log("Task 34")

let fav_pizza: string[] = ["Pepperoni Pizza", "Malai Boti Pizza","Chicken Tikka Pizza"]

for (let i = 0 ; i < fav_pizza.length ; i++ ) {
  console.log(fav_pizza[i])
}
for (let i = 0 ; i < fav_pizza.length ; i++ ) {
  console.log("I like "+fav_pizza[i])
}

fav_pizza.forEach(pizza => {
  console.log("I like "+pizza)
 })

 console.log("I have no words to explain how much I like "+fav_pizza[1])
 console.log(fav_pizza[1]+"'s essence is something else")
 console.log(fav_pizza[1]+" is really fun")
 console.log("I really love pizza!")

 console.log("Task 35")

 let animal: string[] = ["Zebra", "Cat", "Cow"]

 animal.forEach(item => {
  console.log("A "+item+" would make a great pet")
 })

 console.log("Common Charactersitics: ")
 console.log("four legs")
 console.log("two ears")

 console.log("Task 36")


let make_shirt = function(size: string, mesg : string) {

  console.log("the size of the shirt is : " +size)
  console.log("message on shirt : " +mesg)
}

make_shirt("large", "Governor Sindh IT Initiative")

console.log("Task 37")

make_shirt = function (size: string = "large", mesg : string) {
  
  if(size == "large" || size == "medium") {
    console.log("the size of shirt is: " +size)
    console.log("message on shirt: " +mesg)
  }
  else
  {
    console.log("different shirt size "+size)
    console.log("message on shirt: " +mesg)
  }
  
}

make_shirt("large","I love typescript")
make_shirt("medium","I love typescript")
make_shirt("small","a different msg")

console.log("Task 38")

let describe_city = function (city: string, country?: string,) {

  if(!country){
    country = "Pakistan"
  }
  console.log(city + " is in " +country)
};

describe_city("Pakistan", "Karachi")

describe_city("karachi","Pakistan")
describe_city("Sydney","Australia")
describe_city("Wahington","America")
describe_city("Multan")
describe_city("Lahoroe")


console.log("Task 39")

let city_country = function (city: string, country : string) {
  
  return `${city}, ${country}`
}

console.log(city_country("Lahore","Pakistan"))
console.log(city_country("Sydney","Australia"))
console.log(city_country("Wahington","America"))

console.log("Task 40")

let make_album = function(artist : string, albumTitle: string, nooftracks?: number) {
  if(!nooftracks) {
    let newObject = {
      Artist : artist,
      Title: albumTitle
     }
     console.log(newObject)
  }
  else {
    let newObject = {
      Artist : artist,
      Title: albumTitle,
      TrackCount: nooftracks
     }
     console.log(newObject)
  }
  
 }


console.log("Without TrackInfo")
make_album("Ron Hubbard","Mission Earth")
make_album("Kansus","Leftoverture")
make_album("The Beattles","Revolver")


console.log("With Track info")
make_album("Lorde","Melodrama",5)
make_album("Ron Hubbard","Mission Earth",7)


console.log("Task 41")

let magicians: string[] = ["David Copperfield","Derren Brown","Harry Houdini"]

let show_magicians = function (magician : string[]) {

  magician.forEach(item => {
    console.log("Magician Name: "+item)
  })
}

show_magicians(magicians);

console.log("Task 42")
//commented below to use in task 43
// let make_great = function (magic: string[]) {

//   magic.forEach((element,index) => {
//     magic[index] = "The great " +element;
//   });
// }

//make_great(magicians);
console.log(magicians);

console.log("Task 43")

function make_great(magic: string[]): string[] {
  return magic.map(item => "the Great " + item);
}

console.log("Original Magicians:")
console.log(magicians)

console.log("The Great Magicians")
console.log(make_great(magicians));

console.log("Task 44")

function Sandwich(...ingredients: string[]): string {
  let message = "Sandwhich contains ";
  if (ingredients.length === 0) {
    message += "no items, please provide some item";
  } else {
    message += "the below items:\n";
    ingredients.forEach((item,index) => (message += `${index+1}.` + item + "\n"));
    
  }
  return message;
}

console.log(Sandwich("toamto", "chicken","egg"));
console.log(Sandwich("toamto", "chicken"));
console.log(Sandwich());

console.log("Task 45")

function createCar(manufacturer: string, model: string, ...optional: { [key: string]: any }[]): { [key: string]: any } {
  const carInfo: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };

  optional.forEach(options => {
    const key = Object.keys(options)[0];
    carInfo[key] = options[key];
  });

  return carInfo;
}

console.log(createCar("Toyota", "Aqua", { color: "White" }, { features: "Sunroof" }));
console.log(createCar("Toyota", "Camry", { color: "red" }, { feature1: "GPS" }, {feature2: `27" Alloy Rims`}));

console.log("Assignment 1 completed")



