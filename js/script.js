const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//////// create factory function & add properties ////////
const createPet = function (name, species) {
  // object literal
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    // method for sleep
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz`);
      // change isTired to 1
      this.isTired = 1;
    },
    // method for playtime
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play`);
        this.sleep();
      } else {
        console.log(`Yay ${this.name} loves to play.`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};

// create new objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//////// verify object & methods ///////
// check if objects exist on console
// console.log(sora, clover, baxter, cleo, francine);

// call methods to make sure they work
// sora.sleep();
// baxter.play();

// logout sora & baxter to see their values have changed
// console.log(sora, baxter);

// //////////////////////////////  DISPLAY PET OBEJCTS  //////////////////////////////
// update properties & create an array of objects
clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
// console.log(allPets);

////// display pets in browser
const showPets = function (petArray) {
  // empty list. this list will clear whenever showPets is run.
  pets.innerHTML = "";

  // loop over petArray
  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    // span with pet-name to change color of pets
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

//////////////////////////////  add click event //////////////////////////////
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
