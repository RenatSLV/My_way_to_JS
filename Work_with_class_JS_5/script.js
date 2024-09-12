// // task1
// class Musitions{
//     constructor ($name, realName, cost){
//         this.$name = String($name);
//         this.realName = String(realName);
//         this.cost = Number(cost);
//     }
    
//     calculate_consert(prise){
//         this.prise = Number(prise);
//         console.log(`Этот певец "${this.$name}" может дать ${Math.floor(this.prise / this.cost)} концертов!!!`);
//     }

//     info(){
//         console.log(this.$name);
//         console.log(this.realName);
//         console.log(`один концерт стоит: ${this.cost}`);
        
//     }
// }

// let Maks_Korsh = new Musitions("Макс Корж", "Максим Анатольевич Корж", 500_000)
// let Michail = new Musitions("Михаил Шуфутинский", "Михаил Захарович Шуфутинский", 1_500_000)

// Maks_Korsh.info()
// Maks_Korsh.calculate_consert(15_000)

// console.log("------------------------------------------");

// Michail.info()
// Michail.calculate_consert(15_000_000)

// // task2
// class Planet{
//     constructor(square, minTemperaturm, maxTemperaturm, isThereLife, $name){
//         this.square = Number(square);
//         this.minTemperaturm = Number(minTemperaturm);
//         this.maxTemperaturm = Number(maxTemperaturm);
//         this.isThereLife = Boolean(isThereLife);
//         this.$name = String($name);
//     }

//     printInfo(){
//         console.log("Name: " + this.$name);
//         console.log("Square: " + this.square);
//         console.log("Min Temperatur: " + this.minTemperaturm);
//         console.log("Max Temperatur: " + this.maxTemperaturm);
//         console.log("Has life: " + this.isThereLife);
//         console.log("-----------------------")
//     }
// }

// var Mercury = new Planet(74800000, -180, 430, false, "Mercury")
// var Venus = new Planet(460200000, 462, 465, false, "Venus")
// var Earth = new Planet(510100000, -89, +56, true, "Earth")
// var Mars = new Planet(144800000, -123, 20, false, "Mars")
// var Jupiter = new Planet(61420000000, -145, -108, false, "Jupiter")
// var Saturn = new Planet(42700000000, -178, -139, false, "Saturn")
// var Uranus = new Planet(8083000000, -224, -197, false, "Uranus")
// var Neptune = new Planet(7618000000, -218, -201, false, "Neptune")

// Mercury.printInfo()
// Venus.printInfo()
// Earth.printInfo()
// Mars.printInfo()
// Jupiter.printInfo()
// Saturn.printInfo()
// Uranus.printInfo()
// Neptune.printInfo()
