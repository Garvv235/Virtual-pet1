var dog, happyDog,dogImg, database, foodS, foodStock

function preload()
{
 dogImg = loadImage("sprites/Dog.png");
 happyDog = loadImage("sprites/happydog.png");
}

function setup() {
	database = firebase.database();
  
  createCanvas(500, 500);
  
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  
  foodStockRef = database.ref('Food');
  foodStockRef.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDog);
    writeStock(foodS);
  }

  drawSprites();
  fill(255,255,254);
  stroke("white");
  text("Food left :"+foodS,170,200);
  textSize(13);
  text("Note : Press Up Arrow key to feed milk to John",130,300);


}
function readStock(data){
  foodS = data.val();
  }
  
  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        Food : x
      })
    }



