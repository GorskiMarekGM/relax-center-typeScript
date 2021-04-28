"use strict";
exports.__esModule = true;
exports.RelaxSite = void 0;
var Card_1 = require("./Card");
var Door_1 = require("./Door");
var Zone_1 = require("./Zone");
var RelaxSite = /** @class */ (function () {
    function RelaxSite(centreName, zones, cards, doors) {
        var _this = this;
        // getCentreName
        this.getCentreName = function () { return _this.centreName; };
        this.centreName = centreName;
        this.zones = zones;
        this.cards = cards;
        this.doors = doors;
    }
    return RelaxSite;
}());
exports.RelaxSite = RelaxSite;
var card1 = new Card_1.Card(1, 1, "centre1", "Mirjalol", "Loyalty");
var card2 = new Card_1.Card(1, 1, "centre1", "Marek", "Loyalty");
var card3 = new Card_1.Card(1, 1, "centre1", "Nguyen", "Staff");
var card4 = new Card_1.Card(1, 1, "centre1", "Ayimkan", "Member");
var cardArray = [card1, card2, card3, card4];
var zone1 = new Zone_1.Zone("Reception", 1, 100, cardArray);
var zone2 = new Zone_1.Zone("Pool", 1, 100, cardArray);
var zones = [zone1, zone2];
var door1 = new Door_1.Door(1, zone1);
var door2 = new Door_1.Door(2, zone2);
var doors = [door1, door2];
var center1 = new RelaxSite("Poznan", zones, cardArray, doors);
console.log(center1.getCentreName());
