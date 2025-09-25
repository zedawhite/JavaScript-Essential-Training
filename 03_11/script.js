/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  };
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    // Initialize the parent class properties
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    // New property specific to HikingBackpack
    this.hydrationCapacity = hydrationCapacity; // Capacity in liters
  }

  // Method to check the hydration level and alert if it needs refilling
  checkHydration() {
    if (this.hydrationCapacity > 0) {
      console.log(`You have ${this.hydrationCapacity} liters of water left.`);
    } else {
      console.log("Time to refill your water!");
    }
  }

  // Extend or override methods from the parent class if necessary
  // For example, adding extra functionality when the lid is toggled
  toggleLid(lidStatus) {
    super.toggleLid(lidStatus); // Call the parent method
    if (lidStatus) {
      console.log(
        "Your hiking backpack lid is open. Remember to check to make sure the hydration pack is inserted."
      );
    } else {
      console.log(
        "Your hiking backpack lid is closed. Remember to check to make sure the hydration pack is inserted."
      );
    }
  }
}
