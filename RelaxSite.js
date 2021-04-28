"use strict";
exports.__esModule = true;
exports.RelaxSite = void 0;
var Card_1 = require("./Card");
var Door_1 = require("./Door");
var LoyaltyCard_1 = require("./LoyaltyCard");
var Zone_1 = require("./Zone");
var RelaxSite = /** @class */ (function () {
    function RelaxSite(centreName, zones, cards, doors) {
        var _this = this;
        // getCentreName
        this.getCentreName = function () { return _this.centreName; };
        // addZone
        this.addZone = function (zoneToAdd) {
            _this.zones.push(zoneToAdd);
        };
        // addCard
        this.addCard = function (cardToAdd) {
            _this.cards.push(cardToAdd);
        };
        // addDoor
        this.addDoor = function (doorToAdd) {
            _this.doors.push(doorToAdd);
        };
        // findZone is returning Zone object based on given string
        this.findZone = function (zoneName) {
            for (var index = 0; index < _this.zones.length; index++) {
                var element = _this.zones[index];
                if (element.name == zoneName) {
                    return element;
                }
            }
            return undefined;
        };
        // findCard: (cardId: number) => Zone;
        // findCard is returning Card object based on given string
        this.findCard = function (cardId) {
            for (var index = 0; index < _this.zones.length; index++) {
                var singleZone = _this.zones[index];
                var cards = singleZone.cards;
                console.log("im in first loop");
                for (var index2 = 0; index2 < cards.length; index2++) {
                    var singleCard = cards[index];
                    console.log("im in sec loop");
                    if (singleCard.getId() == cardId) {
                        console.log("im here");
                        return singleZone;
                    }
                }
            }
            return undefined;
        };
        this.centreName = centreName;
        this.zones = zones;
        this.cards = cards;
        this.doors = doors;
    }
    return RelaxSite;
}());
exports.RelaxSite = RelaxSite;
var card1 = new Card_1.Card(1, 1, "centre1", "Mirjalol", "Loyalty");
var card2 = new LoyaltyCard_1.LoyaltyCard("Marek", 1, 30, "centre1", "Loyal");
var card3 = new Card_1.Card(1, 1, "centre1", "Nguyen", "Staff");
var card4 = new Card_1.Card(1, 1, "centre1", "Ayimkan", "Member");
var cardsArray = [card1, card2, card3, card4];
var zone1 = new Zone_1.Zone("Reception", 1, 100, cardsArray);
var zone2 = new Zone_1.Zone("Pool", 1, 100, cardsArray);
var zone3 = new Zone_1.Zone("Sauna", 1, 100, cardsArray);
var zonesArray = [zone1, zone2, zone3];
var door1 = new Door_1.Door(1, zone1);
var door2 = new Door_1.Door(2, zone2);
var doorsArray = [door1, door2];
var center1 = new RelaxSite("Poznan", zonesArray, cardsArray, doorsArray);
// console.log(center1.getCentreName())
// console.log(center1.findZone("Sauna"))
// cardsArray.forEach(element => {
//     console.log(element.getId())
// });
console.log("card with id 2000:" + center1.findCard(2000).name);
