//código do carro

let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [40, 96, 150, 210, 270, 318];
let velocidadeCarro = [2, 5, 3.5, 7, 3, 2.6];

//outras variáveis de carros
comprimento = 50;
altura = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimento, altura);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarro.length; i++) {
    xCarro[i] -= velocidadeCarro[i];
  }  
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < xCarro.length; i++) {
    if (passouTodaTela(xCarro[i])) {
      xCarro[i] = 600;
    }
  }
}

function passouTodaTela(x) {
  return x < -50;
}
