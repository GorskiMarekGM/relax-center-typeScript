import { Card } from "./Card";
import { Door } from "./Door";
import { LoyaltyCard } from "./LoyaltyCard";
import { MemberCard } from "./MemberCard";
import { RelaxCentre } from "./RelaxCentre";
import { StaffCard } from "./StaffCard";
import { Zone } from "./Zone";

export class RelaxSite implements RelaxCentre {

    private centreName:string;
    private zones:Array<Zone>;
    private cards:Array<Card>;
    private doors:Array<Door>;

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

    // removeCard
    public removeCard = (member: Card): void => {
        for (let index = 0; index < cardsArray.length; index++) {
            let element = cardsArray[index];
         
            if(element.getId() == member.getId()){
                cardsArray.splice(index,1)
            }
        }
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

    // move is returning string which tells if you moved and where

    // * Returns a string description of the result of a card requesting to move through a door.
    // * If the move can be made, the card information is removed from the source
    // * zone and added to the destination zone and a suitable message returned.
    // * If the move cannot be made, the state of the system remains unchanged
    // * and a message specifying the reason is returned.
    
    public move = (card: Card, doorNumber: number): string => {
        
        var door = this.getDoors(doorNumber)
        var doorDestination = door.getDestination()

        if(this.canMove(card,door)){
            doorDestination.removeCardFromZone(card)
            doorDestination.addCardToZone(card)
            return 'success'
        }else{
            return 'fail'
        }
    };

    // * A move will be successful if:
    // * the rating of the card  >= the rating of the destination zone
    // * AND the destination zone is not full
    // * AND the card has sufficient credits
    // * AND the card is currently in the source zone
    public canMove = (card: Card, door: Door): boolean => {
        
        var doorDestination = door.getDestination()
        var ratingDestination = doorDestination.rating
        var ratingCard = card.getRating()
        var creditsCard = card.getCredits()
        var cardZone = card.getType()
        
        if(doorDestination.isFull()){
            if(ratingCard >= ratingDestination){
                if(creditsCard > 0){
                    // TODO *and the card is currently in the source zone
                    if(true){
                        return true
                    }
                }
            }
        }
        return false
    };

    public getDoors = (doorNumber: number): Door => {
        for (let index = 0; index < this.doors.length; index++) {
            const element = this.doors[index];

            if(element.doorId == doorNumber){
                return element;
            }
        }
        return undefined
    };

    // cardsInZone: (zone: Zone) => string;
    public cardsInZone = (zone: Zone): string => {
        let allCards = ''
        for (let index = 0; index < this.zones.length; index++) {
            const singleZone = this.zones[index];
            let cards = singleZone.cards

            if(singleZone == zone){
                for (let index2 = 0; index2 < cards.length; index2++) {
                    let card = cards[index2];
        
                    allCards += "Card id:" + card.getId() + " memberName:"+card.getName() + " type:"+ card.getType() + " rating:"+ card.getRating()
                    allCards += " credits:"+ card.getCredits() + "\n"
                }
            }
        }
        return allCards
    };

    // cardsInAllZones: () => string;
    public cardsInAllZones = (): string => {
        let allCards = ''
        for (let index = 0; index < this.zones.length; index++) {
            const singleZone = this.zones[index];
            let cards = singleZone.cards
            
            allCards += "Zone name: " + singleZone.name + "\n\n"
            for (let index2 = 0; index2 < cards.length; index2++) {
                let card = cards[index2];
    
                allCards += "Card id:" + card.getId() + " memberName:"+card.getName() + " type:"+ card.getType() + " rating:"+ card.getRating()
                allCards += " credits:"+ card.getCredits() + "\n"
            }

        }
        return allCards
    };

    // moveToOutside: (card: Card) => void;
    public moveToOutside = (card: Card): void => {
        var out = this.findZone("Outside")
        card.setZone(out)
    };

    // moveAllToOutside: () => void;
    public moveAllToOutside = (): void => {
        for (let index = 0; index < this.cards.length; index++) {
            const element = this.cards[index];

            this.moveToOutside(element)
        }
    };
    
}


var card1 = new MemberCard("Joe",5,10,"Poznan","Member")
var card2 = new MemberCard("Dan",1,12,"Poznan","Member")
var card3 = new MemberCard("Matt",5,3,"Poznan","Member")
var card4 = new MemberCard("Tim",5,20,"Poznan","Member")
var card5 = new LoyaltyCard("Bob",3,30,"Main Center","Loyal")
var card6 = new LoyaltyCard("Steve",3,30,"Hall","Loyal")
var card7 = new StaffCard("Pete", 10, 5, "Poznan", 123, "Pool", "Staff")
var card8 = new StaffCard("Chen", 10, 5, "Poznan", 124, "Pool", "Staff")
let cardsArray = [card1,card2,card3,card4,card5,card6,card7,card8]


var zone1 = new Zone("Reception",1,100,cardsArray)
var zone2 = new Zone("Pool",3,10,cardsArray)
var zone3 = new Zone("Sauna",5,2,cardsArray)
var zone4 = new Zone("Sun Bed",1,1,cardsArray)
var zone5 = new Zone("Outside",0,1000,cardsArray)
let zonesArray = [zone1,zone2,zone3, zone4, zone5]
 
var door1 = new Door(1,zone5)
var door2 = new Door(2,zone2)
var door3 = new Door(3,zone1)
var door4 = new Door(4,zone1)
var door5 = new Door(5,zone4)
var door6 = new Door(6,zone1)
var door7 = new Door(7,zone3)
let doorsArray = [door1,door2, door3, door4, door5, door6, door7]

var center1 = new RelaxSite("Poznan",zonesArray,cardsArray,doorsArray)


//=============TESTING================

// console.log(center1.getCentreName())
// console.log(center1.findZone("Sauna"))

// cardsArray.forEach(element => {
//     console.log(element.getName())
// });

// center1.removeCard(card4)

// console.log("=============================")
// cardsArray.forEach(element => {
//     console.log(element.getName())
// });
console.log(center1.cardsInZone(zone1))
center1.move(card3,1)
// console.log("card with id 2000:" + center1.findCard(2000).name)

console.log(center1.cardsInZone(zone1))
// console.log(center1.cardsInAllZones())

