"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MemberCard = void 0;
var Card_1 = require("./Card");
var MemberCard = /** @class */ (function (_super) {
    __extends(MemberCard, _super);
    // private cardId: number;
    /**
     * Constructor for a Member's card
     * @param {string} memberName - member's name
     * @param {number} rating - member's rating
     * @param {number} credits - inital number of credits
     * @param {string} centre - centre at which a member is registered
     * @param {string} type - type of the card
     */
    function MemberCard(memberName, rating, credits, centre, type) {
        var _this = _super.call(this, rating, credits, centre, memberName, type = "Member") || this;
        /**
         * @return {string} member's name
         */
        _this.getName = function () { return _this.memberName; };
        /**
         * @return {number} member's id
         */
        _this.getId = function () { return _this.cardId; };
        /**
         * changes a member's rating
         * @param {number} rating - new rating
         */
        _this.changeRating = function (rating) {
            _this.rating = rating;
        };
        /**
         * @return {number} member's rating
         */
        _this.getRating = function () { return _this.rating; };
        /**
         * adds credits to the member's card
         * @param {number} credits number of credits to be added
         */
        _this.addCredits = function (credits) {
            _this.credits += credits;
        };
        /**
         * decrements the credits to show that a zone has been use
         */
        _this.useZone = function () {
            _this.credits -= 4;
        };
        /**
         * @return {number} number of credits on the card
         */
        _this.getCredits = function () { return _this.credits; };
        /**
         * @return {boolean} true if a card has enough credits to enter a zone,
         * else false
         */
        _this.hasEnoughCredits = function () { return _this.credits >= 4; };
        /**
         * @return {string} a String representation of the member card details
         */
        _this.toString = function () {
            return "***Member Card***" +
                "\nCard No: " +
                _this.cardId +
                "\nName: " +
                _this.memberName +
                "\nRating: " +
                _this.rating +
                "\nCredits: " +
                _this.credits +
                "\nRelax Centre : " +
                _this.centre +
                "\n";
        };
        _this.cardId = MemberCard.currentId++;
        return _this;
    }
    MemberCard.currentId = 1000;
    return MemberCard;
}(Card_1.Card));
exports.MemberCard = MemberCard;
