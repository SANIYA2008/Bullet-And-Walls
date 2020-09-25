var wall,thickness;
 
var bullet,speed, weight; 

var bullet1, wall1;
 
function setup() {
 createCanvas(1600, 400);
 
 speed=random(223,321)
 weight=random(30,52)
 thickness=random(22,83)
 
 bullet=createSprite(50,200,50,50); 
 bullet1=createSprite(100,300,50,50);
 bullet.velocityX = speed;
 bullet.shapeColor=color(255);
 bullet1.velocityX = speed;
 bullet1.shapeColor='white'
 
 
 wall = createSprite(1000,80,thickness, height/2);
 wall1 = createSprite(1000,300,thickness, height/2);
 wall.shapeColor=color(80,80,80)
 wall1.shapeColor=color(80,80,80)
}
 
function draw() {
 background(0);
 
 if(wall.x-bullet.x < (bullet.width+wall.width)/2)
 {
 bullet.velocityX=0;
 var damage=0.5 * weight * speed* speed/thickness*thickness*thickness;
 if(damage>180)
 {
 bullet.shapeColor='red'
 }
 
 if(damage<100)
 {
 bullet.shapeColor='red'
 }
 } 
 
 
 if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2)
 {
 bullet1.velocityX=0;
 var damage=0.5 * weight * speed* speed/thickness*thickness*thickness;
 if(damage>180)
 {
 bullet1.shapeColor='yellow'
 }
 
 if(damage<100)
 {
 bullet1.shapeColor='yellow'
 }
 } 
 
 drawSprites();
 
}