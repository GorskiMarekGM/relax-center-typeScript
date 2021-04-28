"use strict";
exports.__esModule = true;
exports.Card = void 0;
/**
 * A card is used to move through a door.
 */
var Card = /** @class */ (function () {
    function Card(rating, credits, centre, memberName, type) {
        var _this = this;
        //public getLoyaltyCard = (): LoyaltyCard => this.getType();
        /**
         * @return {number} card id
         */
        // Get card id
        this.getId = function () { return _this.cardId; };
        /**
         * @return {string} card type
         */
        this.getType = function () { return _this.type; };
        /**
         * @return {Zone}
         */
        this.getZone = function () { return _this.currentZone; };
        this.useZone = function () {
        };
        this.rating = rating;
        this.credits = credits;
        this.centre = centre;
        this.memberName = memberName;
        this.type = type;
    }
    Card.prototype.setZone = function (value) {
        this.currentZone = value;
    };
    return Card;
}());
exports.Card = Card;
