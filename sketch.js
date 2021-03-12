var gameState = "start";
var arrowState = "right"
//sounds
var caveS;
//images and animations
var still;
var dancer_Img;
var throne_Img;
var princess_stand;
var princess_left;
var start = 0;
var cage_Img;
var giant;
var door2;
var arrow2;
var bg1;
var bg_end;
var bg5;
var bg6;
var  stone_Img;
var  Tree2_img;
var grass1_Img;
var grass2_Img;
var rock_Img;
var bg2_Img;
var door_Img;
var thiefImg;
var thiefAttack_Img;
var thiefDead_Img;
var thiefIdle_Img;
var thiefthrow_Img;
var thiefGlide_Img;
var thiefSlide_Img;
var thiefJump_Img;
var thiefJumpAttack_Img;
var thiefAttack_Img;
var thiefClimb_Img;
var princess_Img;
var player_Img;
var playerWalk_Img;
var playerJumpAttack_Img;
var playerJump_Img;
var playerIdle_Img;
var playerleftWalk_Img;
var crate_img;
var TombStone2_img;
var Tree_img;
var Skeleton_img;
var deadBush_Img
var bush1_img;
var bush2_img;
var arrow_Img;
var Sign_Img;
var cavebg_Img;
var tile1_Img;
var tile2_Img;
var tile3_Img;
var tile4_Img;
var tile5_Img;
var tile6_Img;
var tile7_Img
var tile8_Img
var tile9_Img
var tile10_Img
var tile11_Img
var tile12_Img
var knife_Img;
//over images and animations

var stand1P;
var stand2P;
var stand3P;
var stand4P;
var stand5P;
var stand6P;

var stand1P2;
var stand2P2;
var stand3P2;
var stand4P2;
var stand5P2;
var stand6P2;
var stand7P2;
var stand8P2;
var stand9P2;
var stand10P2;
var stand11P2;
var stand12P2;
var stand13P2;
var stand14P2;
var stand15P2;
var stand16P2;

var stand1P3;
var stand2P3
var stand3P3
var stand4P3

var stand1P4
var stand2P4
var stand3P4

var stand1P5
var stand2P5
var stand3P5
var stand4P5
var stand5P5

var stand1P6
var stand2P6
var stand3P6
var stand4P6
var stand5P6
var stand6P6

