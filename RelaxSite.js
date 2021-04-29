"use strict";
exports.__esModule = true;
exports.RelaxSite = void 0;
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
        // public removeCard = (member: Card): void => {
        //     for (let index = 0; index < cardsArray.length; index++) {
        //         let element = cardsArray[index];
        //         if(element.getId() == member.getId()){
        //             cardsArray.splice(index,1)
        //         }
        //     }
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
                // console.log("im at first for")
                for (var index2 = 0; index2 < cards.length; index2++) {
                    // console.log("im at sec for")
                    var singleCard = cards[index2];
                    if (singleCard.getId() == cardId) {
                        // console.log("im at if")
                        return singleZone;
                    }
                }
            }
            return undefined;
        };
        // move is returning string which tells if you moved and where
        // * Returns a string description of the result of a card requesting to move through a door.
        // * If the move can be made, the card information is removed from the source
        // * zone and added to the destination zone and a suitable message returned.
        // * If the move cannot be made, the state of the system remains unchanged
        // * and a message specifying the reason is returned.
        this.move = function (cardToMove, doorNumber) {
            var door = _this.getDoors(doorNumber);
            var cardDestination = door.getDestination();
            var cardOrigin = _this.findCard(cardToMove.getId());
            // console.log("origin "+cardOrigin)
            // console.log("cardToMove.getId() "+cardToMove.getId())
            if (_this.canMove(cardToMove, door)) {
                // console.log("getCards:")
                // console.log(cardDestination.getCards())
                cardOrigin.removeCardFromZone(cardToMove);
                cardToMove.useZone();
                // // console.log("getCards2:")
                // // console.log(cardDestination.getCards())
                cardDestination.addCardToZone(cardToMove);
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
            var cardZone = card.getZone();
            if (doorDestination.isFull()) {
                if (ratingCard >= ratingDestination) {
                    if (card.hasEnoughCredits()) {
                        console.log("cardzone" + cardZone.name);
                        console.log("door.getSource()" + door.getSource().name);
                        if (cardZone == door.getSource()) {
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
                allCards += "Zone name: " + singleZone.name + "\n\n";
                for (var index2 = 0; index2 < cards.length; index2++) {
                    var card = cards[index2];
                    allCards += "Id:" + card.getId() + " name:" + card.getName() + " type:" + card.getType() + " rating:" + card.getRating();
                    allCards += " credits:" + card.getCredits() + "\n";
                }
            }
            return allCards;
        };
        // moveToOutside: (card: Card) => void;
        this.moveToOutside = function (card) {
            var out = _this.findZone("Outside");
            card.setZone(out);
        };
        // moveAllToOutside: () => void;
        this.moveAllToOutside = function () {
            for (var index = 0; index < _this.cards.length; index++) {
                var element = _this.cards[index];
                _this.moveToOutside(element);
            }
        };
        this.centreName = centreName;
        this.zones = zones;
        this.cards = cards;
        this.doors = doors;
    }
    return RelaxSite;
}());
exports.RelaxSite = RelaxSite;
