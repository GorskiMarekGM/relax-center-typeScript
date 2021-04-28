/**
 * A card is used to move through a door.
 */
class Card {
    protected cardId:number;
    protected memberName:string;
    protected type:string;
    protected rating:number;
    protected credits:number;
    protected centre:string;
    protected employeeNumber:number;
    protected dept:string;

    currentZone:Zone;

    constructor(rating: number, credits:number, centre:string, memberName:string, type:string) {
        this.rating = rating;
        this.credits = credits;
        this.centre = centre;
        this.memberName = memberName;
        this.type = type;
    }

    /**
     * @return {Zone}
     */
    public getZone = (): Zone => this.currentZone;

    public setZone(value: Zone) {​​​​​​​​
        this.currentZone = value;
    }​​​​​​​​

    public useZone = (): void => {
    };

}