//fundo
var backgroundImg;

//personagens
var miguel,miguelImg;
var marti,martiImg;
var marci,marciImg;

var ufo,ufoImg;
var radioativo,radioativoImg;

//falta criar os personagens marti e marci.
//falta criar os npcs(ufo, radioativo, cristais, casa, coracao).


//falta carregar a imagem dos personagens marti e marci
//falta carregar a imagem dos npcs(ufo, radioativo, cristais, casa, coracao).
function preload(){
backgroundImg = loadImage("./imagens/fundo.jpg");
miguelImg = loadImage("./imagens/miguel.png");
martiImg = loadImage("./imagens/marti.png");
radioativoImg = loadImage("./imagens/radioativo.png");
ufoImg = loadImage("./imagens/ufo.png");
}

//criar os sprites dos personagens npcs e pcs.
function setup(){
canvas = createCanvas(windowWidth, windowHeight);

miguel = createSprite(windowWidth -400, windowHeight -200, 50, 50 );
miguel.addImage("miguel",miguelImg);
miguel.scale = 0.2

marci = createSprite(windowWidth -1720, windowHeight -250, 50,50);
marci.addImage("marci",marciImg);
marci.scale = 0.9



}

//chamar as funcoes de regra do jogo.
function draw(){

image(backgroundImg,0,0,windowWidth, windowHeight);
 
geraUfo();

geraRadioativo()

// if o miguel tocar no radioativo perde vida
if(miguel){}

// if o miguel tocar no ufo perde vida
// if o miguel tocar no coracao ganha vida
// if o miguel acertar o ufo com um progetil ele ganha ponto
// if o miguel chegar a 300 pontos a marti aparece
// if o miguel chegar a 100 e 200 pontos fica mais dificil
// if o miguel acertar a marti 100x ele ganha


drawSprites();

}

//fucoe que gera radioativo na vertical
function geraRadioativo(){
  if(frameCount %50 === 0){
    var radioativo = createSprite(windowWidth -400, windowHeight +100, 50,50);
    //add imagem
    radioativo.velocityY = 4;
    
    radioativo.addImage("radioativo",radioativoImg);
  }
    
}







//fucoe que gera ufo na horizontal
function geraUfo(){
  if(frameCount %50 === 0){
    var ufo = createSprite(windowWidth -1720, windowHeight -250, 50,50);
    //add imagem
    ufo.addImage("ufo",ufoImg);

    ufo.velocityX = 4;

  }
    
}