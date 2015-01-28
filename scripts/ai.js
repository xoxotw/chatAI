Object.spawn = function (parent, props) {
  var defs = {}, key;
  for (key in props) {
    if (props.hasOwnProperty(key)) {
      defs[key] = {value: props[key], enumerable: true};
    }
  }
  return Object.create(parent, defs);
}


var Creature = {
  type: "UNKNOWN",
  legs: 8,
  eyes: 2,
  name: "UNKNOWN",
  funx: "Kill everything alive!!!",
  toString: function () {
    return "Hi! "+ "<br>" + "&nbspMy name is " + this.name + ", I am a " +
    	this.type + "<br>" + " with " + 
    	this.legs + " legs and " + 
    	this.eyes + " eyes." + "<br>" +
    	"&nbspI'm having my " +
    	this.age + "th birthday today!" + "<br>" + "Come play with me, I love to: " +
    	this.funx + "!";
  }
}

var Human = Object.spawn(Creature, {
	type: "HUMAN",
	legs: 2,
	age: 36,
	name: "Kalle",
	funx: "Play Golf",
  photo: "images/human.jpg",
});

var Dog = Object.spawn(Creature, {
  type: "DOG",
  legs: 4,
  age: 6,
  name: "Charlie",
  funx: "Run in a circle",
  photo: "images/dog.jpg",
});

var Insect = Object.spawn(Creature, {
  type: "SPIDER",
  age: 2,
  name: "Morpheus",
  funx: "Bite humans",
  photo: "images/spider.png",
});

var obj1 = Object.spawn(Human);
var obj2 = Object.spawn(Dog);
var obj3 = Object.spawn(Insect);
