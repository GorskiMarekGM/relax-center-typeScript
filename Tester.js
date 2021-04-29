"use strict";
exports.__esModule = true;
exports.Tester = void 0;
var Door_1 = require("./Door");
var LoyaltyCard_1 = require("./LoyaltyCard");
var MemberCard_1 = require("./MemberCard");
var RelaxSite_1 = require("./RelaxSite");
var StaffCard_1 = require("./StaffCard");
var Zone_1 = require("./Zone");
var Tester = /** @class */ (function () {
    function Tester() {
        var _this = this;
        // Cards Part
        this.setCardsArray = function () {
            var card1 = new MemberCard_1.MemberCard("Joe", 5, 10, "Poznan", "Member");
            var card2 = new MemberCard_1.MemberCard("Dan", 1, 12, "Poznan", "Member");
            var card3 = new MemberCard_1.MemberCard("Matt", 5, 3, "Poznan", "Member");
            var card4 = new MemberCard_1.MemberCard("Tim", 5, 20, "Poznan", "Member");
            var card5 = new LoyaltyCard_1.LoyaltyCard("Bob", 3, 30, "Main Center", "Loyal");
            var card6 = new LoyaltyCard_1.LoyaltyCard("Steve", 3, 30, "Hall", "Loyal");
            var card7 = new StaffCard_1.StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff");
            var card8 = new StaffCard_1.StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff");
            _this.cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];
        };
        this.displayCardsArray = function () {
            for (var index = 0; index < _this.cardsArray.length; index++) {
                var element = _this.cardsArray[index];
                console.log(element);
            }
        };
        this.getCardsArray = function () {
            return _this.cardsArray;
        };
        // Zones part
        this.setZonesArray = function () {
            var zone0 = new Zone_1.Zone("Outside", 0, 1000, []);
            var zone1 = new Zone_1.Zone("Reception", 1, 100, []);
            var zone2 = new Zone_1.Zone("Pool", 3, 10, []);
            var zone3 = new Zone_1.Zone("Sauna", 5, 2, []);
            var zone4 = new Zone_1.Zone("Sun Bed", 1, 1, []);
            _this.zonesArray = [zone0, zone1, zone2, zone3, zone4];
        };
        this.displayZonesArray = function () {
            for (var index = 0; index < _this.zonesArray.length; index++) {
                var element = _this.zonesArray[index];
                console.log(element);
            }
        };
        this.getZonesArray = function () {
            return _this.zonesArray;
        };
        // Doors part
        this.setDoorsArray = function () {
            // Outside -> Reception
            var door0 = new Door_1.Door(0, _this.zonesArray[5], _this.zonesArray[1]);
            // Reception -> Outside
            var door1 = new Door_1.Door(1, _this.zonesArray[1], _this.zonesArray[5]);
            // Reception -> Pool
            var door2 = new Door_1.Door(2, _this.zonesArray[1], _this.zonesArray[2]);
            // Pool -> Reception
            var door3 = new Door_1.Door(3, _this.zonesArray[2], _this.zonesArray[1]);
            // Sauna -> Reception
            var door4 = new Door_1.Door(4, _this.zonesArray[3], _this.zonesArray[1]);
            // Reception -> Sunbed
            var door5 = new Door_1.Door(5, _this.zonesArray[1], _this.zonesArray[4]);
            // Sunbed -> Reception
            var door6 = new Door_1.Door(6, _this.zonesArray[4], _this.zonesArray[1]);
            // Pool -> Sauna
            var door7 = new Door_1.Door(7, _this.zonesArray[2], _this.zonesArray[3]);
            _this.doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7];
        };
        this.displayDoorsArray = function () {
            for (var index = 0; index < _this.doorsArray.length; index++) {
                var element = _this.doorsArray[index];
                console.log(element);
            }
        };
        this.getDoorsArray = function () {
            return _this.doorsArray;
        };
        // Create part
        this.createCentre = function (name, zones, cards, doors) {
            _this.centre = new RelaxSite_1.RelaxSite(name, zones, cards, doors);
        };
        this.getCentre = function () {
            return _this.centre;
        };
        // Set starting zone for cards
        this.setStartingZones = function () {
            for (var index = 0; index < _this.cardsArray.length; index++) {
                var element = _this.cardsArray[index];
                element.setZone(_this.centre.findZone("Outside"));
            }
        };
    }
    return Tester;
}());
exports.Tester = Tester;
// let cardsArray = [card1,card2,card3,card4,card5,card6,card7,card8]
var tester = new Tester();
tester.setCardsArray();
// tester.displayCardsArray()
tester.setZonesArray();
// tester.displayZonesArray()
tester.setDoorsArray();
// tester.setStartingZones()
tester.createCentre("Poznan", tester.getZonesArray(), tester.getCardsArray(), tester.getDoorsArray());
var PoznanCentre = tester.getCentre();
console.log(PoznanCentre.findZone("Outside"));
var cards = tester.getCardsArray();
var zones = tester.getZonesArray();
var doors = tester.getDoorsArray();
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