var tomb1;
var tomb2;
var tomb3;
var tomb4;
var crate1;
var player;
var thief1;
var thief2;
var inv1T;
var inv2T;
var inv3T;
var inv4T;
//for creating arrows
var lives = 3;
var arrow
var kunaiCount = 20;
var arrowGr;
var thornGr;
var no1 = 3;
var count1 = 0;
var count11 = 0;
var no2 = 4;
var count2 = 0;
var count22 = 0;
var playerIdle2_Img;
var thorn;
playerC = 0;
var door;
// options 
var opt1;
var opt2;
var opt3;
var opt4;
var gameState2 = "q"
//2
var Stile1_Img;
var Stile2_Img;
var Stile3_Img;
var Stile4_Img;
var Stile5_Img;
var Stile6_Img;
var Stile7_Img;
var Stile8_Img;
var Stile9_Img;
var Stile10_Img;
var Stile11_Img;
var Stile12_Img;
var Stile13_Img;
var Stile14_Img;
var Stile15_Img;
var Stile16_Img;
var no3 = 3;
var count3 = 0;
var count33 = 0;
var thno = 4;
var powerCount = 6;
var thief_left
function preload() {
  //playing and non - playing characters of the game
  player_Img = loadAnimation("playerImages/Run (1).png", "playerImages/Run (2).png", "playerImages/Run (3).png", "playerImages/Run (4).png", "playerImages/Run (5).png", "playerImages/Run (6).png", "playerImages/Run (7).png", "playerImages/Run (8).png", "playerImages/Run (9).png")
  playerWalk_Img = loadAnimation("playerImages/Walk (1).png", "playerImages/Walk (2).png", "playerImages/Walk (3).png", "playerImages/Walk (4).png", "playerImages/Walk (5).png", "playerImages/Walk (6).png", "playerImages/Walk (7).png", "playerImages/Walk (8).png", "playerImages/Walk (9).png", "playerImages/Walk (10).png")
  playerleftWalk_Img = loadAnimation("playerImages/image.png", "playerImages/image (1).png", "playerImages/image (2).png", "playerImages/image (3).png", "playerImages/image (4).png", "playerImages/image (5).png", "playerImages/image (6).png", "playerImages/image (7).png", "playerImages/image (8).png", "playerImages/image (9).png")
  playerJumpAttack_Img = loadAnimation("playerImages/JumpAttack (1).png", "playerImages/JumpAttack (2).png", "playerImages/JumpAttack (3).png", "playerImages/JumpAttack (4).png", "playerImages/JumpAttack (5).png", "playerImages/JumpAttack (6).png", "playerImages/JumpAttack (7).png", "playerImages/JumpAttack (8).png", "playerImages/JumpAttack (9).png")
  playerJump_Img = loadAnimation("playerImages/Jump (1).png", "playerImages/Jump (2).png", "playerImages/Jump (3).png", "playerImages/Jump (4).png", "playerImages/Jump (5).png", "playerImages/Jump (6).png", "playerImages/Jump (7).png", "playerImages/Jump (8).png", "playerImages/Jump (9).png")
  playerIdle_Img = loadAnimation("playerImages/Idle (1).png", "playerImages/Idle (2).png", "playerImages/Idle (3).png", "playerImages/Idle (4).png", "playerImages/Idle (5).png", "playerImages/Idle (6).png", "playerImages/Idle (7).png", "playerImages/Idle (8).png", "playerImages/Idle (9).png")
  playerIdle2_Img = loadAnimation("playerImages/Dead (1).png", "playerImages/Dead (2).png", "playerImages/Dead (3).png", "playerImages/Dead (4).png", "playerImages/Dead (5).png", "playerImages/Dead (6).png", "playerImages/Dead (7).png", "playerImages/Dead (8).png", "playerImages/Dead (9).png", "playerImages/Dead (10).png", "playerImages/Dead (10).png", "playerImages/Dead (10).png", "playerImages/Dead (10).png", "playerImages/Dead (10).png")
  thiefImg = loadAnimation("thief_Images/Run__000.png", "thief_Images/Run__001.png", "thief_Images/Run__002.png", "thief_Images/Run__003.png", "thief_Images/Run__004.png", "thief_Images/Run__005.png", "thief_Images/Run__006.png", "thief_Images/Run__007.png", "thief_Images/Run__008.png", "thief_Images/Run__009.png")
  thiefDead_Img = loadAnimation("thief_Images/Dead__000.png", "thief_Images/Dead__001.png", "thief_Images/Dead__002.png", "thief_Images/Dead__003.png", "thief_Images/Dead__004.png", "thief_Images/Dead__005.png", "thief_Images/Dead__006.png", "thief_Images/Dead__007.png", "thief_Images/Dead__008.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png")
  thiefIdle_Img = loadAnimation("thief_Images/Idle__000.png", "thief_Images/Idle__001.png", "thief_Images/Idle__002.png", "thief_Images/Idle__003.png", "thief_Images/Idle__004.png", "thief_Images/Idle__005.png", "thief_Images/Idle__006.png", "thief_Images/Idle__007.png", "thief_Images/Idle__008.png", "thief_Images/Idle__009.png")
  thiefthrow_Img = loadAnimation("thief_Images/Throw__000.png", "thief_Images/Throw__001.png", "thief_Images/Throw__002.png", "thief_Images/Throw__003.png", "thief_Images/Throw__004.png", "thief_Images/Throw__005.png", "thief_Images/Throw__006.png", "thief_Images/Throw__007.png", "thief_Images/Throw__008.png", "thief_Images/Throw__009.png")
  thiefJump_Img = loadAnimation("thief_Images/Jump__000.png", "thief_Images/Jump__001.png", "thief_Images/Jump__002.png", "thief_Images/Jump__003.png", "thief_Images/Jump__004.png", "thief_Images/Jump__005.png", "thief_Images/Jump__006.png", "thief_Images/Jump__007.png", "thief_Images/Jump__008.png", "thief_Images/Jump__009.png")
  thiefJumpAttack_Img = loadAnimation("thief_Images/Jump_Attack__000.png", "thief_Images/Jump_Attack__001.png", "thief_Images/Jump_Attack__002.png", "thief_Images/Jump_Attack__003.png", "thief_Images/Jump_Attack__004.png", "thief_Images/Jump_Attack__005.png", "thief_Images/Jump_Attack__006.png", "thief_Images/Jump_Attack__007.png", "thief_Images/Jump_Attack__008.png", "thief_Images/Jump_Attack__009.png")
  thiefAttack_Img = loadAnimation("thief_Images/Attack__000.png", "thief_Images/Attack__001.png", "thief_Images/Attack__002.png", "thief_Images/Attack__003.png", "thief_Images/Attack__004.png", "thief_Images/Attack__005.png", "thief_Images/Attack__006.png", "thief_Images/Attack__007.png", "thief_Images/Attack__008.png", "thief_Images/Attack__009.png")

  princess_Img = loadAnimation("princess/tile006.png", "princess/tile005.png", "princess/tile010.png", "princess/tile011.png", "princess/tile012.png", "princess/tile013.png")
  princess_left = loadAnimation("princess/tile006.png", "princess/tile005.png")
  princess_stand = loadAnimation("princess/tile003.png")
  dancer_Img = loadAnimation("princess2/tile008.png","princess2/tile008.png","princess2/tile009.png", "princess2/tile009.png", "princess2/tile010.png","princess2/tile010.png","princess2/tile011.png", "princess2/tile011.png", "princess2/tile012.png","princess2/tile012.png")
  king_Img = loadImage("king.png");
  queen_Img = loadImage("queen.png")
  guard_Img = loadImage("guard.png")

  thief_left = loadAnimation("thief_Images/image (24).png","thief_Images/image (25).png","thief_Images/image (26).png","thief_Images/image (27).png")
  //objects of the game
  crate_img = loadImage("bg_Images/Objects/Crate.png")
  TombStone_img = loadImage("bg_Images/Objects/TombStone (1).png")
  TombStone2_img = loadImage("bg_Images/Objects/TombStone (2).png")
  Tree_img = loadImage("bg_Images/Objects/Tree.png")
  Skeleton_img = loadImage("bg_Images/Objects/Skeleton.png")
  deadBush_Img = loadImage("bg_Images/Objects/DeadBush.png")
  bush1_img = loadImage("bg_Images/Objects/Bush (1).png")
  bush2_img = loadImage("bg_Images/Objects/Bush (2).png")
  arrow_Img = loadImage("bg_Images/Objects/ArrowSign.png")
  Sign_Img = loadImage("bg_Images/Objects/Sign.png")
  tile1_Img = loadImage("bg_Images/Objects/Tile (1).png")
  tile2_Img = loadImage("bg_Images/Objects/Tile (2).png")
  tile3_Img = loadImage("bg_Images/Objects/Tile (3).png")
  tile4_Img = loadImage("bg_Images/Objects/Tile (4).png")
  tile5_Img = loadImage("bg_Images/Objects/Tile (5).png")
  tile6_Img = loadImage("bg_Images/Objects/Tile (6).png")
  tile7_Img = loadImage("bg_Images/Objects/Tile (7).png")
  tile8_Img = loadImage("bg_Images/Objects/Tile (8).png")
  tile9_Img = loadImage("bg_Images/Objects/Tile (9).png")
  tile10_Img = loadImage("bg_Images/Objects/Tile (10).png")
  tile11_Img = loadImage("bg_Images/Objects/Tile (11).png")
  tile12_Img = loadImage("bg_Images/Objects/Tile (12).png")
  tile13_Img = loadImage("bg_Images/Objects/Tile (13).png")
  tile14_Img = loadImage("bg_Images/Objects/Tile (14).png")
  tile15_Img = loadImage("bg_Images/Objects/Tile (15).png")
  tile16_Img = loadImage("bg_Images/Objects/Tile (16).png")
  //2 images
  Stile1_Img = loadImage("bg3/Tile/1.png")
  Stile2_Img = loadImage("bg3/Tile/2.png")
  Stile3_Img = loadImage("bg3/Tile/3.png")
  Stile4_Img = loadImage("bg3/Tile/4.png")
  Stile5_Img = loadImage("bg3/Tile/5.png")
  Stile6_Img = loadImage("bg3/Tile/6.png")
  Stile7_Img = loadImage("bg3/Tile/7.png")
  Stile8_Img = loadImage("bg3/Tile/8.png")
  Stile9_Img = loadImage("bg3/Tile/9.png")
  Stile10_Img = loadImage("bg3/Tile/10.png")
  Stile11_Img = loadImage("bg3/Tile/11.png")
  Stile12_Img = loadImage("bg3/Tile/12.png")
  Stile13_Img = loadImage("bg3/Tile/13.png")
  Stile14_Img = loadImage("bg3/Tile/14.png")
  Stile15_Img = loadImage("bg3/Tile/15.png")
  Stile16_Img = loadImage("bg3/Tile/16.png")
  kunai_Img = loadImage("thief_Images/Kunai.png")
  knife_Img = loadImage("img.png")
  door_Img = loadImage("door1.png")
  rock_Img = loadImage("bg3/Tile/StoneBlock.png")
  grass1_Img = loadImage("bg3/Tile/Grass (1).png")
  grass2_Img = loadImage("bg3/Tile/Grass (2).png")
  cactus1_Img = loadImage("bg3/Tile/Cactus (1).png")
  cactus2_Img = loadImage("bg3/Tile/Cactus (2).png")
  cactus3_Img = loadImage("bg3/Tile/Cactus (3).png")
  stone_Img = loadImage("bg3/Tile/Stone.png")
  Tree2_img = loadImage("bg3/Tile/Tree.png")
  cage_Img = loadImage("cage.png");
  throne_Img = loadImage("th.png");
  //backgrounds
   bg1 = loadImage("bg.jpg");
  cavebg_Img = loadImage("bg_Images/png/BG.png")
  bg2_Img = loadImage("bg3/BG.png")
  bg_end = loadImage("bg4.jpg")
  bg5 = loadImage("bg5.jpg")
  bg6 = loadImage("bg6.jpg")
  //sounds
  caveS = loadSound("sounds/cave.mp3")
}
function setup() {
  createCanvas(displayWidth - 5, displayHeight - 5)
  throne = createSprite(620,200,20,20)
throne.addImage(throne_Img)
throne.visible= false;
  player = createSprite(20, 530)
  player.addAnimation("playerImage", thiefIdle_Img)
  player.addAnimation("player2_ani", thiefImg)
  player.addAnimation("thiefattack", thiefAttack_Img)
  player.addAnimation("thiefthrow", thiefthrow_Img)
  player.addAnimation("thdead", playerIdle2_Img)
  player.addAnimation("left",thief_left)
  player.scale = 0.2;

  // thief1 cordinates
  thief1 = createSprite(411, 585)
  thief1.addAnimation("thiefleftwalk", playerleftWalk_Img)
  thief1.addAnimation("thiefrightwalk", player_Img)
  thief1.addAnimation("thiefattack", playerJumpAttack_Img)
  thief1.addAnimation("thiefrun", player_Img)
  thief1.addAnimation("thieftand", playerIdle_Img)
  thief1.addAnimation("dead", playerIdle2_Img)

  thief1.scale = 0.17
  thief1.velocityX = 3;
  inv1T = createSprite(380, 500, 10, 400)
  inv1T.visible = false;
  inv4T = createSprite(700, 500, 10, 400)
  inv4T.visible = false;

  // thief2 cordinates
  thief2 = createSprite(400, 250)
  thief2.addAnimation("thiefleftwalk", playerleftWalk_Img)
  thief2.addAnimation("thiefrightwalk", player_Img)
  thief2.addAnimation("thiefattack", playerJumpAttack_Img)
  thief2.addAnimation("thiefrun", player_Img)
  thief2.addAnimation("thieftand", playerIdle_Img)
  thief2.addAnimation("dead", playerIdle2_Img)
  //thief2.setCollider("rectangle",0,0,340,600)
  thief2.scale = 0.17
  thief2.velocityX = 3;
  //thief2.debug = true;

  inv2T = createSprite(400, 100, 10, 400)
  inv2T.visible = false;
  inv3T = createSprite(750, 100, 10, 400)
  inv3T.visible = false;

  opt1 = createSprite(280, 246, 100, 100)
  opt1.visible = false;
  opt2 = createSprite(819, 246, 100, 100)
  opt2.visible = false;
  opt3 = createSprite(280, 446, 100, 100)
  opt3.visible = false;
  opt4 = createSprite(819, 446, 100, 100)
  opt4.visible = false;

  stand1P = createSprite(50, 620)
  stand1P.addImage(tile1_Img)
  stand1P.scale = 0.8;
  stand2P = createSprite(152, 620)
  stand2P.addImage(tile2_Img)
  stand2P.scale = 0.8;
  stand3P = createSprite(252, 620)
  stand3P.addImage(tile3_Img)
  stand3P.scale = 0.8;
  stand4P = createSprite(50, 720)
  stand4P.addImage(tile4_Img)
  stand4P.scale = 0.8;
  stand5P = createSprite(152, 720)
  stand5P.addImage(tile5_Img)
  stand5P.scale = 0.8;
  stand6P = createSprite(252, 720)
  stand6P.addImage(tile6_Img)
  stand6P.scale = 0.8;

  stand1P2 = createSprite(440, 700)
  stand1P2.addImage(tile1_Img)
  stand2P2 = createSprite(568, 700)
  stand2P2.addImage(tile2_Img)
  stand3P2 = createSprite(690, 700)
  stand3P2.addImage(tile7_Img)
  stand4P2 = createSprite(805, 610)
  stand4P2.addImage(tile4_Img)
  stand4P2.scale = 0.8;
  stand5P2 = createSprite(805, 510)
  stand5P2.addImage(tile1_Img)
  stand5P2.scale = 0.8;
  stand6P2 = createSprite(805, 710)
  stand6P2.addImage(tile8_Img)
  stand6P2.scale = 0.8;
  stand7P2 = createSprite(907, 510)
  stand7P2.addImage(tile2_Img)
  stand7P2.scale = 0.8;
  stand8P2 = createSprite(907, 610)
  stand8P2.addImage(tile5_Img)
  stand8P2.scale = 0.8;
  stand9P2 = createSprite(907, 710)
  stand9P2.addImage(tile5_Img)
  stand9P2.scale = 0.8;
  stand10P2 = createSprite(1009, 510)
  stand10P2.addImage(tile3_Img)
  stand10P2.scale = 0.8;
  stand11P2 = createSprite(1109, 610)
  stand11P2.addImage(tile11_Img)
  stand11P2.scale = 0.8;
  stand12P2 = createSprite(1009, 610)
  stand12P2.addImage(tile10_Img)
  stand12P2.scale = 0.8;
  stand13P2 = createSprite(1209, 610)
  stand13P2.addImage(tile3_Img)
  stand13P2.scale = 0.8;
  stand14P2 = createSprite(1209, 710)
  stand14P2.addImage(tile6_Img)
  stand14P2.scale = 0.8;
  stand15P2 = createSprite(1009, 710)
  stand15P2.addImage(tile5_Img)
  stand15P2.scale = 0.8;
  stand16P2 = createSprite(1109, 710)
  stand16P2.addImage(tile5_Img)
  stand16P2.scale = 0.8;

  stand1P3 = createSprite(420, 350)
  stand1P3.addImage(tile14_Img)
  stand1P3.scale = 0.8;
  stand1P3.setCollider("rectangle", 0, -20, 100, 60)
  stand2P3 = createSprite(620, 350)
  stand2P3.addImage(tile15_Img)
  stand2P3.scale = 0.8;
  stand2P3.setCollider("rectangle", 0, -20, 100, 60)
  stand3P3 = createSprite(720, 350)
  stand3P3.addImage(tile16_Img)
  stand3P3.scale = 0.8;
  stand3P3.setCollider("rectangle", 0, -20, 100, 60)
  stand4P3 = createSprite(520, 350)
  stand4P3.addImage(tile15_Img)
  stand4P3.scale = 0.8;
  stand4P3.setCollider("rectangle", 0, -20, 100, 60)

  stand1P4 = createSprite(30, 230)
  stand1P4.addImage(tile15_Img)
  stand1P4.scale = 0.7;
  stand2P4 = createSprite(200, 230)
  stand2P4.addImage(tile16_Img)
  stand2P4.scale = 0.7;
  stand3P4 = createSprite(120, 230)
  stand3P4.addImage(tile15_Img)
  stand3P4.scale = 0.7;

  stand1P5 = createSprite(20, 50)
  stand1P5.addImage(tile9_Img)
  stand1P5.scale = 0.8;
  stand2P5 = createSprite(120, 50)
  stand2P5.addImage(tile9_Img)
  stand2P5.scale = 0.8;
  stand3P5 = createSprite(220, 50)
  stand3P5.addImage(tile9_Img)
  stand3P5.scale = 0.8;
  stand4P5 = createSprite(320, 50)
  stand4P5.addImage(tile9_Img)
  stand4P5.scale = 0.8;
  stand5P5 = createSprite(320, 50)
  stand5P5.addImage(tile13_Img)
  stand5P5.scale = 0.8;

  stand1P6 = createSprite(1130, 230)
  stand1P6.addImage(tile1_Img)
  stand1P6.scale = 0.7;
  stand2P6 = createSprite(1220, 230)
  stand2P6.addImage(tile2_Img)
  stand2P6.scale = 0.7;
  stand3P6 = createSprite(1310, 230)
  stand3P6.addImage(tile2_Img)
  stand3P6.scale = 0.7;
  stand4P6 = createSprite(1130, 320)
  stand4P6.addImage(tile12_Img)
  stand4P6.scale = 0.7;
  stand5P6 = createSprite(1220, 320)
  stand5P6.addImage(tile9_Img)
  stand5P6.scale = 0.7;
  stand6P6 = createSprite(1310, 320)
  stand6P6.addImage(tile9_Img)
  stand6P6.scale = 0.7;

  tomb1 = createSprite(520, 610)
  tomb1.addImage(TombStone_img)
  tomb2 = createSprite(580, 600)
  tomb2.addImage(TombStone2_img)
  tomb3 = createSprite(100, 545)
  tomb3.addImage(TombStone_img)
  tomb4 = createSprite(230, 515)
  tomb4.addImage(TombStone2_img)

  crate1 = createSprite(710, 600)
  crate1.addImage(crate_img)
  crate1.scale = 0.8;

  crateA1 = createSprite(710, 600)
  push()
  tint("red")
  crateA1.addImage(kunai_Img)
  pop()
  crateA1.scale = 0.4;
  crateA1.rotation = -90;

  crate2 = createSprite(40, 145)
  crate2.addImage(crate_img)
  crate2.scale = 0.8;

  tree = createSprite(590, 205)
  tree.addImage(Tree_img)
  tree.scale = 0.8

  deadbush = createSprite(720, 270)
  deadbush.addImage(deadBush_Img)
  deadbush.scale = 0.8

  bush1 = createSprite(520, 280)
  bush1.addImage(bush2_img)
  bush1.scale = 0.8

  skeleton1 = createSprite(430, 280)
  skeleton1.addImage(Skeleton_img)
  skeleton1.scale = 0.8

  sign = createSprite(150, 145)
  sign.addImage(Sign_Img)
  sign.scale = 0.3;

  door = createSprite(1283, 121, 20, 20)
  door.addImage(door_Img)
  door.scale = 0.4

  obstacle1 = createSprite(1100,110,10,200)
//

  door2 = createSprite(1300,250)   
  door2.addImage(door_Img);
  door2.scale = 0.4

  opt5 = createSprite(280, 246, 100, 100)
  opt5.visible = false;
  opt6 = createSprite(819, 246, 100, 100)
  opt6.visible = false;
  opt7 = createSprite(280, 446, 100, 100)
  opt7.visible = false;
  opt8 = createSprite(819, 446, 100, 100)
  opt8.visible = false;

  _2stand1P = createSprite(50, 720)
  _2stand1P.addImage(Stile1_Img)
  _2stand1P.scale = 0.8;
  _2stand1P.visible = false;

  _2stand2P = createSprite(152, 720)
  _2stand2P.addImage(Stile2_Img)
  _2stand2P.scale = 0.8;
  _2stand2P.visible = false;

  _2stand3P = createSprite(252, 720)
  _2stand3P.addImage(Stile3_Img)
  _2stand3P.scale = 0.8;
  _2stand3P.visible = false;

  _2stand4P = createSprite(450, 720)
  _2stand4P.addImage(Stile1_Img)
  _2stand4P.scale = 0.8;
  _2stand4P.visible = false;

  _2stand5P = createSprite(552, 720)
  _2stand5P.addImage(Stile7_Img)
  _2stand5P.scale = 0.8;
  _2stand5P.visible = false;

  _2stand6P = createSprite(653, 720)
  _2stand6P.addImage(Stile8_Img)
  _2stand6P.scale = 0.8;   
  _2stand6P.visible = false; 

  _2stand7P = createSprite(653, 620)
  _2stand7P.addImage(Stile1_Img)
  _2stand7P.scale = 0.8;      
  _2stand7P.visible = false;

  _2stand8P = createSprite(653, 720)
  _2stand8P.addImage(Stile8_Img)
  _2stand8P.scale = 0.8; 
  _2stand8P.visible = false;

  _2stand9P = createSprite(755, 720)
  _2stand9P.addImage(Stile6_Img)
  _2stand9P.scale = 0.8;   
  _2stand9P.visible = false;

  _2stand10P = createSprite(755, 620)
  _2stand10P.addImage(Stile3_Img)
  _2stand10P.scale = 0.8;  
  _2stand10P.visible = false;

  _2stand11P = createSprite(950, 720)
  _2stand11P.addImage(Stile1_Img)
  _2stand11P.scale = 0.8; 
  _2stand11P.visible = false;

  _2stand12P = createSprite(1050, 720)
  _2stand12P.addImage(Stile3_Img)
  _2stand12P.scale = 0.8;  
  _2stand12P.visible = false;
  
  _2stand13P = createSprite(625, 315)
  _2stand13P.addImage(Stile5_Img)
  _2stand13P.scale = 0.6;  
  _2stand13P.visible = false;

  _2stand14P = createSprite(550, 315)
  _2stand14P.addImage(Stile5_Img)
  _2stand14P.scale = 0.6;  
  _2stand14P.visible = false;
  
  _2stand15P = createSprite(475, 315)
  _2stand15P.addImage(Stile5_Img)
  _2stand15P.scale = 0.6; 
  _2stand15P.visible = false;

  _2stand16P = createSprite(400, 315)
  _2stand16P.addImage(Stile5_Img)
  _2stand16P.scale = 0.6;  
  _2stand16P.visible = false;
  
  _2stand17P = createSprite(325, 315)
  _2stand17P.addImage(Stile5_Img)
  _2stand17P.scale = 0.6;    
  _2stand17P.visible = false;

  _2stand18P = createSprite(250, 315)
  _2stand18P.addImage(Stile5_Img)
  _2stand18P.scale = 0.6;  
  _2stand18P.visible = false;

  _2stand18P2 = createSprite(175, 315)
  _2stand18P2.addImage(Stile5_Img)
  _2stand18P2.scale = 0.6;  
  _2stand18P2.visible = false;

  _2stand19P = createSprite(100, 315)
  _2stand19P.addImage(Stile5_Img)
  _2stand19P.scale = 0.6;  
  _2stand19P.visible = false;
  
  _2stand20P = createSprite(25, 315)
  _2stand20P.addImage(Stile5_Img)
  _2stand20P.scale = 0.6;    
  _2stand20P.visible = false;

  _2stand21P = createSprite(50, 240)
  _2stand21P.addImage(stone_Img)
  _2stand21P.scale = 0.8; 
  _2stand21P.visible = false;

  _2stand22P = createSprite(430, 140)
  _2stand22P.addImage(Stile14_Img)
  _2stand22P.scale = 0.6;    
  _2stand22P.visible = false;

  _2stand23P = createSprite(500, 140)
  _2stand23P.addImage(Stile16_Img)
  _2stand23P.scale = 0.6; 
  _2stand23P.visible = false;

  _2stand24P = createSprite(820, 170)
  _2stand24P.addImage(Stile15_Img)
  _2stand24P.scale = 0.6; 
  _2stand24P.visible = false;

  _2stand25P = createSprite(895, 170)
  _2stand25P.addImage(Stile15_Img)
  _2stand25P.scale = 0.6;    
  _2stand25P.visible = false;

  _2stand26P = createSprite(970, 170)
  _2stand26P.addImage(Stile15_Img)
  _2stand26P.scale = 0.6;
  _2stand26P.visible = false;

  _2stand27P = createSprite(1045, 170)
  _2stand27P.addImage(Stile15_Img)
  _2stand27P.scale = 0.6;
  _2stand27P.visible = false;

  _2stand28P = createSprite(1120, 170)
  _2stand28P.addImage(Stile16_Img)
  _2stand28P.scale = 0.6;
  _2stand28P.visible = false;

//  stand1 = createSprite(930,485,15,140)
//  stand2 = createSprite(1082,540,15,250)
//  stand3 = createSprite(1050,580,60,10)
//  stand4 = createSprite(960,480,60,10)
//  stand5 = createSprite(880,420,90,10)

  rock1 = createSprite(835,425)
  rock1.scale = 0.5
  rock1.addImage(rock_Img)
  rock1.visible = false;

  rock2 = createSprite(785,380)
  rock2.scale = 0.5
  rock2.addImage(rock_Img)
  rock2.visible = false;

  rock3 = createSprite(735,340)
  rock3.scale = 0.5
  rock3.addImage(rock_Img)
  rock3.visible = false;

  rock4 = createSprite(685,300)
  rock4.scale = 0.5
  rock4.addImage(rock_Img)
  rock4.visible = false;

  rock5 = createSprite(160,130)
  rock5.scale = 0.5
  rock5.addImage(rock_Img)
  rock5.visible = false;

  rock6 = createSprite(210,130)
  rock6.scale = 0.5
  rock6.addImage(rock_Img)
  rock6.visible = false;

  rock7 = createSprite(260,130)
  rock7.scale = 0.5
  rock7.addImage(rock_Img)
  rock7.visible = false;

  rock8 = createSprite(560,130)
  rock8.scale = 0.5
  rock8.addImage(rock_Img)
  rock8.visible = false;

  rock9 = createSprite(610,130)
  rock9.scale = 0.5
  rock9.addImage(rock_Img)
  rock9.visible = false;

  rock10 = createSprite(610,130)
  rock10.scale = 0.5
  rock10.addImage(rock_Img)
  rock10.visible = false;

  rock11 = createSprite(660,130)
  rock11.scale = 0.5
  rock11.addImage(rock_Img)
  rock11.visible = false;

  rock12 = createSprite(710,130)
  rock12.scale = 0.5
  rock12.addImage(rock_Img)
  rock12.visible = false;

  rock13 = createSprite(760,130)
  rock13.scale = 0.5
  rock13.addImage(rock_Img)
  rock13.visible = false;
//
  rock14 = createSprite(1090,390)
  rock14.scale = 0.5
  rock14.addImage(rock_Img)
  rock14.visible = false;

  rock15 = createSprite(1090,340)
  rock15.scale = 0.5
  rock15.addImage(rock_Img)
  rock15.visible = false;

  rock16 = createSprite(1090,290)
  rock16.scale = 0.5
  rock16.addImage(rock_Img)
  rock16.visible = false;

  rock17 = createSprite(1090,240)
  rock17.scale = 0.5
  rock17.addImage(rock_Img)
  rock17.visible = false;

  rock18 = createSprite(1090,440)
  rock18.scale = 0.5
  rock18.addImage(rock_Img)
  rock18.visible = false;

  rock19 = createSprite(1090,490)
  rock19.scale = 0.5
  rock19.addImage(rock_Img)
  rock19.visible = false;

  rock20 = createSprite(1090,540)
  rock20.scale = 0.5
  rock20.addImage(rock_Img)
  rock20.visible = false;

  rock21 = createSprite(1090,590)
  rock21.scale = 0.5
  rock21.addImage(rock_Img)
  rock21.visible = false;

  rock22 = createSprite(1090,640)
  rock22.scale = 0.5
  rock22.addImage(rock_Img)
  rock22.visible = false;
    // side rocks 
 
  rock23 = createSprite(1040,570)
  rock23.scale = 0.5
  rock23.addImage(rock_Img)
  rock23.visible = false;

  rock24 = createSprite(935,425)
  rock24.scale = 0.5
  rock24.addImage(rock_Img)
  rock24.visible = false;

  rock30 = createSprite(1140,340)
  rock30.scale = 0.5
  rock30.addImage(rock_Img)
  rock30.visible = false;

  rock26 = createSprite(1190,340)
  rock26.scale = 0.5
  rock26.addImage(rock_Img)
  rock26.visible = false;

  rock27 = createSprite(1240,340)
  rock27.scale = 0.5
  rock27.addImage(rock_Img)
  rock27.visible = false;

  rock28 = createSprite(1290,340)
  rock28.scale = 0.5
  rock28.addImage(rock_Img)
  rock28.visible = false;

  rock29 = createSprite(1340,340)
  rock29.scale = 0.5
  rock29.addImage(rock_Img)
  rock29.visible = false;

//side rocks over 
  rock25 = createSprite(885,425)
  rock25.scale = 0.5
  rock25.addImage(rock_Img)
  rock25.visible = false;

  grass1 = createSprite(500,262)
  grass1.addImage(grass1_Img)
  grass1.scale = 0.7
  grass1.visible = false;

  grass2 = createSprite(200,260)
  grass2.addImage(grass2_Img)
  grass2.scale = 0.7
  grass2.visible = false;

  arrowGr = createGroup();
  thornGr = createGroup();
// here starts the second stage of the game it is having a sandy background
player2 = createSprite(20, 530)
player2.addAnimation("playerImage", thiefIdle_Img)
player2.addAnimation("player2_ani", thiefImg)
player2.addAnimation("thiefattack", thiefAttack_Img)
player2.addAnimation("thiefthrow", thiefthrow_Img)
player2.addAnimation("thdead", playerIdle2_Img)
player2.addAnimation("left",thief_left)
player2.scale = 0.2;
player2.visible = false;

_2thief1 = createSprite(411, 585)
_2thief1.addAnimation("thiefleftwalk", playerleftWalk_Img)
_2thief1.addAnimation("thiefrightwalk", player_Img)
_2thief1.addAnimation("thiefattack", playerJumpAttack_Img)
_2thief1.addAnimation("thiefrun", player_Img)
_2thief1.addAnimation("thieftand", playerIdle_Img)
_2thief1.addAnimation("dead", playerIdle2_Img)

_2thief1.scale = 0.17
_2thief1.velocityX = -3;
inv5T = createSprite(380, 500, 10, 400)
inv6T = createSprite(600, 660, 10, 100)
_2thief1.visible = false;
inv5T.visible = false;
inv6T.visible = false;

_2thief2 = createSprite(390, 210)
_2thief2.addAnimation("thiefleftwalk", playerleftWalk_Img)
_2thief2.addAnimation("thiefrightwalk", player_Img)
_2thief2.addAnimation("thiefattack", playerJumpAttack_Img)
_2thief2.addAnimation("thiefrun", player_Img)
_2thief2.addAnimation("thieftand", playerIdle_Img)
_2thief2.addAnimation("dead", playerIdle2_Img)
_2thief2.scale = 0.17
_2thief2.velocityX = -3;
inv7T = createSprite(120, 230, 10, 100)
inv8T = createSprite(400, 230, 10, 100)
_2thief2.visible = false;
inv7T.visible = false;
inv8T.visible = false;

//3 
princess = createSprite(850,560,20,20)
princess.addAnimation("princess",princess_Img);
princess.addAnimation("left",princess_left);
princess.addAnimation("stand",princess_stand)
princess.visible = false;
princess.scale = 2.5;
//player2.scale = 0.3;

inv_road = createSprite(600,700,1400,20)
inv_road.visible = false;
door2.visible = false;
cage = createSprite(900,580)
cage.addImage(cage_Img)
cage.visible = false;

dancer = createSprite(200,200,10,10)
dancer.addAnimation("dace",dancer_Img)
dancer.scale = 2.5


dancer2 = createSprite(1000,200,10,10)
dancer2.addAnimation("dace",dancer_Img)
dancer2.scale = 2.5

dancer3 = createSprite(200,300,10,10)
dancer3.addAnimation("dace",dancer_Img)
dancer3.scale = 2.5


dancer4 = createSprite(1000,300,10,10)
dancer4.addAnimation("dace",dancer_Img)
dancer4.scale = 2.5


dancer5 = createSprite(200,400,10,10)
dancer5.addAnimation("dace",dancer_Img)
dancer5.scale = 2.5


dancer6 = createSprite(1000,400,10,10)
dancer6.addAnimation("dace",dancer_Img)
dancer6.scale = 2.5


dancer7 = createSprite(200,500,10,10)
dancer7.addAnimation("dace",dancer_Img)
dancer7.scale = 2.5


dancer8 = createSprite(1000,500,10,10)
dancer8.addAnimation("dace",dancer_Img)
dancer8.scale = 2.5

dancer.visible = false;
dancer2.visible = false;
dancer3.visible = false;
dancer4.visible = false;
dancer5.visible = false;
dancer6.visible = false;
dancer7.visible = false;
dancer8.visible = false;
king = createSprite(400,300)
king.addImage(king_Img)
king.scale = 0.8

queen = createSprite(800,300)
queen.addImage(queen_Img)
queen.scale = 0.8
king.visible = false;
queen.visible = false;

border1 = createSprite(-10,350,10,1000)
border2 = createSprite(600,-10,1500,10)
border3 = createSprite(1370,350,10,1000)
}
function draw() {

  if (gameState === "start") {
    background(bg1)
    fill("red")
    textSize(70)
    text("WELCOME TO MELINDRO KINGDOM",100,100)
    fill("pink")
    textSize(35)
    textFont("Chiller")

    text("I am 'Lucidro 'the king of the great MELINDRO KINGDOM , My daughter's name is Princess Alexandra ",200,200)
    text("The pyros clan of theives has kidnapped her . Please help me to find her . She is our precious jewel ",200,250)
    text("If you are ready to help us , you will be gifted with the kingdom and the princess",300,300)
    fill("yellow")
    text("INSTRUCTIONS",150,350)
    text("Use the arrow keys to move the player ",100,400)
    text("Press space key to jump ",100,450)
    text("Press 't' key  to  fire Arrows against theives ",100,500)
    text("Kill the theives in each level to go to the next level",100,550)
    text("You will be having 3 lives and 10 arrows",100,600)
    textSize(40)
    fill("white")
    text("Press space to play",800,500)
    if (keyDown("space")) {
      gameState = "play"
      thief1.x = 411;
      thief2.x = 400;
    }
  }
  if (gameState === "play") {
    background(cavebg_Img)
    caveS.play()

    player.collide(border1)
    player.collide(border2)
    player.collide(border3)

    console.log(bush1.depth)
    player.collide(obstacle1);
    player.collide(stand1P)
    player.collide(stand2P)
    player.collide(stand3P)
    player.collide(stand4P)
    player.collide(stand5P)
    player.collide(stand6P)
    player.collide(stand1P2)
    player.collide(stand2P2)
    player.collide(stand3P2)
    player.collide(stand4P2)
    player.collide(stand5P2)
    player.collide(stand6P2)
    player.collide(stand7P2)
    player.collide(stand8P2)
    player.collide(stand9P2)
    player.collide(stand10P2)
    player.collide(stand11P2)
    player.collide(stand12P2)
    player.collide(stand13P2)
    player.collide(stand14P2)
    player.collide(stand15P2)
    player.collide(stand16P2)
    player.collide(stand1P3)
    player.collide(stand2P3)
    player.collide(stand3P3)
    player.collide(stand4P3)
    player.collide(stand1P4)
    player.collide(stand2P4)
    player.collide(stand3P4)
    player.collide(stand1P5)
    player.collide(stand2P5)
    player.collide(stand3P5)
    player.collide(stand1P5)
    player.collide(stand2P5)
    player.collide(stand1P6)
    player.collide(stand2P6)
    player.collide(stand3P6)
    player.collide(stand4P6)
    player.collide(stand5P6)
    player.collide(stand6P6)

    thief1.collide(stand1P)
    thief1.collide(stand2P)
    thief1.collide(stand3P)
    thief1.collide(stand4P)
    thief1.collide(stand5P)
    thief1.collide(stand6P)
    thief1.collide(stand1P2)
    thief1.collide(stand2P2)
    thief1.collide(stand3P2)
    thief1.collide(stand4P2)
    thief1.collide(stand5P2)
    thief1.collide(stand6P2)
    thief1.collide(stand7P2)
    thief1.collide(stand8P2)
    thief1.collide(stand9P2)
    thief1.collide(stand10P2)
    thief1.collide(stand11P2)
    thief1.collide(stand12P2)
    thief1.collide(stand13P2)
    thief1.collide(stand14P2)
    thief1.collide(stand15P2)
    thief1.collide(stand16P2)
    thief1.collide(stand1P3)
    thief1.collide(stand2P3)
    thief1.collide(stand3P3)
    thief1.collide(stand4P3)
    thief1.collide(stand1P4)
    thief1.collide(stand2P4)
    thief1.collide(stand3P4)
    thief1.collide(stand1P5)
    thief1.collide(stand2P5)
    thief1.collide(stand3P5)
    thief1.collide(stand1P5)
    thief1.collide(stand2P5)

    thief2.collide(stand1P)
    thief2.collide(stand2P)
    thief2.collide(stand3P)
    thief2.collide(stand4P)
    thief2.collide(stand5P)
    thief2.collide(stand6P)
    thief2.collide(stand1P2)
    thief2.collide(stand2P2)
    thief2.collide(stand3P2)
    thief2.collide(stand4P2)
    thief2.collide(stand5P2)
    thief2.collide(stand6P2)
    thief2.collide(stand7P2)
    thief2.collide(stand8P2)
    thief2.collide(stand9P2)
    thief2.collide(stand10P2)
    thief2.collide(stand11P2)
    thief2.collide(stand12P2)
    thief2.collide(stand13P2)
    thief2.collide(stand14P2)
    thief2.collide(stand15P2)
    thief2.collide(stand16P2)
    thief2.collide(stand1P3)
    thief2.collide(stand2P3)
    thief2.collide(stand3P3)
    thief2.collide(stand4P3)
    thief2.collide(stand1P4)
    thief2.collide(stand2P4)
    thief2.collide(stand3P4)
    thief2.collide(stand1P5)
    thief2.collide(stand2P5)
    thief2.collide(stand3P5)
    thief2.collide(stand1P5)
    thief2.collide(stand2P5)

    if(player.y>770){
      gameState = "end"
    }
    // thief1 cordinates
    if (thief1.isTouching(inv4T) && thief1.velocityX != 0) {
      thief1.velocityX = -3;
    }
    if (thief1.isTouching(inv1T) && thief1.velocityX != 0) {
      thief1.velocityX = 3;
    }
    if (thief1.velocityX < 0) {
      thief1.changeAnimation("thiefleftwalk", playerleftWalk_Img)
    }
    if (thief1.velocityX > 0) {
      thief1.changeAnimation("thiefrightwalk", player_Img)
    }
    if (arrowGr.isTouching(thief1) && no1 === 3) {
      thief1.velocityY = -30;
      no1 = no1 - 1;
      count1++
    }
    if (no1 === 2) {
      count1++

    }
    fight(thief1, -8, 60)

    if (thornGr.isTouching(player) && lives > 0) {
      lives = lives - 1
      thornGr.destroyEach()
      player.x = 25
    }
    console.log("no1   :    " + no1)
    if (arrowGr.isTouching(thief1) && no1 === 2 && count1 > 20) {
      count1++
      thief1.changeAnimation("dead", playerIdle2_Img)
      thief1.velocityX = 0;
    }
    if (thief1.velocityX == 0) {
      count11++
    }
    console.log("count1" + count1)
    if (count11 === 50) {
      thief1.destroy()
      thno=thno-1;
    }
    //thief2 cordinates
    if (thief2.isTouching(inv2T)) {
      thief2.velocityX = 3;
    }
    if (thief2.isTouching(inv3T)) {
      thief2.velocityX = -3;
    }
    if (thief2.velocityX < 0) {
      thief2.changeAnimation("thiefleftwalk", playerleftWalk_Img)
    }
    if (thief2.velocityX > 0) {
      thief2.changeAnimation("thiefrightwalk", player_Img)
    }
    if (arrowGr.isTouching(thief2) && no2 == 4) {
      thief2.velocityY = -20;
      no2 = no2 - 1;
      count2++
    }

    if (no2 === 3) {
      count2++

    }
    fight(thief2, -8, 200)


    if (arrowGr.isTouching(thief2) && no2 === 3 && count2 > 20) {
      count2++
      thief2.changeAnimation("dead", playerIdle2_Img)
      thief2.velocityX = 0;
    }
    if (thief2.velocityX == 0) {
      count22++
    }
    console.log("count1" + count1)
    if (count22 === 50) {
      thief2.destroy()
      thno=thno-1;
    }
    //over

    player.velocityX = 0;
    player.changeAnimation("playerImage", playerIdle_Img)
    if (keyDown(RIGHT_ARROW)) {
      arrowState = "right"
      player.velocityX = 4
      player.changeAnimation("player2_ani", thiefImg)
    }
    if (keyDown(LEFT_ARROW)) {
      arrowState = "left"
      player.velocityX = -4
      player.changeAnimation("left",thief_left)
    }
    player.velocityY = player.velocityY + 0.5
    if (keyWentDown("space")) {
      player.velocityY = -10;

    }
    if (keyDown("f")) {
      player.changeAnimation("thiefattack", thiefAttack_Img)
    }


    thief1.velocityY = thief1.velocityY + 0.5
    thief2.velocityY = thief2.velocityY + 0.5

    drawSprites()
    textSize(15)
    fill("red")
    textFont("Chiller")
    text("Arrows left   :      " + kunaiCount, 1100, 140)
    text("Lives left  :   " + lives, 1100, 100)

    fill("black")

    if (keyWentDown("t")) {
      createArrow()
      player.changeAnimation("thiefthrow",thiefthrow_Img)
    }
    if (lives === 0) {
      player.changeAnimation("thdead",playerIdle2_Img)
      gameState = "end";
    }
    textSize(18)
    if(thno ==2){
      obstacle1.velocityY = -3;
    }
    if (player.isTouching(door)) {
      gameState2 = "q1"
    }
    if (gameState2 === "q1") {
      player.x = 1188;
      player.y = 121;
      textSize(35)
      fill("white")
      textFont("Chiller")
      text("1 . Maria",opt1.x-10,opt1.y)
      text("2 .Margret",opt2.x-10,opt2.y)
      text("3 .Alexandra",opt3.x-10,opt3.y)
      text("4 .Lusy",opt4.x+10,opt4.y)
      opt1.visible = false;
      opt2.visible = false;
      opt3.visible = false;
      opt4.visible = false;
      textSize("50")
      textStyle(BOLD)
      fill("red")
      textFont("Chiller")
      text("WHAT IS THE NAME OF THE PRINCESS OF THE GREAT MELINDRO KINGDOM ? ", 300, 200)
      if (mousePressedOver(opt1))
        gameState = "end"

      if (mousePressedOver(opt2)) {
        gameState = "end"
      }
      if (mousePressedOver(opt3)) {
        gameState = "play2"
        _2thief1.x = 411;
        _2thief1.y = 585;
        _2thief2.x = 390;
        _2thief2.y = 210;

      }
      if (mousePressedOver(opt4)) {
        gameState = "end"
      }
    }
  }

  fill("white")

  if (gameState === "play2") {

player2.collide(border1)
player2.collide(border2)
player2.collide(border3)
    background(bg2_Img)
    player2.visible = true
    _2thief1.visible = true;
    stand1P.destroy();
    stand2P.destroy();
    stand3P.destroy();
    stand4P.destroy();
    stand5P.destroy();
    stand6P.destroy();
    stand1P2.destroy();
    stand2P2.destroy();
    stand3P2.destroy();
    stand4P2.destroy();
    stand5P2.destroy();
    stand6P2.destroy();
    stand7P2.destroy();
    stand8P2.destroy();
    stand9P2.destroy();
    stand10P2.destroy();
    stand11P2.destroy();
    stand12P2.destroy();
    stand13P2.destroy();
    stand14P2.destroy();
    stand15P2.destroy();
    stand16P2.destroy();
    stand1P3.destroy();
    stand2P3.destroy();
    stand3P3.destroy();
    stand4P3.destroy();
    stand1P4.destroy();
    stand2P4.destroy();
    stand3P4.destroy();
    stand1P5.destroy();
    stand2P5.destroy();
    stand3P5.destroy();
    stand4P5.destroy();
    stand5P5.destroy();
    stand1P6.destroy();
    stand2P6.destroy();
    stand3P6.destroy();
    stand4P6.destroy();
    stand5P6.destroy();
    stand6P6.destroy();
    tomb1.destroy();
    tomb2.destroy();
    tomb3.destroy();
    tomb4.destroy();
    crate1.destroy();
    crate2.destroy();
    player.destroy();
    thief1.destroy();
    thief2.destroy();
    inv1T.destroy();
    inv2T.destroy(); 
    inv3T.destroy();
    inv4T.destroy();
    opt1.destroy();
    opt2.destroy();
    opt3.destroy();
    opt4.destroy();
    door.destroy();
    bush1.destroy();
    deadbush.destroy();
    crateA1.destroy();
    tree.destroy();
    sign.destroy();
    skeleton1.destroy();


_2thief2.visible = true;
 inv7T.visible = false;
 inv8T.visible = false;
_2stand1P.visible =  true;
_2stand2P.visible =  true;
_2stand3P.visible =  true;
_2stand4P.visible =  true;
_2stand5P.visible =  true;
_2stand6P.visible =  true;
_2stand7P.visible =  true;
_2stand8P.visible =  true;
_2stand9P.visible =  true;
_2stand10P.visible =  true;
_2stand11P.visible = true
_2stand12P.visible = true
_2stand13P.visible = true
_2stand14P.visible = true
_2stand15P.visible = true
_2stand16P.visible = true
_2stand17P.visible = true
_2stand18P.visible = true
_2stand18P2.visible = true
_2stand19P.visible = true
_2stand20P.visible = true
_2stand21P.visible =  true;
_2stand22P.visible =  true;
_2stand23P.visible =  true;
_2stand24P.visible =  true;
_2stand25P.visible =  true;
_2stand26P.visible =  true;
_2stand27P.visible =  true;
_2stand28P.visible =  true;
rock1.visible = true;
rock2.visible = true;
rock3.visible = true;
rock4.visible = true;
rock5.visible = true;
rock6.visible = true;
rock7.visible = true;
rock8.visible = true;
rock9.visible = true;
rock10.visible = true;
rock11.visible = true;
rock12.visible = true;
rock13.visible = true;
rock14.visible = true;
rock15.visible = true;
rock16.visible = true;
rock17.visible = true;
rock18.visible = true;
rock19.visible = true;
rock20.visible = true;
rock21.visible = true;
rock22.visible = true;
rock23.visible = true;
rock24.visible = true;
rock25.visible = true;
rock26.visible = true;
rock27.visible = true;
rock28.visible = true;
rock29.visible = true;
rock30.visible = true;
grass1.visible = true;
grass2.visible = true;

player2.collide(_2stand1P)
player2.collide(_2stand2P)
player2.collide(_2stand3P)
player2.collide(_2stand4P)
player2.collide(_2stand5P)
player2.collide(_2stand6P)
player2.collide(_2stand7P)
player2.collide(_2stand8P)
player2.collide(_2stand9P)
player2.collide(_2stand10P)
player2.collide(_2stand11P)
player2.collide(_2stand12P) 
player2.collide(_2stand13P)
player2.collide(_2stand14P)
player2.collide(_2stand15P)
player2.collide(_2stand16P)
player2.collide(_2stand17P)
player2.collide(_2stand18P)
player2.collide(_2stand18P)
player2.collide(_2stand19P)
player2.collide(_2stand20P)
player2.collide(_2stand21P)
player2.collide(_2stand22P)
player2.collide(_2stand23P)
player2.collide(_2stand24P)
player2.collide(_2stand25P)
player2.collide(_2stand26P)
player2.collide(_2stand27P)
player2.collide(_2stand28P)

player2.collide(rock1)
player2.collide(rock2)
player2.collide(rock3)
player2.collide(rock4)
player2.collide(rock5)
player2.collide(rock6)
player2.collide(rock7)
player2.collide(rock8)
player2.collide(rock9)
player2.collide(rock10)
player2.collide(rock11)
player2.collide(rock12)
player2.collide(rock13)
player2.collide(rock14)
player2.collide(rock15)
player2.collide(rock16)
player2.collide(rock17)
player2.collide(rock18)
player2.collide(rock19)
player2.collide(rock20)
player2.collide(rock21)
player2.collide(rock22)
player2.collide(rock23)
player2.collide(rock24)
player2.collide(rock25)
player2.collide(rock26)
player2.collide(rock27)
player2.collide(rock28)
player2.collide(rock29)
player2.collide(rock30)


_2thief1.collide(_2stand1P)
_2thief1.collide(_2stand2P)
_2thief1.collide(_2stand3P)
_2thief1.collide(_2stand4P)
_2thief1.collide(_2stand5P)
_2thief1.collide(_2stand6P)
_2thief1.collide(_2stand7P)
_2thief1.collide(_2stand8P)
_2thief1.collide(_2stand9P)
_2thief1.collide(_2stand10P)
_2thief1.collide(_2stand11P)
_2thief1.collide(_2stand12P) 
_2thief1.collide(_2stand13P)
_2thief1.collide(_2stand14P)
_2thief1.collide(_2stand15P)
_2thief1.collide(_2stand16P)
_2thief1.collide(_2stand17P)
_2thief1.collide(_2stand18P)
_2thief1.collide(_2stand18P)
_2thief1.collide(_2stand19P)
_2thief1.collide(_2stand20P)
_2thief1.collide(_2stand21P)
_2thief1.collide(_2stand22P)
_2thief1.collide(_2stand23P)
_2thief1.collide(_2stand24P)
_2thief1.collide(_2stand25P)
_2thief1.collide(_2stand26P)
_2thief1.collide(_2stand27P)
_2thief1.collide(_2stand28P)

_2thief1.collide(rock1)
_2thief1.collide(rock2)
_2thief1.collide(rock3)
_2thief1.collide(rock4)
_2thief1.collide(rock5)
_2thief1.collide(rock6)
_2thief1.collide(rock7)
_2thief1.collide(rock8)
_2thief1.collide(rock9)
_2thief1.collide(rock10)
_2thief1.collide(rock11)
_2thief1.collide(rock12)
_2thief1.collide(rock13)
_2thief1.collide(rock14)
_2thief1.collide(rock15)
_2thief1.collide(rock16)
_2thief1.collide(rock17)
_2thief1.collide(rock18)
_2thief1.collide(rock19)
_2thief1.collide(rock20)
_2thief1.collide(rock21)
_2thief1.collide(rock22)
_2thief1.collide(rock23)
_2thief1.collide(rock24)
_2thief1.collide(rock25)


if(player2.y>770){
  gameState = "end"
}



fight(_2thief1,-8,40)

player2.velocityY = player2.velocityY+0.5;
_2thief1.velocityY=_2thief1.velocityY+0.5;
player2.velocityX = 0;
player2.changeAnimation("playerImage", playerIdle_Img)
if (keyDown(RIGHT_ARROW)) {
  arrowState = "right"
  player2.velocityX  = 4
  player2.changeAnimation("player2_ani", thiefImg)
}
if (keyDown(LEFT_ARROW)) {
  arrowState = "left"
  player2.changeAnimation("left",thief_left)

  player2.velocityX = -4
}
if (keyWentDown("space")) {
  player2.velocityY = -10;

}
if(keyWentDown("t")){
  createArrow2();
}
//th1 cordinates
if (_2thief1.isTouching(inv5T)) {
  _2thief1.velocityX = 3;
}
if (_2thief1.isTouching(inv6T)) {
  _2thief1.velocityX = -3;
}
if (_2thief1.velocityX < 0) {
  _2thief1.changeAnimation("thiefleftwalk", playerleftWalk_Img)
}
if (_2thief1.velocityX > 0) {
  _2thief1.changeAnimation("thiefrightwalk", player_Img)
}
if (arrowGr.isTouching(_2thief1) && no3 === 3) {
  _2thief1.velocityY = -30;
  no3 = no3 - 1;
  count3++
}
if (no3 === 2) {
  count3++

}
if(arrowGr.isTouching(_2thief2)){
  _2thief2.destroy();
}
if (thornGr.isTouching(player2) && lives > 0) {
  lives = lives - 1
  thornGr.destroyEach()
  player2.x = 25
}
if (arrowGr.isTouching(_2thief1) && no3 === 2 && count3 > 20) {
  _2thief1.changeAnimation("dead", playerIdle2_Img)
  _2thief1.velocityX = 0;
 // no3 = no3-1;
  count33++

}
door2.visible = true;
if (_2thief1.velocityX == 0) {
  count33++
}
if (count33 === 50) {
  _2thief1.destroy()
}
//th 2
if (_2thief2.isTouching(inv7T)) {
  _2thief2.velocityX = 3;
}
if (_2thief2.isTouching(inv8T)) {
  _2thief2.velocityX = -3;
}
if (_2thief2.velocityX < 0) {
  _2thief2.changeAnimation("thiefleftwalk", playerleftWalk_Img)
}
if (_2thief2.velocityX > 0) {
  _2thief2.changeAnimation("thiefrightwalk", player_Img)
}

//_2thief2.velocityY=_2thief2.velocityY+0.5;
fight(_2thief2,-8,50)
drawSprites()
textSize(20)
fill("red")
textFont("Chiller")
      text(" Arrows left   :   "+kunaiCount,1100,100)
      text(" Lives left   :   "+lives,1100,200)


if(lives == 0){
  player2.changeAnimation("thdead", playerIdle2_Img)
  gameState = "end"
}

if (player2.isTouching(door2)) {
  gameState2 = "q2"
}
if (gameState2 === "q2") {
  player2.x = 1188;
  player2.y = 121;
  opt5.visible = false;
  opt6.visible = false;
  opt7.visible = false;
  opt8.visible = false;
   fill("red")
   textFont("Chiller")
   textStyle(BOLD)
   textSize(30)

  text("1 . Legos Clan",opt5.x-20,opt5.y)
  text("2 . Pyros Clan",opt6.x-20,opt6.y)
  text("3 .Theives Clan",opt7.x-20,opt7.y)
  text("4 .BLack Mafia",opt8.x+20,opt8.y)

  text("Which clan of theives kidnapped the princess ", 200, 200)
  if (mousePressedOver(opt5))
    gameState = "end"

  if (mousePressedOver(opt6)) {
    gameState = "play3"
    opt5.visible = false;
    opt6.visible = false;
    opt7.visible = false;
    opt8.visible = false;
    player2.x = 60;
  }
  if (mousePressedOver(opt7)) {
    gameState = "end"

  }
  if (mousePressedOver(opt8)) {
    gameState = "end"
  }
}

  }
if(gameState === "play3"){
  background(bg6)
  drawSprites()
  stand1P.destroy();
  stand2P.destroy();
  stand3P.destroy();
  stand4P.destroy();
  stand5P.destroy();
  stand6P.destroy();
  stand1P2.destroy();
  stand2P2.destroy();
  stand3P2.destroy();
  stand4P2.destroy();
  stand5P2.destroy();
  stand6P2.destroy();
  stand7P2.destroy();
  stand8P2.destroy();
  stand9P2.destroy();
  stand10P2.destroy();
  stand11P2.destroy();
  stand12P2.destroy();
  stand13P2.destroy();
  stand14P2.destroy();
  stand15P2.destroy();
  stand16P2.destroy();
  stand1P3.destroy();
  stand2P3.destroy();
  stand3P3.destroy();
  stand4P3.destroy();
  stand1P4.destroy();
  stand2P4.destroy();
  stand3P4.destroy();
  stand1P5.destroy();
  stand2P5.destroy();
  stand3P5.destroy();
  stand4P5.destroy();
  stand5P5.destroy();
  stand1P6.destroy();
  stand2P6.destroy();
  stand3P6.destroy();
  stand4P6.destroy();
  stand5P6.destroy();
  stand6P6.destroy();
  tomb1.destroy();
  tomb2.destroy();
  tomb3.destroy();
  tomb4.destroy();
  crate1.destroy();
  crate2.destroy();
  player.destroy();
  thief1.destroy();
  thief2.destroy();
  inv1T.destroy();
  inv2T.destroy(); 
  inv3T.destroy();
  inv4T.destroy();
  opt1.destroy();
  opt2.destroy();
  opt3.destroy();
  opt4.destroy();
  door.destroy();
  bush1.destroy();
  deadbush.destroy();
  crateA1.destroy();
  tree.destroy();
  sign.destroy();
  skeleton1.destroy();
  _2thief2.destroy()
  inv7T.destroy()
  inv8T.destroy()
 _2stand1P.destroy()
 _2stand2P.destroy()
 _2stand3P.destroy()
 _2stand4P.destroy()
 _2stand5P.destroy()
 _2stand6P.destroy()
 _2stand7P.destroy()
 _2stand8P.destroy()
 _2stand9P.destroy()
 _2stand10P.destroy()
 _2stand11P.destroy()
 _2stand12P.destroy()
 _2stand13P.destroy()
 _2stand14P.destroy()
 _2stand15P.destroy()
 _2stand16P.destroy()
 _2stand17P.destroy()
 _2stand18P.destroy()
 _2stand18P2.destroy()
 _2stand19P.destroy()
 _2stand20P.destroy()
 _2stand21P.destroy()
 _2stand22P.destroy()
 _2stand23P.destroy()
 _2stand24P.destroy()
 _2stand25P.destroy()
 _2stand26P.destroy()
 _2stand27P.destroy()
 _2stand28P.destroy()
 rock1.destroy()
 rock2.destroy()
 rock3.destroy()
 rock4.destroy()
 rock5.destroy()
 rock6.destroy()
 rock7.destroy()
 rock8.destroy()
 rock9.destroy()
 rock10.destroy()
 rock11.destroy()
 rock12.destroy()
 rock13.destroy()
 rock14.destroy()
 rock15.destroy()
 rock16.destroy()
 rock17.destroy()
 rock18.destroy()
 rock19.destroy()
 rock20.destroy()
 rock21.destroy()
 rock22.destroy()
 rock23.destroy()
 rock24.destroy()
 rock25.destroy()
 rock26.destroy()
 rock27.destroy()
 rock28.destroy()
 rock29.destroy()
 rock30.destroy()
 grass1.destroy()
 grass2.destroy()
door2.destroy();
obstacle1.destroy();
player2.visible = true;
cage.visible = true;
player2.scale = 0.3
start++;
if(start===80){
  princess.velocityX = -2
  player2.velocityX = 2;
  princess.changeAnimation("left",princess_left)
  princess.velocityY = 3
}
if(keyWentDown("t")){
  createArrow2()
}
player2.collide(inv_road)
princess.collide(inv_road)
player2.velocityY = player2.velocityY+0.5
if(princess.isTouching(player2)){
   princess.pause();
   player2.pause();
   princess.velocityX = 0;
   player2.velocityX = 0;

}
princess.visible = true;
if(start ===400){
  gameState="marriage";
  player2.x =-280;
  princess.x = 1500;

}
textSize(25)
fill("green")
textFont("Chiller")

text("Congrats . You saved the caged princess . Now the kingdom and the princess belongs to you",100,100)
}
console.log(start)

if(gameState === "marriage"){
  background("white")
  drawSprites();
  king.visible = true;
queen.visible = true;
  throne.scale = 1.5;
  cage.destroy();
  player2.play();
  princess.play();
  player2.velocityX = 3;
  princess.velocityX = -3;
  player2.velocityY = 0;
  princess.velocityY = 0;
  player2.collide(inv_road)
  princess.collide(inv_road)
  throne.visible = true;
  if(princess.isTouching(player2)){
    princess.pause();
    player2.pause();
    princess.velocityX = 0;
    player2.velocityX = 0;
    player2.velocityY = -5
    princess.velocityY = -5

 }
 if(player2.y<throne.y-20){
   player2.velocityY = 0;
   princess.velocityY = 0;
   princess.changeAnimation("stand",princess_stand)
 }
 dancer.visible = true;
 dancer2.visible = true;
 dancer3.visible = true;
 dancer4.visible = true; 
 dancer5.visible = true;
 dancer6.visible = true; 
 dancer7.visible = true;
 dancer8.visible = true;
 textSize(25)
 fill("red")
 text("YOUR MARRIAGE",500,500)
}
if(gameState==="end"){
  background(bg5)
  image(bg_end,150,500)
  image(bg_end,1000,500)

  fill("white")
  textSize(40)
  
  text("You failed to rescue Princess Alexandra",300,150)
  text(" Press Space Key to play again",400,600)
  if(keyDown("space"))
  this.location.reload() 
}
}
function createArrow() {
  if (kunaiCount > 0) {
    if(arrowState == "right")
 {   arrow = createSprite(player.x, player.y, 20, 10);
    arrow.velocityX = 10;
    arrow.addImage(kunai_Img)
    arrow.scale = 0.3;
    arrow.lifetime = 300;
    arrowGr.add(arrow)
    //arrow.debug = true;
    //arrow.setCollider("rectangle",0,0,20,20)
    kunaiCount = kunaiCount - 1;
    return arrow;}
    if(arrowState === "left"){
      arrow = createSprite(player.x, player.y, 20, 10);
      arrow.velocityX = -10;
      arrow.addImage(kunai_Img)
      arrow.scale = 0.3;
      arrow.lifetime = 300;
      arrowGr.add(arrow)
      //arrow.debug = true;
      //arrow.setCollider("rectangle",0,0,20,20)
      kunaiCount = kunaiCount - 1;
      return arrow;
    }
  }

}
function createArrow2() {
  if (kunaiCount > 0) {
    if(arrowState == "right")
 {   arrow = createSprite(player2.x, player2.y, 20, 10);
    arrow.velocityX = 10;
    arrow.addImage(kunai_Img)
    arrow.scale = 0.3;
    arrow.lifetime = 300;
    arrowGr.add(arrow)
    //arrow.debug = true;
    //arrow.setCollider("rectangle",0,0,20,20)
    kunaiCount = kunaiCount - 1;
    return arrow;}
    if(arrowState === "left"){
      arrow = createSprite(player2.x, player2.y, 20, 10);
      arrow.velocityX = -10;
      arrow.addImage(kunai_Img)
      arrow.scale = 0.3;
      arrow.lifetime = 300;
      arrowGr.add(arrow)
      //arrow.debug = true;
      //arrow.setCollider("rectangle",0,0,20,20)
      kunaiCount = kunaiCount - 1;
      return arrow;
    }
  }

  

}

function fight(play, v, frame) {
  if (frameCount % frame === 0 && play.velocityX < 0) {
    thorn = createSprite(play.x, play.y, 20, 10);
    thorn.velocityX = v;
    thorn.addImage(knife_Img)
    thorn.scale = 0.2;
    thorn.lifetime = 300;
    thornGr.add(thorn)
    //arrow.debug = true;
    //arrow.setCollider("rectangle",0,0,20,20)
    return thorn;
  }

}

var thorn2;
var arrow3;
