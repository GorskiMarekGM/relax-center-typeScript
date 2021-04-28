import { Card } from "./Card";
import { Door } from "./Door";
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
    
}


var card1 = new Card(1,1,"centre1","Mirjalol","Loyalty")
var card2 = new Card(1,1,"centre1","Marek","Loyalty")
var card3 = new Card(1,1,"centre1","Nguyen","Staff")
var card4 = new Card(1,1,"centre1","Ayimkan","Member")
let cardArray = [card1,card2,card3,card4]


var zone1 = new Zone("Reception",1,100,cardArray)
var zone2 = new Zone("Pool",1,100,cardArray)
let zones = [zone1,zone2]

var door1 = new Door(1,zone1)
var door2 = new Door(2,zone2)
let doors = [door1,door2]

var center1 = new RelaxSite("Poznan",zones,cardArray,doors)

console.log(center1.getCentreName())
