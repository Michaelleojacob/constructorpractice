// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// console.log(rabbit)
// console.log(rabbit.eats)


//?

// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   // walk is taken from the prototype
//   rabbit.walk(); // Animal walk


//?

// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };
  
//   // walk is taken from the prototype chain
//   longEar.walk(); // Animal walk
//   console.log(longEar.jumps); // true (from rabbit)

//?

// let animal = {
//     eats: true,
//     walk() {
//       /* this method won't be used by rabbit */
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.walk = () => {
//     console.log("Rabbit! Bounce-bounce!");
//   };
  
//   rabbit.walk(); // Rabbit! Bounce-bounce!

// //?

// let user = {
//     name: "John",
//     surname: "Smith",
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   let admin = {
//     __proto__: user,
//     isAdmin: true
//   };
  
//   console.log(admin.fullName); // John Smith (*)
  
//   // setter triggers!
//   admin.fullName = "Alice Cooper"; // (**)
  
//   console.log(admin.fullName); // Alice Cooper, state of admin modified
//   console.log(user.fullName); // John Smith, state of user protected

//?

// // animal has methods
// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         console.log(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
  
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
  
//   // modifies rabbit.isSleeping
//   rabbit.sleep();
  
//   console.log(rabbit.walk()); // true
//   console.log(rabbit.isSleeping); // true
//   console.log(animal.isSleeping); // undefined (no such property in the prototype)
  

//?

// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   // Object.keys only returns own keys
//   console.log(Object.keys(rabbit)); // jumps
  
//   // for..in loops over both own and inherited keys
//   for(let prop in rabbit) console.log(prop); // jumps, then eats

//?

// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       console.log(`Our: ${prop}`); // Our: jumps
//     } else {
//       console.log(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }

//?

// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

// console.log(pockets.pen)
// console.log(bed.glasses)

//?


// let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
// rabbit.eat()
// console.log(rabbit.full);

//?


// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // This one found the food
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // This one also has it, why? fix please.
//   console.log( lazy.stomach ); // apple

  //!

let hamster = {
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

//!

	
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       // assign to this.stomach instead of this.stomach.push
//       this.stomach = [food];
//     }
//   };
  
//   let speedy = {
//      __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // Speedy one found the food
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // Lazy one's stomach is empty
//   console.log( lazy.stomach ); // <nothing>