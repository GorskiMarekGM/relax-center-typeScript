"use strict";
exports.__esModule = true;
var Door_1 = require("./Door");
var LoyaltyCard_1 = require("./LoyaltyCard");
var MemberCard_1 = require("./MemberCard");
var RelaxSite_1 = require("./RelaxSite");
var StaffCard_1 = require("./StaffCard");
var Zone_1 = require("./Zone");
// export class Tester {
//     centre:RelaxSite
//     constructor() {
//         this.createCentre()
//         this.setStartingZones()
//     }
//     // Create part
//     public createCentre = (): void => {
//         var zone0 = new Zone("Outside",0,1000,[])
//         var zone1 = new Zone("Reception",1,100,[])
//         var zone2 = new Zone("Pool",3,10,[])
//         var zone3 = new Zone("Sauna",5,2,[])
//         var zone4 = new Zone("Sun Bed",1,1,[])
//         let zonesArray = [zone0,zone1,zone2,zone3,zone4]
//         var card1 = new MemberCard("Joe",5,10,"Poznan","Member",zone0)
//         var card2 = new MemberCard("Dan",1,12,"Poznan","Member",zone0)
//         var card3 = new MemberCard("Matt",5,3,"Poznan","Member",zone0)
//         var card4 = new MemberCard("Tim",5,20,"Poznan","Member",zone0)
//         var card5 = new LoyaltyCard("Bob",3,30,"Main Center","Loyal",zone0)
//         var card6 = new LoyaltyCard("Steve",3,30,"Hall","Loyal",zone0)
//         var card7 = new StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff",zone0)
//         var card8 = new StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff",zone0)
//         let cardsArray = [card1, card2, card3, card4, card5, card6,card7,card8]
//         // Outside -> Reception
//         var door0 = new Door(0,zone0,zone1)
//         // Reception -> Outside
//         var door1 = new Door(1,zone0,zone1)
//         // Reception -> Pool
//         var door2 = new Door(2,zone0,zone1)
//         // Pool -> Reception
//         var door3 = new Door(3,zone0,zone1)
//         // Sauna -> Reception
//         var door4 = new Door(4,zone0,zone1)
//         // Reception -> Sunbed
//         var door5 = new Door(5,zone0,zone1)
//         // Sunbed -> Reception
//         var door6 = new Door(6,zone0,zone1)
//         // Pool -> Sauna
//         var door7 = new Door(7,zone0,zone1)
//         let doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7]
//         this.centre = new RelaxSite("Poznan",zonesArray,cardsArray,doorsArray)
//         console.log("Centre created")
//     };
//     public getCentre = (): RelaxSite => {
//         return this.centre
//     };
//     // Set starting zone for cards
//     public setStartingZones = (): void => {
//         var zones = this.centre.getZonesArray()
//         for (let index = 0; index < this.centre.getCardsArray.length; index++) {
//             const element = this.centre.getCardsArray[index];
//             element.setZone(zones[0])
//         }
//     };
// }
// // Neccessary to run
// var tester = new Tester()
// var PoznanCentre = tester.getCentre()
// // console.log(tester.getCentre())
// // console.log(PoznanCentre)
// // console.log(PoznanCentre.getDoors(4))
// // PoznanCentre.cardsInAllZones()
// // var card1 = PoznanCentre.getCardByIndex(1)
// var card2 = PoznanCentre.getCardByIndex(2)
// var card3 = PoznanCentre.getCardByIndex(3)
// var card4 = PoznanCentre.getCardByIndex(4)
// var card8 = PoznanCentre.getCardByIndex(7)
// var outside = PoznanCentre.getZoneByIndex(0)
// var reception = PoznanCentre.getZoneByIndex(1)
// var door1 = PoznanCentre.getDoors(2)
// console.log(PoznanCentre.cardsInAllZones())
// PoznanCentre.move(card3,1)
// PoznanCentre.move(card2,2)
// PoznanCentre.move(card4,5)
// PoznanCentre.move(card8,2)
// console.log("=============================")
// console.log(PoznanCentre.cardsInAllZones())
// PoznanCentre.move(card2,3)
// PoznanCentre.move(card4,4)
// PoznanCentre.move(card8,7)
// console.log("=============================")
// console.log(PoznanCentre.cardsInAllZones())
var card1 = new MemberCard_1.MemberCard("Joe", 5, 10, "Poznan", "Member");
var card2 = new MemberCard_1.MemberCard("Dan", 1, 12, "Poznan", "Member");
var card3 = new MemberCard_1.MemberCard("Matt", 5, 3, "Poznan", "Member");
var card4 = new MemberCard_1.MemberCard("Tim", 5, 20, "Poznan", "Member");
var card5 = new LoyaltyCard_1.LoyaltyCard("Bob", 3, 30, "Main Center", "Loyal");
var card6 = new LoyaltyCard_1.LoyaltyCard("Steve", 3, 30, "Hall", "Loyal");
var card7 = new StaffCard_1.StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff");
var card8 = new StaffCard_1.StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff");
var cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];
var zone0 = new Zone_1.Zone("Outside", 0, 1000, cardsArray);
var zone1 = new Zone_1.Zone("Reception", 1, 100, []);
var zone2 = new Zone_1.Zone("Pool", 3, 10, []);
var zone3 = new Zone_1.Zone("Sauna", 5, 2, []);
var zone4 = new Zone_1.Zone("Sun Bed", 1, 1, []);
var zonesArray = [zone0, zone1, zone2, zone3, zone4];
// set zones for cards
card1.setZone(zone0);
card2.setZone(zone0);
card3.setZone(zone0);
card4.setZone(zone0);
card5.setZone(zone0);
card6.setZone(zone0);
card7.setZone(zone0);
card8.setZone(zone0);
// Outside -> Reception
var door0 = new Door_1.Door(0, zone0, zone1);
// Reception -> Outside
var door1 = new Door_1.Door(1, zone1, zone0);
// Reception -> Pool
var door2 = new Door_1.Door(2, zone1, zone2);
// Pool -> Reception
var door3 = new Door_1.Door(3, zone2, zone1);
// Sauna -> Reception
var door4 = new Door_1.Door(4, zone3, zone1);
// Reception -> Sunbed
var door5 = new Door_1.Door(5, zone1, zone4);
// Sunbed -> Reception
var door6 = new Door_1.Door(6, zone4, zone1);
// Pool -> Sauna
var door7 = new Door_1.Door(7, zone2, zone3);
var doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7];
// Testing
var PoznanCentre = new RelaxSite_1.RelaxSite("Poznan", zonesArray, cardsArray, doorsArray);
console.log(PoznanCentre.cardsInAllZones());
PoznanCentre.move(card7, 0);
// PoznanCentre.move(card3,0)
// PoznanCentre.move(card4,0)
// PoznanCentre.move(card8,0)
console.log("=========================");
console.log(PoznanCentre.cardsInAllZones());
console.log(card7.getZone().name);
console.log("door2 source " + door2.source.name);
console.log("door2 destination " + door2.destination.name);
console.log("card currentZone " + card7.currentZone.name);
// console.log(card3.getZone().name)
// console.log(card4.getZone().name)
// console.log(card8.getZone().name)
PoznanCentre.move(card7, 2);
// PoznanCentre.move(card4,2)
// PoznanCentre.move(card8,5)
console.log("=========================");
console.log(PoznanCentre.cardsInAllZones());
console.log("card currentZone " + card7.currentZone.name);
