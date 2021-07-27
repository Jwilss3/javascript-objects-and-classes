// class Bunny{
//     constructor(name){
//     this._name = name;
//     this._hops = 0;
//     }
//     get name(){
//     return this._name;
//     }
//     get hops(){
//     return this._hops;
//     }
//     increaseHops(){
//     this._hops++;
//     } }
//     const jordan = new Bunny("Jordan");
//     const mina = new Bunny("Mina");
//     const lance = new Bunny("Lance");
//     const rebecca = new Bunny("Rebecca");
//     const fernanda = new Bunny("Fernanda");
//     const paula = new Bunny("Paula");
//     const pedro = new Bunny("Pedro");
//     const danny = new Bunny("Danny");
//     const kian = new Bunny("Kian");
//     const jessica = new Bunny("Jessica the fav");
//     console.log(jordan.name);
//     console.log(mina.name);
//     console.log(lance.name);
//     console.log(rebecca.name);
//     console.log(fernanda.name);
//     console.log(paula.name);
//     console.log(pedro.name);
//     console.log(danny.name);
//     console.log(kian.name);
//     console.log(jessica.name);
    
//     console.log(jordan._hops);
//     console.log(mina._hops);
//     console.log(lance._hops);
    
//     jordan.increaseHops();
//     jordan.increaseHops();
//     mina.increaseHops();
//     console.log(jordan._hops);
//     console.log(mina._hops);
//     console.log(lance._hops);

// Car parking 

class JessCars {
    constructor(carReg){
        this._carReg = carReg;
        this._hoursParked = 1;
        this._payment = 1.50;
    }
    get carReg(){
        return this.carReg;
    }
    get hoursParked(){
        return this._hoursParked;
    }
    get payment(){
        return this._payment;
    }
    get stayLonger(){
        this._hoursParked++;
        this._hoursParked += 1.50;
    }
}
class staff extends JessCars {
    constructor(carReg, staffNumber, credits){
        super(carReg);
        this._staffNumber = staffNumber;
        this._credits = credits; 
    }
    get StaffNumber(){
        return this._staffNumber;
    }
    get credits(){
        return this._credits
    }
}

const Rachel = new staff(
    "EY70 DTX",
    "556789",
    "No remaining balance"
);

console.log(Rachel)

// Subclass for staff number, and credits they have left to pay for the car park fees.
// 5 hours parked time, show how much will be charged and remaining balance.

const car1 = new JessCars(
    "EY15 XTB",
)

console.log(`Thank you for your custom. Please pay £${car1.payment} for ${car1.hoursParked} hours.`)


// Animal example

class Animal{
    constructor(name){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    eat(){
    this._hunger--;
    }
    drink(){
    this._thirst--;
    }
    }
    
    class Bunny extends Animal {
    constructor(name, lovesCarrot){
    super(name);
    this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrots(){
    return this._lovesCarrot;
    }
    }
    const rosie = new Bunny("Rosie", true);