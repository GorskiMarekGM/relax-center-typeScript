import { Card } from "./Card";
import { Door } from "./Door";
import { LoyaltyCard } from "./LoyaltyCard";
import { MemberCard } from "./MemberCard";
import { RelaxSite } from "./RelaxSite";
import { StaffCard } from "./StaffCard";
import { Zone } from "./Zone";

export class Tester {
    centre:RelaxSite

    constructor() {
        this.createCentre()
        this.setStartingZones()
    }

    // Create part
    public createCentre = (): void => {
          
        
        var zone0 = new Zone("Outside",0,1000,[])
        var zone1 = new Zone("Reception",1,100,[])
        var zone2 = new Zone("Pool",3,10,[])
        var zone3 = new Zone("Sauna",5,2,[])
        var zone4 = new Zone("Sun Bed",1,1,[])

        let zonesArray = [zone0,zone1,zone2,zone3,zone4]


        var card1 = new MemberCard("Joe",5,10,"Poznan","Member")
        var card2 = new MemberCard("Dan",1,12,"Poznan","Member")
        var card3 = new MemberCard("Matt",5,3,"Poznan","Member")
        var card4 = new MemberCard("Tim",5,20,"Poznan","Member")
        var card5 = new LoyaltyCard("Bob",3,30,"Main Center","Loyal")
        var card6 = new LoyaltyCard("Steve",3,30,"Hall","Loyal")
        var card7 = new StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff")
        var card8 = new StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff")

        let cardsArray = [card1, card2, card3, card4, card5, card6,card7,card8]


        // Outside -> Reception
        var door0 = new Door(0,zone0,zone1)

        // Reception -> Outside
        var door1 = new Door(1,zone0,zone1)

        // Reception -> Pool
        var door2 = new Door(2,zone0,zone1)

        // Pool -> Reception
        var door3 = new Door(3,zone0,zone1)

        // Sauna -> Reception
        var door4 = new Door(4,zone0,zone1)

        // Reception -> Sunbed
        var door5 = new Door(5,zone0,zone1)

        // Sunbed -> Reception
        var door6 = new Door(6,zone0,zone1)

        // Pool -> Sauna
        var door7 = new Door(7,zone0,zone1)

        let doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7]
    
        this.centre = new RelaxSite("Poznan",zonesArray,cardsArray,doorsArray)
        console.log("Centre created")
    };

    public getCentre = (): RelaxSite => {
        return this.centre
    };

    // Set starting zone for cards
    public setStartingZones = (): void => {
        
        var zones = this.centre.getZonesArray()
        for (let index = 0; index < this.centre.getCardsArray.length; index++) {
            const element = this.centre.getCardsArray[index];

            element.setZone(zones[0])
        }
    };

}



var card1 = new MemberCard("Joe",5,10,"Poznan","Member")
var card2 = new MemberCard("Dan",1,12,"Poznan","Member")
var card3 = new MemberCard("Matt",5,3,"Poznan","Member")
var card4 = new MemberCard("Tim",5,20,"Poznan","Member")
var card5 = new LoyaltyCard("Bob",3,30,"Main Center","Loyal")
var card6 = new LoyaltyCard("Steve",3,30,"Hall","Loyal")
var card7 = new StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff")
var card8 = new StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff")

 
let cardsArray = [card1, card2, card3, card4, card5, card6,card7,card8]

 
var zone0 = new Zone("Outside",0,1000,cardsArray)
var zone1 = new Zone("Reception",1,100,[])
var zone2 = new Zone("Pool",3,10,[])
var zone3 = new Zone("Sauna",5,2,[])
var zone4 = new Zone("Sun Bed",1,1,[])
 
let zonesArray = [zone0,zone1,zone2,zone3,zone4]

// set zones for cards

card1.setZone(zone0)
card2.setZone(zone0)
card3.setZone(zone0)
card4.setZone(zone0)
card5.setZone(zone0)
card6.setZone(zone0)
card7.setZone(zone0)
card8.setZone(zone0)

 
// Outside -> Reception
var door0 = new Door(0,zone0,zone1)
 
// Reception -> Outside
var door1 = new Door(1,zone1,zone0)
 
// Reception -> Pool
var door2 = new Door(2,zone1,zone2)
 
// Pool -> Reception
var door3 = new Door(3,zone2,zone1)
 
// Sauna -> Reception
var door4 = new Door(4,zone3,zone1)
 
// Reception -> Sunbed
var door5 = new Door(5,zone1,zone4)
 
// Sunbed -> Reception
var door6 = new Door(6,zone4,zone1)
 
// Pool -> Sauna
var door7 = new Door(7,zone2,zone3)
 
let doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7]
    

 
// Testing
var PoznanCentre = new RelaxSite("Poznan",zonesArray,cardsArray,doorsArray)
 
console.log(PoznanCentre.cardsInAllZones())

PoznanCentre.move(card4,0)
PoznanCentre.move(card5,0)
PoznanCentre.move(card6,0)
PoznanCentre.move(card7,0)
PoznanCentre.move(card8,0)

console.log("=========================")
console.log(PoznanCentre.cardsInAllZones())

console.log(card4.getZone().name)
console.log("door2 source "+door2.source.name)
console.log("door2 destination "+door2.destination.name)
console.log("card currentZone "+card4.currentZone.name)
// console.log(card3.getZone().name)
// console.log(card4.getZone().name)
// console.log(card8.getZone().name)
PoznanCentre.move(card4,2)
PoznanCentre.move(card5,2)
PoznanCentre.move(card6,5)
PoznanCentre.move(card7,5)
PoznanCentre.move(card8,1)

console.log("=========================")
console.log(PoznanCentre.cardsInAllZones())
console.log("card currentZone "+card4.currentZone.name)
PoznanCentre.move(card4,7)


console.log("=========================")
console.log(PoznanCentre.cardsInAllZones())
console.log("card currentZone "+card4.currentZone.name)