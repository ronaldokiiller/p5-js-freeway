//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 4;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 4;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimento, altura, xAtor, yAtor, 15);
    if(colisao){
      somDaColisao.play();
      voltaParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
}

function voltaParaPosicaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    voltaParaPosicaoInicial();
    somDoPonto.play();
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}