import { Door } from "./Door";
import { RelaxCentre } from "./RelaxCentre";
import { Zone } from "./Zone";

/**
 * A card is used to move through a door.
 */
export class Card implements RelaxCentre {
    protected cardId: number;
    protected memberName:string;
    protected type:string;
    protected rating:number;
    protected credits:number;
    protected centre:string;
    protected employeeNumber: number;
    protected dept: string;

    currentZone: Zone;

    constructor(rating: number, credits:number, centre:string, memberName:string, type:string) {
        this.rating = rating;
        this.credits = credits;
        this.centre = centre;
        this.memberName = memberName;
        this.type = type;
    }
  getCentreName: () => string;
  addZone: (zone: Zone) => void;
  addCard: (card: Card) => void;
  addDoor: (door: Door) => void;
  findZone: (zoneName: string) => Zone;
  findCard: (cardId: number) => Zone;
  move: (card: Card, doorNumber: number) => string;
  canMove: (card: Card, door: Door) => boolean;
  cardsInZone: (zone: Zone) => string;
  cardsInAllZones: () => string;
  moveToOutside: (card: Card) => void;
  moveAllToOutside: () => void;

    
    //public getLoyaltyCard = (): LoyaltyCard => this.getType();

    /**
     * @return {number} card id
     */
    // Get card id
    public getId = (): number => this.cardId;

    /**
     * @return {string} card type
     */
    public getType = (): string => this.type;

    /**
     * @return {Zone}
     */
    public getZone = (): Zone => this.currentZone;

    public setZone(value: Zone) {​​​​​​​​
        this.currentZone = value;
    }​​​​​​​​

    useZone = (): void => {
      
    };

}