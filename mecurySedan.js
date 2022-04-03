//this includes the vehicle class as a module
const VehicleModule = require("./Vehicle")

class Car extends VehicleModule{
    constructor(make,model,year,color,mileage)
        {
            super(make,model,year,color,mileage)
            this.maxPasengers = 5
            this.passenger = 0
            this.numberOfWheels = 4
            this.maximumSpeed = 160
            this.fuel = 10
            this.scheduleService = false  
        }
    
    loadPassengers(num){
        //if passenger less than maximumPassengers then availableRoom == true

        if (this.passenger < this.maxPassenger){
            this.availableRoom = true
        }
    }
    start(){
        // if fuel is greater than 0, then start == true
        if(this.fuel > 0){
            return true
        } else {return false}
    }
    scheduleService(mileage){
        // if mileage is greater than 30000, time for maintenance == true
        if(this.mileage > 30000){
            this.sheduleService = true
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
console.log(v.availableRoom)