import { Card } from "./Card";
import { LoyaltyCard } from "./LoyaltyCard";
import { MemberCard } from "./MemberCard";
import { RelaxCentre } from "./RelaxCentre";
import { Zone } from "./Zone";

/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
export class Door {
    doorId:number;
    source:Zone;
    destination:Zone;

    constructor(doorId:number,source:Zone, destination:Zone) {
        this.doorId = doorId;
        this.source = source;
        this.destination = destination;
    }

    public getSource = (): Zone => this.source;
    public getDestination = (): Zone => this.destination;
    
}

