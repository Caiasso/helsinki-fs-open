var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jummy", species: "fish" },
];

/* Funtional Programming way */
var dogs = animals.filter(function (animal) {
  animal.apecies === "dog";
});
/* Funtional Programming way */

/* The classic way */
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === `dog`) dogs.push(animals[i]);
}
/* The classic way */
