const name = "Bob"
const accNum = 44
const active = true
let balance = 400
let transactions = [
    40,
    10,
    20,
    30,
]
console.log(transactions.push(50));
for (let i in transactions) {
    console.log(transactions[i] + " ");
  }
function withdrawCash(amountRequired) {
    if (amountRequired > balance){
        return "You don't have enough money"
    }
    else if (amountRequired < balance){
        return "Thank you and have a nice day!"
    }
}

const cash = (amount) => {
if (amount <= balance){
balance -= amount;
console.log(`Ok, you have withdrawn £${amount} and you have £${balance} remaining`);
}
else {
console.log(`You have insufficient funds to withdraw £${amount}`);
}
}
cash(120);

// Rabbit object

// class Bunny{
//     constructor(name){
//         this._name = name;
//         this._hops = 0;
//     }
//     get name(){
//         return this._name;
// }
// get hops(){
//         return this._hops;
//     }
//     increaseHops(){
//         this._hops++;
// } }
// const rosie = new Bunny("Rosie");
// console.log(rosie.name);
// const Lizzie = new Bunny("Lizzie")
// console.log(Lizzie.hops)