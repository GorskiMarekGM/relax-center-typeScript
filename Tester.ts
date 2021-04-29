import { Card } from "./Card";
import { Door } from "./Door";
import { LoyaltyCard } from "./LoyaltyCard";
import { MemberCard } from "./MemberCard";
import { RelaxCentre } from "./RelaxCentre";
import { RelaxSite } from "./RelaxSite";
import { StaffCard } from "./StaffCard";
import { Zone } from "./Zone";

export class Tester {
    cardsArray:Array<Card>
    zonesArray:Array<Zone>
    doorsArray:Array<Door>
    centre:RelaxSite

    constructor() {
    }

    // Cards Part
    public setCardsArray = (): void => {
        
        var card1 = new MemberCard("Joe",5,10,"Poznan","Member")
        var card2 = new MemberCard("Dan",1,12,"Poznan","Member")
        var card3 = new MemberCard("Matt",5,3,"Poznan","Member")
        var card4 = new MemberCard("Tim",5,20,"Poznan","Member")
        var card5 = new LoyaltyCard("Bob",3,30,"Main Center","Loyal")
        var card6 = new LoyaltyCard("Steve",3,30,"Hall","Loyal")
        var card7 = new StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff")
        var card8 = new StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff")
    
        this.cardsArray = [card1,card2,card3,card4,card5,card6,card7,card8]
    };

    public displayCardsArray = (): void => {
        for (let index = 0; index < this.cardsArray.length; index++) {
            const element = this.cardsArray[index];

            console.log(element)
        }
    };

    public getCardsArray = (): Array<Card> => {
        return this.cardsArray
    };

    // Zones part
    public setZonesArray = (): void => {
        
        var zone0 = new Zone("Outside",0,1000,[])
        var zone1 = new Zone("Reception",1,100,[])
        var zone2 = new Zone("Pool",3,10,[])
        var zone3 = new Zone("Sauna",5,2,[])
        var zone4 = new Zone("Sun Bed",1,1,[])
    
        this.zonesArray = [zone0,zone1,zone2,zone3, zone4]
    };

    public displayZonesArray = (): void => {
        for (let index = 0; index < this.zonesArray.length; index++) {
            const element = this.zonesArray[index];

            console.log(element)
        }
    };

    public getZonesArray = (): Array<Zone> => {
        return this.zonesArray
    };

    // Doors part
    public setDoorsArray = (): void => {
        
        // Outside -> Reception
        var door0 = new Door(0,this.zonesArray[5],this.zonesArray[1])

        // Reception -> Outside
        var door1 = new Door(1,this.zonesArray[1],this.zonesArray[5])

        // Reception -> Pool
        var door2 = new Door(2,this.zonesArray[1],this.zonesArray[2])

        // Pool -> Reception
        var door3 = new Door(3,this.zonesArray[2],this.zonesArray[1])

        // Sauna -> Reception
        var door4 = new Door(4,this.zonesArray[3],this.zonesArray[1])

        // Reception -> Sunbed
        var door5 = new Door(5,this.zonesArray[1],this.zonesArray[4])

        // Sunbed -> Reception
        var door6 = new Door(6,this.zonesArray[4],this.zonesArray[1])

        // Pool -> Sauna
        var door7 = new Door(7,this.zonesArray[2],this.zonesArray[3])
    
        this.doorsArray = [door0,door1,door2, door3, door4, door5, door6, door7]
    };

    public displayDoorsArray = (): void => {
        for (let index = 0; index < this.doorsArray.length; index++) {
            const element = this.doorsArray[index];

            console.log(element)
        }
    };

    public getDoorsArray = (): Array<Door> => {
        return this.doorsArray
    };

    // Create part
    public createCentre = (name:string,zones:Array<Zone>,cards:Array<Card>,doors:Array<Door>): void => {
        this.centre = new RelaxSite(name,zones,cards,doors)
    };

    public getCentre = (): RelaxSite => {
        return this.centre
    };

    // Set starting zone for cards
    public setStartingZones = (): void => {
        for (let index = 0; index < this.cardsArray.length; index++) {
            const element = this.cardsArray[index];

            element.setZone(this.centre.findZone("Outside"))
        }
    };

}



// let cardsArray = [card1,card2,card3,card4,card5,card6,card7,card8]



var tester = new Tester()
tester.setCardsArray()
// tester.displayCardsArray()
tester.setZonesArray()
// tester.displayZonesArray()
tester.setDoorsArray()
// tester.setStartingZones()
tester.createCentre("Poznan",tester.getZonesArray(),tester.getCardsArray(),tester.getDoorsArray())

var PoznanCentre = tester.getCentre()

console.log(PoznanCentre.findZone("Outside"))
var cards = tester.getCardsArray()
var zones = tester.getZonesArray()
var doors = tester.getDoorsArray()

// PoznanCentre.move(cards[1],0)
// PoznanCentre.move(cards[2],0)
// PoznanCentre.move(cards[3],0)

// PoznanCentre.cardsInZone(zones[0])
// PoznanCentre.cardsInZone(zones[1])


// PoznanCentre.move(cards[1],1)
// PoznanCentre.move(cards[2],2)
// PoznanCentre.move(cards[3],5)

// PoznanCentre.cardsInZone(zones[0])
// PoznanCentre.cardsInZone(zones[1])
// PoznanCentre.cardsInZone(zones[2])
// PoznanCentre.cardsInZone(zones[5])
 

// var center1 = new RelaxSite("Poznan",zonesArray,cardsArray,doorsArray)


//=============TESTING================

// console.log(center1.getCentreName())
// console.log(center1.findZone("Sauna"))

// cardsArray.forEach(element => {
//     console.log(element.getName())
// });

// center1.removeCard(card4)

// console.log("=============================")
// cardsArray.forEach(element => {
//     console.log(element.getName())
// });
// All in reception
// console.log(center1.cardsInZone(zone1))


// console.log(center1.findCard(1002))


// var readline = require('readline');

// let userRes;
// while (userRes !== '0') {
//     console.log("Option 1")
//     console.log("Option 2")
//     console.log("Option 3")
//     userRes = readLineSync.question("Pick an option");
//     if (userRes === '1') {
//         doSomething()
//     } else if (userRes === '2') {
//         doSomethingElse()
//     }
// }


// console.log("==========RECEPTION==========")
// console.log(center1.cardsInZone(zone1))
// console.log(card5.getLoyaltyPoints())
// console.log(center1.canMove(card4,door2))
// console.log(center1.canMove(card5,door2))
// center1.move(card4,2)
// center1.move(card5,2)
// // center1.moveAllToOutside()

// console.log("==========RECEPTION==========")
// console.log(center1.cardsInZone(zone1))
// console.log("============POOL=============")
// // // console.log("card with id 2000:" + center1.findCard(2000).name)

// console.log(center1.cardsInZone(zone2))
// console.log(card5.getLoyaltyPoints())
// console.log(center1.cardsInAllZones())

// card6.convertCredits()
