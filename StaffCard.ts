import { Card } from "./Card";
import { Zone } from "./Zone";

export class StaffCard extends Card{
  private static currentId = 5000;
  private static employeeNumber:number;
  private static dept:string;
  private fitnesScore = 0;

  /**
   * Constructor for a Member's card
   * @param {string} memberName - member's name
   * @param {number} rating - member's rating
   * @param {number} credits - inital number of credits
   * @param {string} centre - centre at which a member is registered
   * @param {number} employeeNumber
   * @param {string} dept
   * @param {string} type - type of the card
   */
  constructor(
    memberName: string,
    rating: number,
    credits: number,
    centre: string,
    employeeNumber:number,
    dept:string,
    type: string,
  ){
    super(rating,credits,centre, memberName, type="Staff")
    this.cardId = StaffCard.currentId++;
  }

  /**
   * @return {string} member's name
   */
  public getName = (): string => this.memberName;

  /**
   * @return {number} member's id
   */
  public getId = (): number => this.cardId;

  /**
   * changes a member's rating
   * @param {number} rating - new rating
   */
  public changeRating = (rating: number): void => {
    this.rating = rating;
  };

  /**
   * @return {number} member's rating
   */
  public getRating = (): number => this.rating;

  /**
   * adds credits to the member's card
   * @param {number} credits number of credits to be added
   */
  public addCredits = (credits: number): void => {
    this.credits += credits;
  };

  /**
   * decrements the credits to show that a zone has been use
   */
  public useZone = (): void => {
    this.fitnesScore++;
  };

  /**
   * @return {number} number of credits on the card
   */
  public getCredits = (): number => this.credits;
  /**
   * @return {number} number of credits on the card
   */
  public getFitnesScore = (): number => this.fitnesScore;

  /**
   * @return {boolean} true if a card has enough credits to enter a zone,
   * else false
   */
  public hasEnoughCredits = (): boolean => true;

  /**
   * @return {string} a String representation of the member card details
   */
  public toString = (): string =>
    "***Member Card***" +
    "\nCard No: " +
    this.cardId +
    "\nName: " +
    this.memberName +
    "\nRating: " +
    this.rating +
    "\nCredits: " +
    this.credits +
    "\nRelax Centre : " +
    this.centre +
    "\n";
}
