let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   
   move: function() {
      return Math.floor(Math.random()*11);
   }
   
};
console.log(superChimpOne.move());
console.log(superChimpOne);

   superChimpOne['astronautID'] = 1;
   console.log(superChimpOne);
   console.log(superChimpOne.astronautID);



let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   
   move: function() {
      return Math.floor(Math.random()*11)
   }
};
console.log(salamander.move());
console.log(salamander);

   salamander['astronautID'] = 2;
   console.log(salamander);
   console.log(salamander.astronautID);

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   
   move: function() {
      return Math.floor(Math.random()*11)
   }

};
console.log(superChimpTwo.move());
console.log(superChimpTwo);

   superChimpTwo['astronautID'] = 3;
   console.log(superChimpTwo);
   console.log(superChimpTwo.astronautID);

let dog = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   
   move: function() {
      return Math.floor(Math.random()*11)
   }
};
console.log(dog.move());
console.log(dog);

   dog['astronautID'] = 4;
   console.log(dog);
   console.log(dog.astronautID);

let waterBear = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   
   move: function() {
      return Math.floor(Math.random()*11)
   }
};
console.log(waterBear.move());
console.log(waterBear);

   waterBear['astronautID'] = 5;
   console.log(waterBear);
   console.log(waterBear.astronautID);
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];
// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
};
console.log(crewReports(dog));


function fitnessTest(crew){
   let results = [], numSteps, turns;
   for (let i = 0; i < crew.length; i++){
      numSteps = 0;
      turns = 0;
   while(numSteps < 20){
      numSteps += crew[i].move();
      turns++;
   }
   results.push(`${crew[i].name} took ${turns} turns to take 20 steps`);
   }
return results;
}

// Start an animal race!
console.log(fitnessTest(crew));

