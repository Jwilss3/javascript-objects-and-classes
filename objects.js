// let balance = 10

// const typeOfDrink = 
//     ["Coffee",
//     "Coke",
//     "Fanta",
//     "Bitter"]

// const costAndBalance = () => {
//     if (typeOfDrink.includes())
//     console.log("Here it comesss!")
//     else 
// }

// typeOfDrink.includes("coffee")

// const cafe = {
//     name: "CurlyWurly",
//     drinks: ["Coffee",
//     "Coke",
//     "Fanta",
//     "Bitter"]
// };

// console.log(cafe.drinks)

// const person = {
//     name: "Jess",
//     age: "25",
//     favShow: "Bobs Burgers",
//     favSongs: "Gay Bar, Tryna Smoke, "
// }


// console.log(`Hello my name is ${person.name}`)


// Pets

let eat = "eating"
let drink = "drinking"

const pet = {
    name: "Sprinkles",
    typeOfPet:"Doggo",
    age:"12",
    colour:"black and white",
    petEating:() => {
        if(pet.name == "Sprinkles"){
            return`${pet.name} is eating`;
        }else {
            return`${pet.name} is eating`;
    }
}
};
console.log(pet.petEating())

/*

The pet object is const as nothing inside the object can be changed

A pet object which takes in 4 attributes:
 name, type of pet, age and colour.

All of these attributes are strings. To compare these you must write:

 if myStringExample is equal to the value "Dog"
   Do or return something

if it equals anything else other than "Dog"
  Do or return something else

  We assign a method (because in the case of objects,a function is a method) to our object which can be called i.e.:
   
  petObject.PetEating()

  This allows us to perform logic about our object i.e. is our dog eating

  Function names can be called anything you want, they sbould be descriptive about the code they're executing

*/

// Cafe example

// let offer = "none";
// let time = 1200;

// const cafe = {
// name: "Whitesheep",
// seatingCapacity: 100,
// hasSpecialOffers: true,
// drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
// breakfastOffer: "Free croissant with coffee",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry no offer",

// openCafe(){
//     if (this.hasSpecialOffers){
// return "Come on in";
// }
// },
// closeCafe(){
// return "We are closed, come back tomorrow!"
// }
// };
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());


// Cafe activity 

const coffeeShop = {

    branch:"Urmston",
    drinksWithPrices:[{
        Coffee: 3,
        Tea: 2,
        HotChocolate: 2.50,
    }],
    
    foodWithPrices:{
        "Toastie": 3,
        "Sandwich": 2.50,
        "Salad": 4
    },

    drinksOrdered:() => {
        return Object.entries(this.foodWithPrices)
        // console.log("Your drinks order is:",  coffeeShop.drinksWithPrices)
        // console.log("Total prices are: ", coffeeShop.drinksWithPrices[0].Coffee)

    },

    foodOrdered:() => {
        return Object.entries(this.drinksWithPrices)
        // console.log("Your food order is:",  coffeeShop.foodWithPrices)

    }
}


console.log(coffeeShop.drinksOrdered())



console.log(`Welcome to ${coffeeShop.branch}. Your order is:
${coffeeShop.foodsOrdered(0)[0]} = £${coffeeShop.drinksOrdered(0)[1]}
${coffeeShop.foodsOrdered(1)[0]} = £${coffeeShop.foodsOrdered(1)[1]}
${coffeeShop.drinksOrdered(0)[0]} = £${coffeeShop.drinksOrdered(0)[1]}
Total price: £${coffeeShop.drinksOrdered(0)[1] + coffeeShop.foodsOrdered(1)[1] + coffeeShop.drinksOrdered(0)[1]}
`)