var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jummy", species: "fish" },
];

/* Functional Programming Way */
var names = animals.map((animal) => animal.name + " is a " + animal.species);
/* Functional Programming Way */
console.log(names);

/* The Classic Way */
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
/* The Classic Way */
console.log(names);
