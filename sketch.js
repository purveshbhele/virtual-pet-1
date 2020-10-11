//Create variables here
var  database;
var dog,dogImg,dogImg2;
function preload()
{
  //load images here
  dogImg=loadImage("sprites/dogImg.png");
}


function setup() {
  
	createCanvas(800, 700);
var dog=createSprites(200,200,100,100);
dog.addImage("dogIng");
}


function draw() {  

  drawSprites();
  //add styles here

}



