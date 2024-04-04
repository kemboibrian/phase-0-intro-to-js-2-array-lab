// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

describe("cats", function () {
  it("is assigned an initial value of ['Milo', 'Otis', 'Garfield']", function () {
    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  });
});

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name) {
    cats.unshift(name)
    
}
destructivelyAppendCat("Bob")

function destructivelyRemoveLastCat(name) {
    cats.pop(name)

}
destructivelyRemoveLastCat("Garfield")

function destructivelyRemoveFirstCat(name) {
    
    cats.shift(name)
}
destructivelyRemoveFirstCat("Milo")

function appendCat(name) {
    const newCats = cats.slice(); // Create a copy of the original cats array
    newCats.push(name); // Append the new cat to the new array
    return newCats; // Return the new array with the added cat
}

const newCatsArray = appendCat("Broom");
console.log(newCatsArray); // Output: ["Milo", "Otis", "Garfield", "Broom"]
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]

    
function prependCat(name) {
    const newCatts = [name, ...cats]; // Create a new array with the new cat added to the beginning
    return newCatts; // Return the new array with the added cat
}

const newCattsArray = prependCat("Broom");
console.log(newCattsArray); // Output: ["Broom", "Milo", "Otis", "Garfield"]
console.log(cats); 


function removeLastCat() {
    const newCattts = cats.slice(0, -1); 
    return newCattts; 
}

const newCatttsArray = removeLastCat();
console.log(newCatttsArray); 
console.log(cats); 

function removeFirstCat() {
    const newCatss = cats.slice(1); 
    return newCatss; 
}

const newCatssArray = removeFirstCat();
console.log(newCatssArray); 
console.log(cats); 
