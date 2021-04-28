"use strict";
exports.__esModule = true;
exports.Door = void 0;
/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
var Door = /** @class */ (function () {
    function Door(doorId, destination) {
        var _this = this;
        this.getDestination = function () { return _this.destination; };
        this.doorId = doorId;
        this.destination = destination;
    }
    return Door;
}());
exports.Door = Door;
