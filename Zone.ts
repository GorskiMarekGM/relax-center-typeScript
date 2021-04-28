/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */

import { Card } from "./Card";
import { Door } from "./Door";
import { RelaxCentre } from "./RelaxCentre";

export class Zone implements RelaxCentre {
    name:string;
    rating:number;
    capacity:number;
    //all cards in particular zone
    cards:Array<Card>

    constructor(name:string, rating:number, capacity:number, cards:Array<Card>) {
        this.name = name;
        this.rating = rating;
        this.capacity = capacity;
        this.cards = cards;
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
}
