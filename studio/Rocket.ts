import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import {Payload} from './Payload';

export class Rocket {
    
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronaut: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
       this.totalCapacityKg = totalCapacityKg;
       this.name = name;
    }

    sumMass( items: Payload[] ): number {
       let payloadSum: number = 0;
       console.log(items[0]       // return Returns the sum of all items using each item's massKg property;
);
       for (let i=0; i<items.length; i++){
           payloadSum += items[i].massKg;
       }
       return payloadSum;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronaut)
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems

    }

    canAdd(item:Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    addCargo(cargo: Cargo): boolean {
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true;
        }
        else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false.
        //this.canAdd(astronaut) ? this.astronauts.push(astronaut) : return false
        if (this.canAdd(astronaut)) {
            this.astronaut.push(astronaut);
                return true;
        }
        else {
                return false;
        }
    }
}

