var cao,xin,tan;
var caoimg, xinimg, tanimg;
var vid;
var button;
var gameState = "start"
var bg,bgimg;
let playing = false;
var button1;
var player;
var caobutton;
var dialog,diaimg,diaimg2,diaimg3,diaimg4,diaimg5,diaimg6;
var sound1;
var restartbutton
var buttonimg;
var bgmusic;
var poster,posterimg;
var caoim1,caoim2,caoim3,caoim4,caoim5,caoim6,caoim7,caoim8,caoim9,caoim10;
var spim,bgimg1;
var tanim, tanim1, tanim2, tanim3, tanim4, tanim5, tanim6, tanim7;





function preload(){
  caoimg = loadImage("sprites/cao2.png");
  xinimg = loadImage("sprites/sunquan.png");
  tanimg = loadImage("sprites/liubei2.png");
  bgimg = loadImage("sprites/back1.jpg");
  diaimg = loadImage("dialog/fall.png");
  diaimg2 = loadImage("dialog/fall22.png");
  diaimg3 = loadImage("dialog/fall3.png");
  diaimg4 = loadImage("dialog/fall4.png");
  diaimg5 = loadImage("dialog/fall5.png");
  diaimg6 = loadImage("dialog/fall6.png");
  sound1 = loadSound("sound/click.mp3");
  buttonimg = loadImage("sprites/next1.png");
  bgmusic = loadSound("sound/music.mp3");
  posterimg = loadImage("sprites/thefall.jpg");


  caoim1 = loadImage("dialog/cao1.png");
  caoim2 = loadImage("dialog/cao2.png");
  caoim3 = loadImage("dialog/cao3.png");
  caoim4 = loadImage("dialog/cao4.png");
  caoim5 = loadImage("dialog/cao5.png");
  caoim6 = loadImage("dialog/cao6.png");
  caoim7 = loadImage("dialog/cao7.png");
  caoim8 = loadImage("dialog/cao8.png");
  caoim9 = loadImage("dialog/cao9.png");
  caoim10 = loadImage("dialog/cao10.png");

  tanim = loadImage("dialog/liu bei1.png");
  tanim1 = loadImage("dialog/liu bei2.png");
  tanim2 = loadImage("dialog/liu bei3.png");
  tanim3 = loadImage("dialog/liu bei4.png");
  tanim4 = loadImage("dialog/liu bei5.png");
  tabim5 = loadImage("dialog/liu bei6.png");
  tanim6 = loadImage("dialog/liu bei7.png");
  tanim7 = loadImage("dialog/liu bei8.png");






  
  bgimg1 = loadImage("bgimg/bg1im.png");



}

