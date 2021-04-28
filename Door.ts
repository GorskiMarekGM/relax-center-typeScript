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
    destination:Zone;

    constructor(doorId:number, destination:Zone) {
        this.doorId = doorId;
        this.destination = destination;
    }

    // changeZone(card : Card){
    //     //change zone to new, after going through the doors
    //     card.setZone(this.destination);

    //     var cardId = card.getId()

    // }

    // enterLoyaltyCard(loyalCard : LoyaltyCard){
    //     loyalCard.useZone()
    // }
    
    // enterMemberCard(memberCard : MemberCard){
    //     memberCard.useZone()
    // }
}

