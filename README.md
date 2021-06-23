<h1>Relax Access Control System</h1>

<h3>Overall Description</h3>

<p>
The Relax organisation runs a number of leisure centres. Each centre has a number of zones with leisure facilities. For safety and security purposes, Relax leisure centres require a system which bothcontrols access to its zones and keeps track of people in each zone. Access to a zone is through a door and to get through the door an access card is required. There are different types of cards for different kinds of members. All staff are also given membership of the centre and may use its facilities. When staff are working they have a by-pass key so do not need to use cards to get in/out of zones and are not recorded by the system. When not working, they will need to use their Staff membership access card.
</p>

<p>
There are currently three types of access cards: Member, Loyalty, Staff (but there are plans to introduce further types of cards e.g. Child, Gold). A user of the centre is only allowed to have one type of card. All cards include a membership number, the member's name, a rating and a number of credits. The rating determines which zones the member is allowed to enter e.g. a card with a rating of 3 allows access to all zones rated 3 or below. A card is created with a number of credits which aredecremented when a member enters a zone to use its facilities. Members may buy more credits to top up their cards or pay to change their rating. The system must check that a member has enough credits before they are allowed to enter a zone.
</p>

<h3>Card Types</h3>
The type of the membership card determines what is available to members.

<b>Member Cards:</b>
<ul>
<li>
are issued sequentially with numbers starting from 1000
</li>
<li>
are created with a specified rating and number of credits determined by parameter values
</li>
<li>
deduct 4 credits whenever a zone is entered
</li>
<li>
can only be used at the centre where it is registered
</li>
</ul>

<b>Loyalty Cards:</b>
<ul>
<li>
are issued sequentially with numbers starting from 2000
</li>
<li>
are created with a specified rating determined by a parameter value,  30 credits and 20 loyalty points
</li>
<li>
deduct 3 credits and add 2 loyalty points whenever a zone is used
</li>
<li>
loyalty points can be converted into credits (5 loyalty points = 1 credit)
</li>
<li>
can be used at any centre so do not need the centre name
</li>
</ul>
<b>Staff Cards:</b>
<ul>
<li>
are issued sequentially with numbers starting from 5000
</li>
<li>
are created with the highest rating of 10 (staff can enter all zones) and the number of credits of 5
</li>
<li>
include an employee number and the department name
</li>
<li>
include a fitness score 
</li>
<li>
do not deduct any credits but add 1 to the fitness score whenever a zone is entered
</li>
<li>
can be used at any centre so do not need the centre name
</li>
</ul>

<h3>Zones</h3>

<p>
Each zone has a name and a capacity which represents the maximum number of people that can be present in the zone at any one time. Each zone must maintain a list of all cards (and hence members) currently in the zone. These lists are updated whenever members enter or leave a zone, and it is always possible to say how many members (cards) are in the zone and who they are.
</p>
<p>
A centre has a collection of zones. In addition, it must always have a zone to represent the area outside the centre. The name of this zone MUST be "Outside" and it MUST have a rating of 0 and avery large maximum capacity. When the centre is empty (or when it has just been created), the system records all the membership cards as being in this "Outside" zone.
</p>
<p>
Each door connects a source zone to a destination zone and works in one direction only (like a turnstile). In normal operation, a card would be inserted into a card reader at the door, and the card information read.  The system would then check whether the card is allowed through the door to thedestination zone. A card is only allowed through a door if it meets the conditions for entry.  If these conditions are met, the system opens the door and allows entry through to the destination zone. It also updates its records to show that a card (and so the member using it) has left the source zone andentered the destination zone and also updates the cards credits, loyalty points and fitness score, as appropriate.
</p>
<br>
A request by a card to move through a door will produce one of the following results:
<ul>
<li>
Refusal to enter a zone, because the card's rating is lower than the rating of the zone. 
</li>
<li>
Refusal to enter a zone, because entry to the destination zone would exceed its maximum capacity.
</li>
<li>
Refusal to enter a zone, because the card does not have enough credits
</li>
<li>
Refusal to enter a zone, because card is not listed in the source zone for the door used
</li>
<li>
Successful entry, because none of the above conditions is true
</li>
</ul>

<h3>Additional information </h3>

<p>
Before installing card reading hardware and door control software, and the supporting network, it is necessary to develop and test that part of the system that records the location of cards in zones, makes decisions on whether access is to be allowed, and takes the appropriate action when a decision is made.
</p>
<p>
For the purposes of this project, we are not concerned with how the centre decides on a member's rating or their initial number of credits (this has to do with the type and amount of fees paid when a member applies for membership), nor with buying more credits. You should also ignore the situation where a card enters the centre and then does not have sufficient credits to return to the ‘Outside’ zone.
</p>

<h3>Assignment Information</h3>

<ul>
<li>
The group project must be implemented in TypeScript and the submitted project must compile to JavaScript without any errors. If the project does not compile, you will be penalised.
</li>
<li>
The project should display the qualities associated with clean code and good design principles as discussed in class.
</li>
</ul>

