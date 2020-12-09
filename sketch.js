var bullet , wall;
var speed , weight;
var thickness , damage;
var rating;

function setup() 
{
  createCanvas(1600,400);
    
  speed= Math.round(random(223,321));
  weight= Math.round(random(30,52));
  thickness=Math.round(random(22,83));
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  bullet=createSprite(50,200,70,30);
  bullet.velocityX = speed;
}

function draw() 
{
  background("black");  
   
   if(hasCollided(bullet,wall))
   {
    bullet.velocityX=0;
    damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));

     //bad
    if(damage>10) 
    {
    bullet.shapeColor=color("red");
    rating="Bad";
    }

     //good
    if(damage<10) 
    {
      bullet.shapeColor=color("lime");
      rating="Good";
    }
   }

  console.log('Rating = ' + rating);
  
  fill("white")
  textFont("courier");
  textSize(20);
    text("Speed: "+ speed + " km/h |",290,50);
    text("Weight: "+ weight + " kg |",500,50);
    text("Thickness: "+ Math.round(thickness),690,50);
 
  textFont("impact");
  textSize(25);
    text("Rating: "+ rating + " |",450,350);
    text("Damage: "+ damage,600,350);

  drawSprites();
}
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}