// constructor function for object for standard rates
function VacationRental(name, location, price, rooms, rating, features, availability){
    this.rentalName = name;
    this.rentalLocation = location;
    this.rentalPrice  = price;
    this.rentalRooms = rooms;
    this.rentalRating = rating;
    this.rentalFeatures = features;
    this.rentalAvailability = Boolean(availability);
}

//constructor function for object for special rates
function SpecialRateRental(name, location, price, rooms, rating, features, availability){
    VacationRental.call(this, name, location, price, rooms, rating, features, availability);
    this.type = "specialRate"
}
// lets new object access all methods associated with vactionrental
SpecialRateRental.prototype = Object.create(VacationRental.prototype);

//constructor function for object for special rates
function SuperHostRental(name, location, price, rooms, rating, features, availability){
    VacationRental.call(this, name, location, price, rooms, rating, features, availability);
    this.type = "superHost"
}
// lets new object access all methods associated with vactionrental
SuperHostRental.prototype = Object.create(VacationRental.prototype);

  // using prototype to check the room is available
  VacationRental.prototype.checkAvailability = function() {
    if(this.rentalAvailability == true){
     return "The Property Is Cuurently Open For Rent";
   }else if (this.rentalAvailability == false){
      return "The Property Isn't Open For Rent";
  }
  }

  // using prototype for method to print
  VacationRental.prototype.print = function(){
    return this.rentalName + " Is a Rental Property That is Located in " + this.rentalLocation + ", for the Price of $" + this.rentalPrice + ". It Has " + this.rentalRooms + " Rooms and is Rated at " + this.rentalRating + " Stars. It Also Includes " + this.rentalFeatures + ". ";
  }

// using prototype for method to determine if its super or special rate and then add a message
VacationRental.prototype.special = function(){
  if (this.type == "specialRate"){
    return " Our Special Rate Property, It Is Currently 20% Off Making the New Cost $" + this.price*0.8 + ". The ";
  } else if (this.type == "superHost"){
    return " Our Super Host Property!!! The ";
  }

}

// Rental Properties,
rentalOne = new VacationRental ("McGin Estate", "Madrid", 200000, 15, 5, "Hot Tub, Car Service, House Keepers/Maids/Butlers", false);
rentalTwo = new VacationRental ("Brooks Mansion", "California", 8000, 6, 4, "Ocean View, Maid Service, Hot Tub + Pool, Cars for Use", true);
// special rate rental property
rentalThree = new SpecialRateRental ("Hamptons Mansion", "California", 550, 5, 3, "a Wonderful City View", true);
// super Host rental property
rentalFour = new SuperHostRental ("RockWood Estate", "Utah", 30000, 10, 4.5, "Wilderness Expierence, Maid Service, Pool, Skiing, Hot Tub", false);

// calling print method to print to my <p> element for my page
document.getElementById("rental1").innerHTML = "The First Property Is: " + rentalOne.print() + rentalOne.checkAvailability();
document.getElementById("rental2").innerHTML = "The Second Property Is: " + rentalTwo.print() + rentalTwo.checkAvailability();
// prints special rate property/Super Host Property
document.getElementById("rental3").innerHTML = "The Third Property Is: " + rentalThree.special() + rentalThree.print() + rentalThree.checkAvailability();
document.getElementById("rental4").innerHTML = "The Fourth Property Is: " + rentalFour.special() + rentalFour.print() + rentalFour.checkAvailability();
