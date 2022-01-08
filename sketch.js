var starImg,bgImg;
var star, starBody;
var starg, stargImg, stargBody;
var starb, starbImg, starbBody;
var lucerin, lucerinImg, lucerinBody;
//crea la variable para el sprite del hada y fairyImg
var fairy, fairyAni;
var fairyVoice;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//carga aquí la animación del hada
    fairyAni = loadAnimation("fairyImage1.png","fairyImage2.png");
    fairyVoice = loadSound("JoyMusic.mp3");
    stargImg = loadImage("StarG.png");
	starbImg = loadImage("StarB.png");
	lucerinImg = loadImage("Lucerin.png");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
    fairyVoice.play();
	//crea el sprite del hada, y agrega la animación para el hada
    fairy = createSprite(400,600,50,50);
	fairy.addAnimation("aleteo",fairyAni);
	fairy.scale=0.18;
	fairy.setCollider("circle",550,-100,150);
    fairy.debug=true;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	starg = createSprite(650,30);
	starg.addImage(stargImg);
	starg.scale = 0.2;

	starb = createSprite(650,30);
	starb.addImage(starbImg);
	starb.scale = 0.11;

    lucerin = createSprite(650,30);
	lucerin.addImage(lucerinImg);
	lucerin.scale = 0.2;
    
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(600 , 30 , 1 , {restitution:1, isStatic:true});
	World.add(world, starBody);
	
	stargBody = Bodies.circle(470 , 50 , 1 , {restitution:1, isStatic:true});
	World.add(world, stargBody);
	
	starbBody = Bodies.circle(350 , 70 , 1 , {restitution:1, isStatic:true});
	World.add(world, starbBody);

	lucerinBody = Bodies.circle(180 , 40 , 1 , {restitution:1, isStatic:true});
	World.add(world, lucerinBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.x = mouseX;
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  starg.x= stargBody.position.x 
  starg.y= stargBody.position.y 

  starb.x= starbBody.position.x 
  starb.y= starbBody.position.y 

  lucerin.x= lucerinBody.position.x
  lucerin.y= lucerinBody.position.y

  

  //escribe aquí el código para detener la estrella en la mano del hada
  if (star.isTouching(fairy)){
	  Matter.Body.setStatic(starBody,true);
  }

  if (starg.isTouching(fairy)){
	Matter.Body.setStatic(stargBody,true);
}

if (starb.isTouching(fairy)){
	Matter.Body.setStatic(starbBody,true);
}

if (lucerin.isTouching(fairy)){
	Matter.Body.setStatic(lucerinBody,true);
}

  drawSprites();

  textSize(15);
  fill("white")
  text("FLECHA ABAJO = AMARILLA",0,300);

  textSize(15);
  fill("white")
  text("FLECHA ARRIBA = GRIS",0,340);

  textSize(15);
  fill("white")
  text("FLECHA IZQUIERDA = AZUL",0,380);

  textSize(15);
  fill("white")
  text("FLECHA DERECHA = NARANJA",0,420);
}



function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === UP_ARROW){
		Matter.Body.setStatic(stargBody,false);
	}
	if (keyCode === LEFT_ARROW ){
		Matter.Body.setStatic(starbBody,false);
	}

	if (keyCode === RIGHT_ARROW){
		Matter.Body.setStatic(lucerinBody,false);
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
}
