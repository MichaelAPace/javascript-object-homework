// Javascript Object Refresher
//
// Create a plant that is an object.
// It starts out a seed.
// When you pour water onto it, the seed becomes a plant the first time it is watered and grows two inches every watering after.
// If you feed it plant food it grows one inch.
// If you feed it anti-freeze it dies.
// Stretch:
//
// It's max height is 12 inches. It will stay at 12 inches until it is watered more than four and it is feed more than 4 times then it dies.
// If you put it in the sun it flowers.
// If you take it out of the sun the flower goes away.


var plant = {
  isSeed: true,
  height: 0,
  isAlive: true,
  hasFlower:false,
};

function feed(obj,give,sun){
  if(give=="water" && obj.isSeed){
    obj.isSeed=false;
  }

if(obj.isSeed===false){
  obj.height +=2;
}
if(give=="plant food"){
  obj.height++;
}
if(give==="anti-freeze"){
  obj.isAlive= false;
}

if(sun==="sun"){
  obj.hasFlower = true;
}

return obj;
}

var object=plant;
object = feed(object,"water","sun");
object = feed(object,"water","sun");
object = feed(object,"water","sun");
object = feed(object,"water","sun");
console.log(object);
