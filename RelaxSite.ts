import { Card } from "./Card";
import { Door } from "./Door";
import { LoyaltyCard } from "./LoyaltyCard";
import { RelaxCentre } from "./RelaxCentre";
import { Zone } from "./Zone";

export class RelaxSite implements RelaxCentre {

    private centreName:string;
    private zones:Array<Zone>;
    private cards:Array<Card>;
    private doors:Array<Door>;
    private girls:Array<string>;

    constructor(centreName: string, zones:Array<Zone>, cards:Array<Card>, doors:Array<Door>) {
        this.centreName = centreName;
        this.zones = zones;
        this.cards = cards;
        this.doors = doors;
    }
    
    // getCentreName
    public getCentreName = (): string => this.centreName;

    // addZone
    public addZone = (zoneToAdd: Zone): void => {
        this.zones.push(zoneToAdd);
    };

    // addCard
    public addCard = (cardToAdd: Card): void => {
        this.cards.push(cardToAdd);
    };

    // addDoor
    public addDoor = (doorToAdd: Door): void => {
        this.doors.push(doorToAdd);
    };

    // findZone is returning Zone object based on given string
    public findZone = (zoneName: string): Zone => {
        for (let index = 0; index < this.zones.length; index++) {
            const element = this.zones[index];

            if(element.name == zoneName){
                return element;
            }
        }
        return undefined
    };
    
    // findCard: (cardId: number) => Zone;

    // findCard is returning Card object based on given string
    public findCard = (cardId: number): Zone => {
        for (let index = 0; index < this.zones.length; index++) {
            const singleZone = this.zones[index];

            let cards = singleZone.cards

            for (let index2 = 0; index2 < cards.length; index2++) {
                const singleCard = cards[index];
    
                if(singleCard.getId() == cardId){
                    return singleZone
                }
            }
        }
        return undefined
    };


    move: (card: Card, doorNumber: number) => string;
    canMove: (card: Card, door: Door) => boolean;
    cardsInZone: (zone: Zone) => string;
    cardsInAllZones: () => string;
    moveToOutside: (card: Card) => void;
    moveAllToOutside: () => void;
    
}


var card1 = new Card(1,1,"centre1","Mirjalol","Loyalty")
var card2 = new LoyaltyCard("Marek",1,30,"centre1","Loyal")
var card3 = new Card(1,1,"centre1","Nguyen","Staff")
var card4 = new Card(1,1,"centre1","Ayimkan","Member")
let cardsArray = [card1,card2,card3,card4]


var zone1 = new Zone("Reception",1,100,cardsArray)
var zone2 = new Zone("Pool",1,100,cardsArray)
var zone3 = new Zone("Sauna",1,100,cardsArray)
let zonesArray = [zone1,zone2,zone3]

var door1 = new Door(1,zone1)
var door2 = new Door(2,zone2)
let doorsArray = [door1,door2]

var center1 = new RelaxSite("Poznan",zonesArray,cardsArray,doorsArray)

// console.log(center1.getCentreName())
// console.log(center1.findZone("Sauna"))

// cardsArray.forEach(element => {
//     console.log(element.getId())
// });
console.log("card with id 2000:" + center1.findCard(2000).name)