function setup() {
  createCanvas(1400,700);

 
 
  bg = createSprite(700,350,1400,700);
  bg.addImage("bg",bgimg);
  bg.scale = 0.8;
  bg.visible = false;

  spim = createSprite(700,350,1400,700);
  spim.addImage("spim",bgimg1);
  spim.scale = 0.6;
  spim.visible = false;
  dialog = createSprite(650, 200, 50, 50)
  dialog.addImage("dialog",diaimg);
  dialog.visible = false;

  player = createSprite(200,200,20,20);

  poster = createSprite(735,500,10,10);
poster.addImage("poster",posterimg);
poster.visible = false;
poster.scale = 0.35;


  button1 = createButton('PLAY');
  button1.style('background-color','red');
  button1.style('width','60px');
  button1.style('height','40px');
  button1.mousePressed(toggleVid);

  button1.position(700,620,50,50);
  button1.style("red");
  
  restartbutton = createSprite(100,100,20,20);
  restartbutton.shapeColor = "purple";
  restartbutton.visible = false;


caobutton = createSprite(1200,650,10,10);
caobutton.shapeColor="red";
caobutton.visible = false;
caobutton.addImage("caobutton",buttonimg);
caobutton.scale = 0.1;
caobutton1 = createSprite(1150,650,10,10);
caobutton1.shapeColor="red";
caobutton1.visible = false;
caobutton1.addImage("caobutton1",buttonimg);
caobutton1.scale = 0.1;
caobutton2 = createSprite(1200,600,10,10);
caobutton2.shapeColor="red";
caobutton2.visible = false;
caobutton2.addImage("caobutton2",buttonimg);
caobutton2.scale = 0.1;
caobutton3 = createSprite(1250,650,10,10);
caobutton3.shapeColor="red";
caobutton3.visible = false;
caobutton3.addImage("caobutton3",buttonimg);
caobutton3.scale = 0.1;
caobutton4 = createSprite(1200,670,10,10);
caobutton4.shapeColor="red";
caobutton4.visible = false;
caobutton4.addImage("caobutton4",buttonimg);
caobutton4.scale = 0.1;
caobutton5 = createSprite(1220,650,10,10);
caobutton5.shapeColor="red";
caobutton5.visible = false;
caobutton5.addImage("caobutton5",buttonimg);
caobutton5.scale = 0.1;

gbutton1 = createSprite(1200, 100, 10, 10);
gbutton1.shapeColor = "purple";
gbutton1.addImage("gbutton1",buttonimg);
gbutton1.scale = 0.1;
gbutton1.visible = false;
gbutton2 = createSprite(1300, 100, 10, 10);
gbutton2.shapeColor = "purple";
gbutton2.addImage("gbutton2",buttonimg);
gbutton2.scale = 0.1;
gbutton2.visible = false;
gbutton3 = createSprite(1200, 150, 10, 10);
gbutton3.shapeColor = "purple";
gbutton3.addImage("gbutton3",buttonimg);
gbutton3.scale = 0.1;
gbutton3.visible = false;
gbutton4 = createSprite(1100, 150, 10, 10);
gbutton4.shapeColor = "purple";
gbutton4.addImage("gbutton4",buttonimg);
gbutton4.scale = 0.1;
gbutton4.visible = false;
gbutton5 = createSprite(1150, 70, 10, 10);
gbutton5.shapeColor = "purple";
gbutton5.addImage("gbutton5",buttonimg);
gbutton5.scale = 0.1;
gbutton5.visible = false;
gbutton6 = createSprite(1150,120, 10, 10);
gbutton6.shapeColor = "purple";
gbutton6.addImage("gbutton6",buttonimg);
gbutton6.scale = 0.1;
gbutton6.visible = false;
gbutton7 = createSprite(1200, 50, 10, 10);
gbutton7.shapeColor = "purple";
gbutton7.addImage("gbutton7",buttonimg);
gbutton7.scale = 0.1;
gbutton7.visible = false;
gbutton8 = createSprite(1270, 90, 10, 10);
gbutton8.shapeColor = "purple";
gbutton8.addImage("gbutton8",buttonimg);
gbutton8.scale = 0.1;
gbutton8.visible = false;
gbutton9 = createSprite(1150, 150, 10, 10);
gbutton9.shapeColor = "purple";
gbutton9.addImage("gbutton9",buttonimg);
gbutton9.scale = 0.1;
gbutton9.visible = false;
gbutton10 = createSprite(1280, 120, 10, 10);
gbutton10.shapeColor = "purple";
gbutton10.addImage("gbutton10",buttonimg);
gbutton10.scale = 0.1;
gbutton10.visible = false;


bbutton1 = createSprite(1200, 100, 10, 10);
bbutton1.shapeColor = "purple";
bbutton1.addImage("bbutton1",buttonimg);
bbutton1.scale = 0.1;
bbutton1.visible = false;
bbutton2 = createSprite(1200, 100, 10, 10);
bbutton2.shapeColor = "purple";
bbutton2.addImage("bbutton2",buttonimg);
bbutton2.scale = 0.1;
bbutton2.visible = false;
bbutton3 = createSprite(1200, 100, 10, 10);
bbutton3.shapeColor = "purple";
bbutton3.addImage("bbutton3",buttonimg);
bbutton3.scale = 0.1;
bbutton3.visible = false;
bbutton4 = createSprite(1200, 100, 10, 10);
bbutton4.shapeColor = "purple";
bbutton4.addImage("bbutton4",buttonimg);
bbutton4.scale = 0.1;
bbutton4.visible = false;
bbutton5 = createSprite(1200, 100, 10, 10);
bbutton5.shapeColor = "purple";
bbutton5.addImage("bbutton5",buttonimg);
bbutton5.scale = 0.1;
bbutton5.visible = false;
bbutton6 = createSprite(1200, 100, 10, 10);
bbutton6.shapeColor = "purple";
bbutton6.addImage("bbutton6",buttonimg);
bbutton6.scale = 0.1;
bbutton6.visible = false;
bbutton7 = createSprite(1200, 100, 10, 10);
bbutton7.shapeColor = "purple";
bbutton7.addImage("bbutton7",buttonimg);
bbutton7.scale = 0.1;
bbutton7.visible = false;
bbutton8 = createSprite(1200, 100, 10, 10);
bbutton8.shapeColor = "purple";
bbutton8.addImage("bbutton8",buttonimg);
bbutton8.scale = 0.1;
bbutton8.visible = false;

































 cao = createSprite(725, 200, 50, 50);
 cao.addImage("cao",caoimg);
 cao.scale = 0.75;
 xin = createSprite(200,300,50,50);
 xin.addImage("xin", xinimg);
 tan = createSprite(1200,300,50,50);
 tan.addImage("tan",tanimg);
 tan.scale = 1;
 button = createSprite(200,620,10,10);
 button.addImage("button",buttonimg);
 button.scale = 0.07;
 cao.visible = false;
 xin.visible = false;
 tan.visible = false;
  var gameState = "start";
 vid = createVideo(
 
  ['sprites/kerokero.mp4'],
  
  
);
vid.position(0,0);
vid.size(1400, 600);
}

