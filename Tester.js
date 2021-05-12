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
        // Create part
        this.createCentre = function () {
            var zone0 = new Zone_1.Zone("Outside", 0, 1000, []);
            var zone1 = new Zone_1.Zone("Reception", 1, 100, []);
            var zone2 = new Zone_1.Zone("Pool", 3, 10, []);
            var zone3 = new Zone_1.Zone("Sauna", 5, 2, []);
            var zone4 = new Zone_1.Zone("Sun Bed", 1, 1, []);
            var zonesArray = [zone0, zone1, zone2, zone3, zone4];
            var card1 = new MemberCard_1.MemberCard("Joe", 5, 10, "Poznan", "Member");
            var card2 = new MemberCard_1.MemberCard("Dan", 1, 12, "Poznan", "Member");
            var card3 = new MemberCard_1.MemberCard("Matt", 5, 3, "Poznan", "Member");
            var card4 = new MemberCard_1.MemberCard("Tim", 5, 20, "Poznan", "Member");
            var card5 = new LoyaltyCard_1.LoyaltyCard("Bob", 3, 30, "Main Center", "Loyal");
            var card6 = new LoyaltyCard_1.LoyaltyCard("Steve", 3, 30, "Hall", "Loyal");
            var card7 = new StaffCard_1.StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff");
            var card8 = new StaffCard_1.StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff");
            var cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];
            // Outside -> Reception
            var door0 = new Door_1.Door(0, zone0, zone1);
            // Reception -> Outside
            var door1 = new Door_1.Door(1, zone0, zone1);
            // Reception -> Pool
            var door2 = new Door_1.Door(2, zone0, zone1);
            // Pool -> Reception
            var door3 = new Door_1.Door(3, zone0, zone1);
            // Sauna -> Reception
            var door4 = new Door_1.Door(4, zone0, zone1);
            // Reception -> Sunbed
            var door5 = new Door_1.Door(5, zone0, zone1);
            // Sunbed -> Reception
            var door6 = new Door_1.Door(6, zone0, zone1);
            // Pool -> Sauna
            var door7 = new Door_1.Door(7, zone0, zone1);
            var doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7];
            _this.centre = new RelaxSite_1.RelaxSite("Poznan", zonesArray, cardsArray, doorsArray);
            console.log("Centre created");
        };
        this.getCentre = function () {
            return _this.centre;
        };
        // Set starting zone for cards
        this.setStartingZones = function () {
            var zones = _this.centre.getZonesArray();
            for (var index = 0; index < _this.centre.getCardsArray.length; index++) {
                var element = _this.centre.getCardsArray[index];
                element.setZone(zones[0]);
            }
        };
        this.createCentre();
        this.setStartingZones();
    }
    return Tester;
}());
exports.Tester = Tester;
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
PoznanCentre.move(card4, 0);
PoznanCentre.move(card5, 0);
PoznanCentre.move(card6, 0);
PoznanCentre.move(card7, 0);
PoznanCentre.move(card8, 0);
console.log("=========================");
console.log(PoznanCentre.cardsInAllZones());
console.log(card4.getZone().name);
console.log("door2 source " + door2.source.name);
console.log("door2 destination " + door2.destination.name);
console.log("card currentZone " + card4.currentZone.name);
// console.log(card3.getZone().name)
// console.log(card4.getZone().name)
// console.log(card8.getZone().name)
PoznanCentre.move(card4, 2);
PoznanCentre.move(card5, 2);
PoznanCentre.move(card6, 5);
PoznanCentre.move(card7, 5);
PoznanCentre.move(card8, 1);
console.log("=========================");
console.log(PoznanCentre.cardsInAllZones());
console.log("card currentZone " + card4.currentZone.name);
PoznanCentre.move(card4, 7);
console.log("=========================");
console.log(PoznanCentre.cardsInAllZones());
console.log("card currentZone " + card4.currentZone.name);
