var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  dogImage = loadImage("images/dog.png");
  happyDogImage = loadImage("images/happydog.png");

}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(300,200,50,50);
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  dog.scale=0.5;
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImage);
}
drawSprites();


}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