function draw() {
  background("black"); 
  player.x=mouseX;
  player.y=mouseY;
  if(touches.length>0||mousePressedOver(button)){
    background("white");
 gameState = "play";
 bgmusic.play();
vidLoad();
touches = [];


  }

  if (gameState === "play"){
    background("pink");
    
    bg.visible = true;
    vid.hide();
    vid.volume(0);
    button.destroy();
    poster.visible = true;
    cao.visible = true;
 xin.visible = true;
 tan.visible = true;
button1.hide();
if(player.isTouching(cao)){
  cao.scale = 0.78;
}
else{
  cao.scale = 0.75;
}
if(player.isTouching(xin)){
  xin.scale = 1.03;
}
else{
  xin.scale = 1.00;
}

if(player.isTouching(tan)){
  tan.scale = 1.03;
}
else{
  tan.scale = 1.00;
}




if(touches.length>0||mousePressedOver(xin)){
  gameState = "character2";
  poster.visble = false;
  touches = [];
}

if(touches.length>0||mousePressedOver(cao)){
  gameState = "character1";
  poster.visible = false;
  touches = [];
}
if(touches.length>0||mousePressedOver(tan)){
  gameState = "character3";
  poster.visible = false;
  touches = [];
}

  }
if(gameState === "character1"){
  xin.visible = false;
  tan.visible = false;
  caobutton.visible = true;
  poster.visble = false;
    cao.scale=0.95;
    cao.x = 300;
    cao.y = 400;
   
    if(touches.length>0||mousePressedOver(caobutton)){
      gameState = "story1";
      sound1.play();
      touches = [];
     }
}



  
if(gameState === "character2"){
  xin.visible = true;
  tan.visible = false;
  caobutton.visible = true;
  cao.visible = false;
  poster.visible = false;
    xin.scale=1.2;
    xin.x = 300;
    xin.y = 400;
   
    if(touches.length>0||mousePressedOver(caobutton)){
      gameState = "storyb1";
      sound1.play();
      touches = [];
     }
}
if(gameState === "character3"){
  xin.visible = false;
  tan.visible = true;
  caobutton.visible = true;
  cao.visible = false;
  poster.visble = false;
    tan.scale=1.2;
    tan.x = 300;
    tan.y = 400;
   
    if(touches.length>0||mousePressedOver(caobutton)){
      gameState = "storya1";
      sound1.play();
      touches = [];
     }
}






















    



//dia1
if(gameState === "story1"){
  
  poster.visible = false;
  dialog.visible = true;
  background("white");
caobutton.visible = false;
caobutton1.visible = true;
  if(touches.length>0||mousePressedOver(caobutton1)){
    gameState = "story2";
    sound1.play();
    touches = [];
   }
}



 
    

  //dia2
if(gameState === "story2"){
  poster.visible = false;
  dialog.visible = true;
  dialog.addImage("dialog",diaimg2);
  caobutton1.visible = false;
  caobutton2.visible = true;
 
  if(touches.length>0||mousePressedOver(caobutton2)){
    gameState = "story3";
    sound1.play();
    touches = [];
  }
}

//dia3
if(gameState === "story3"){
  poster.visible = false;
  dialog.addImage("dialog",diaimg3);
  caobutton2.visible = false;
  caobutton3.visible = true;

  if(touches.length>0||mousePressedOver(caobutton3)){
    gameState = "story4";
    sound1.play();
    touches = [];
  }
}

//dia4
if(gameState === "story4"){
  poster.visible = false;
  
  dialog.addImage("dialog",diaimg4);
  caobutton3.visible = false;
  caobutton4.visible = true;

  if(touches.length>0||mousePressedOver(caobutton4)){
    gameState = "story5";
    sound1.play();
  }
}

//dia5
if(gameState === "story5"){
  poster.visible = false;
  dialog.addImage("dialog",diaimg5);
  caobutton4.visible = false;
  caobutton5.visible = true;

  if(touches.length>0||mousePressedOver(caobutton5)){
    gameState = "story6";
    sound1.play();
    touches = [];
  }
}
//dia6
if(gameState === "story6"){
  dialog.addImage("dialog",diaimg6);
  poster.visible = false;
  caobutton5.visible = false;
  gbutton1.visible = true;

  if(touches.length>0||mousePressedOver(gbutton1)){
      gameState = "caomod1";
      sound1.play();
      bg.visible = false;
      spim.visible = true;
      touches = [];
  }



  if(gameState === "storya1"){
  
    poster.visible = false;
    dialog.visible = true;
    background("white");
  caobutton.visible = false;
  caobutton1.visible = true;
    if(touches.length>0||mousePressedOver(caobutton1)){
      gameState = "storya2";
      sound1.play();
      touches = [];
     }
  }
  
  
  
   
      
  
    //dia2
  if(gameState === "storya2"){
    poster.visible = false;
    dialog.visible = true;
    dialog.addImage("dialog",diaimg2);
    caobutton1.visible = false;
    caobutton2.visible = true;
   
    if(touches.length>0||mousePressedOver(caobutton2)){
      gameState = "storya3";
      sound1.play();
      touches = [];
    }
  }
  
  //dia3
  if(gameState === "storya3"){
    poster.visible = false;
    dialog.addImage("dialog",diaimg3);
    caobutton2.visible = false;
    caobutton3.visible = true;
  
    if(touches.length>0||mousePressedOver(caobutton3)){
      gameState = "storya4";
      sound1.play();
      touches = [];
    }
  }
  
  //dia4
  if(gameState === "storya4"){
    poster.visible = false;
    
    dialog.addImage("dialog",diaimg4);
    caobutton3.visible = false;
    caobutton4.visible = true;
  
    if(touches.length>0||mousePressedOver(caobutton4)){
      gameState = "storya5";
      sound1.play();
    }
  }
  
  //dia5
  if(gameState === "storya5"){
    poster.visible = false;
    dialog.addImage("dialog",diaimg5);
    caobutton4.visible = false;
    caobutton5.visible = true;
  
    if(touches.length>0||mousePressedOver(caobutton5)){
      gameState = "storya6";
      sound1.play();
      touches = [];
    }
  }
  //dia6
  if(gameState === "storya6"){
    dialog.addImage("dialog",diaimg6);
    poster.visible = false;
    caobutton5.visible = false;
    gbutton1.visible = true;
 
    if(touches.length>0||mousePressedOver(gbutton1)){
      gameState = "caomod1a";
      sound1.play();
      touches = [];
    }





  }

  if(gameState === "storyb1"){
  
    poster.visible = false;
    dialog.visible = true;
    background("white");
  caobutton.visible = false;
  caobutton1.visible = true;
    if(touches.length>0||mousePressedOver(caobutton1)){
      gameState = "storyb2";
      sound1.play();
      touches = [];
     }
  }
  
  
  
   
      
  
    //dia2
  if(gameState === "storyb2"){
    poster.visible = false;
    dialog.visible = true;
    dialog.addImage("dialog",diaimg2);
    caobutton1.visible = false;
    caobutton2.visible = true;
   
    if(touches.length>0||mousePressedOver(caobutton2)){
      gameState = "storyb3";
      sound1.play();
      touches = [];
    }
  }
  
  //dia3
  if(gameState === "storyb3"){
    poster.visible = false;
    dialog.addImage("dialog",diaimg3);
    caobutton2.visible = false;
    caobutton3.visible = true;
  
    if(touches.length>0||mousePressedOver(caobutton3)){
      gameState = "storyb4";
      sound1.play();
      touches = [];
    }
  }
  
  //dia4
  if(gameState === "storyb4"){
    poster.visible = false;
    
    dialog.addImage("dialog",diaimg4);
    caobutton3.visible = false;
    caobutton4.visible = true;
  
    if(touches.length>0||mousePressedOver(caobutton4)){
      gameState = "storyb5";
      sound1.play();
    }
  }
  
  //dia5
  if(gameState === "storyb5"){
    poster.visible = false;
    dialog.addImage("dialog",diaimg5);
    caobutton4.visible = false;
    caobutton5.visible = true;
  
    if(touches.length>0||mousePressedOver(caobutton5)){
      gameState = "storyb6";
      sound1.play();
      touches = [];
    }
  }
  //dia6
  if(gameState === "storyb6"){
    dialog.addImage("dialog",diaimg6);
    poster.visible = false;
    caobutton5.visible = false;
    gbutton1.visible = true;
  }




































  

  if(gameState === "caomod1"){
    dialog.addImage("dialog",caoim1);
    gbutton2.visible = true;
    gbutton1.visible = false;
    
    if(touches.length>0||mousePressedOver(gbutton2)){
      gameState = "caomod2";
      sound1.play();
      touches = [];
  }
 }

 if(gameState === "caomod2"){
  dialog.addImage("dialog",caoim2);
  gbutton3.visible = true;
  gbutton2.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton3)){
    gameState = "caomod3";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod3"){
  dialog.addImage("dialog",caoim3);
  gbutton4.visible = true;
  gbutton3.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton4)){
    gameState = "caomod4";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod4"){
  dialog.addImage("dialog",caoim4);
  gbutton5.visible = true;
  gbutton4.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton5)){
    gameState = "caomod5";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod5"){
  dialog.addImage("dialog",caoim5);
  gbutton6.visible = true;
  gbutton5.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton6)){
    gameState = "caomod6";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod6"){
  dialog.addImage("dialog",caoim6);
  gbutton7.visible = true;
  gbutton6.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton7)){
    gameState = "caomod7";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod7"){
  dialog.addImage("dialog",caoim7);
  gbutton8.visible = true;
  gbutton7.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton8)){
    gameState = "caomod8";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod8"){
  dialog.addImage("dialog",caoim8);
  gbutton9.visible = true;
  gbutton8.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton9)){
    gameState = "caomod9";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod9"){
  dialog.addImage("dialog",caoim9);
  gbutton10.visible = true;
  gbutton9.visible = false;
  
  if(touches.length>0||mousePressedOver(gbutton9)){
    gameState = "caomod10";
    sound1.play();
    touches = [];
}
}

if(gameState === "caomod10"){
  dialog.addImage("dialog",caoim10);
  gbutton10.visible = true;
  gbutton9.visible = false;
  
 
}
}
















  
  drawSprites();
}
function vidLoad() {
  //vid.loop();
  vid.volume(1);
}
function toggleVid() {
  if (playing) {
    vid.pause();
    button1.html('PLAY');
  } 
  else {
    vid.loop();
    button1.html('PAUSE');
  }
  playing = !playing;
}