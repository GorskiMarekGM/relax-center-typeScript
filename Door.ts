/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
class Door {
    doorId:number;
    destination:Zone;

    enter(card : Card){
        //get cardId
        card.setZone(this.destination)
        // card.useZone()
    }

    constructor(doorId:number, destination:Zone) {
        this.doorId = doorId;
        this.destination = destination;
    }
}

