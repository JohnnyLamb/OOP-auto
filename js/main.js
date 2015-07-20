$(document).on('ready', function() {
  console.log('sanity check!');

var Car = function(make,model,year,state,color,previous_owner,current_owner,passenger){

  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owner = [];
  this.current_owner = "manufacturer";
  this.passenger = [];

};

Car.prototype.sale = function(newowner){
  this.current_owner = newowner;
  return this.previous_owner.push(newowner);
};

Car.prototype.paint = function(color){
  this.color = color;
};

Car.prototype.start = function(){
  this.state = "on";

};

Car.prototype.off = function(){
  this.state = "off";
};

Car.prototype.driveTo = function(destination){
  if(this.state === "on"){
      console.log("Driving to " + destination);
  }else {
    console.log("Sorry, this car is off");
  }
};

Car.prototype.park = function(){
  if(this.state === "off"){
      console.log("Parked");
    } else {
      console.log("sorry this car is still on");
    }
};

Car.prototype.pickup = function(name){
  if(this.state === "on"){

    this.passenger.push(name);
    console.log("Driving to pick up " + this.passenger);
  }
};

Car.prototype.dropoff = function(name){

  var person = this.passenger.indexOf(name);

  if(this.state === "on"){
    for(i = 0; i < this.passenger.length; i++){
      if(this.passenger[i] === name){
          console.log(this.passenger.splice(person,1));
      } else {
        return false;
      }
    }
  }
};
var nissan = new Car("nissan","sentra","1987","silver");
var toyota = new Car("toyota","corola","2004","grey");
// nissan.sale("johnny");
// nissan.paint("red");
nissan.start();
// nissan.driveTo("boulder");
// nissan.park();
nissan.pickup("johnny");
nissan.dropoff("johnny");
nissan;


});
