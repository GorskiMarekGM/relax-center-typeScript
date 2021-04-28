"use strict";
exports.__esModule = true;
exports.RelaxSite = void 0;
var Door_1 = require("./Door");
var LoyaltyCard_1 = require("./LoyaltyCard");
var MemberCard_1 = require("./MemberCard");
var StaffCard_1 = require("./StaffCard");
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
        // removeCard
        // public removeCard = (cardToRemove: Card): void => {
        //     this.cards.splice(3)
        // };
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
        // findCard is returning Card object based on given string
        this.findCard = function (cardId) {
            for (var index = 0; index < _this.zones.length; index++) {
                var singleZone = _this.zones[index];
                var cards = singleZone.cards;
                for (var index2 = 0; index2 < cards.length; index2++) {
                    var singleCard = cards[index];
                    if (singleCard.getId() == cardId) {
                        return singleZone;
                    }
                }
            }
            return undefined;
        };
        // move: (card: Card, doorNumber: number) => string;
        // move is returning string which tells if you moved and where
        // * Returns a string description of the result of a card requesting to move through a door.
        // * If the move can be made, the card information is removed from the source
        // * zone and added to the destination zone and a suitable message returned.
        // * If the move cannot be made, the state of the system remains unchanged
        // * and a message specifying the reason is returned.
        this.move = function (card, doorNumber) {
            var door = _this.getDoors(doorNumber);
            var doorDestination = door.getDestination();
            if (_this.canMove(card, door)) {
                //TODO remove card from zone
                doorDestination.addCardToZone(card);
                return 'success';
            }
            else {
                return 'fail';
            }
        };
        // * A move will be successful if:
        // * the rating of the card  >= the rating of the destination zone
        // * AND the destination zone is not full
        // * AND the card has sufficient credits
        // * AND the card is currently in the source zone
        this.canMove = function (card, door) {
            var doorDestination = door.getDestination();
            var ratingDestination = doorDestination.rating;
            var ratingCard = card.getRating();
            var creditsCard = card.getCredits();
            var cardZone = card.getType();
            if (doorDestination.isFull()) {
                if (ratingCard >= ratingDestination) {
                    if (creditsCard > 0) {
                        // TODO *and the card is currently in the source zone
                        if (true) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        this.getDoors = function (doorNumber) {
            for (var index = 0; index < _this.doors.length; index++) {
                var element = _this.doors[index];
                if (element.doorId == doorNumber) {
                    return element;
                }
            }
            return undefined;
        };
        // cardsInZone: (zone: Zone) => string;
        this.cardsInZone = function (zone) {
            var allCards = '';
            for (var index = 0; index < _this.zones.length; index++) {
                var singleZone = _this.zones[index];
                var cards = singleZone.cards;
                if (singleZone == zone) {
                    for (var index2 = 0; index2 < cards.length; index2++) {
                        var card = cards[index2];
                        allCards += "Card id:" + card.getId() + " memberName:" + card.getName() + " type:" + card.getType() + " rating:" + card.getRating();
                        allCards += " credits:" + card.getCredits() + "\n";
                    }
                }
            }
            return allCards;
        };
        // cardsInAllZones: () => string;
        this.cardsInAllZones = function () {
            var allCards = '';
            for (var index = 0; index < _this.zones.length; index++) {
                var singleZone = _this.zones[index];
                var cards = singleZone.cards;
                allCards += "Zone name: " + singleZone.name;
                for (var index2 = 0; index2 < cards.length; index2++) {
                    var card = cards[index2];
                    allCards += "Card id:" + card.getId() + " memberName:" + card.getName() + " type:" + card.getType() + " rating:" + card.getRating();
                    allCards += " credits:" + card.getCredits() + "\n";
                }
            }
            return allCards;
        };
        this.centreName = centreName;
        this.zones = zones;
        this.cards = cards;
        this.doors = doors;
    }
    return RelaxSite;
}());
exports.RelaxSite = RelaxSite;
var card1 = new MemberCard_1.MemberCard("Joe", 5, 10, "Poznan", "Member");
var card2 = new MemberCard_1.MemberCard("Dan", 1, 12, "Poznan", "Member");
var card3 = new MemberCard_1.MemberCard("Matt", 5, 3, "Poznan", "Member");
var card4 = new MemberCard_1.MemberCard("Tim", 5, 20, "Poznan", "Member");
var card5 = new LoyaltyCard_1.LoyaltyCard("Bob", 3, 30, "Main Center", "Loyal");
var card6 = new LoyaltyCard_1.LoyaltyCard("Steve", 3, 30, "Hall", "Loyal");
var card7 = new StaffCard_1.StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff");
var card8 = new StaffCard_1.StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff");
var cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];
var zone1 = new Zone_1.Zone("Reception", 1, 100, cardsArray);
var zone2 = new Zone_1.Zone("Pool", 1, 100, cardsArray);
var zone3 = new Zone_1.Zone("Sauna", 1, 100, cardsArray);
var zonesArray = [zone1, zone2, zone3];
var door1 = new Door_1.Door(1, zone1);
var door2 = new Door_1.Door(2, zone2);
var doorsArray = [door1, door2];
var center1 = new RelaxSite("Poznan", zonesArray, cardsArray, doorsArray);
//=============TESTING================
// console.log(center1.getCentreName())
// console.log(center1.findZone("Sauna"))
// cardsArray.forEach(element => {
//     console.log(element.getName())
// });
// cardsArray.slice(4)
// console.log("=============================")
// cardsArray.forEach(element => {
//     console.log(element.getName())
// });
// console.log("card with id 2000:" + center1.findCard(2000).name)
// console.log(center1.cardsInZone(zone1))
console.log(center1.cardsInAllZones());
