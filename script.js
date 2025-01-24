window.onload = function(){
    setInterval(executar,1000/30);  //cooldoown
}


var folhaDesenho = document.getElementById("folha");
var areaDesenho = folhaDesenho.getContext("2d");
var larguraCampo = 600;
var alturaCampo = 500;
var larguraLinha = 5;
var alturaRaquete = 100;
var espressuraRaquete = 50;
var diametroBola = 10;
var efeitoRaquete = 0.3;
var velocidadeJogador2 = 5;

var posicaoJogador1 =  40 
var posicaoJogador2 = 40

var posicaoBolaX = 10
var posicaoBolaY = 10
var velocidadeBolaX = 5
var velocidadeBolaY = 5

pontuacaoJogador1 = pontuacaoJogador2 = 0

//puxar movimento do mouse
folhaDesenho.addEventListener("mousemove", function(e){
    posicaoJogador1 = e.clientY - alturaRaquete /2
});

function executar(){




    //background
    areaDesenho.fillStyle = "#286047"; // cor verde
    areaDesenho.fillRect(0,0,larguraCampo,alturaCampo);

    //barra meio
    areaDesenho.fillStyle = "white";
    areaDesenho.fillRect(larguraCampo/2 - larguraLinha/2,0,larguraLinha,alturaCampo);

    //raquete 1
    areaDesenho.fillRect(0,posicaoJogador1,espressuraRaquete, alturaRaquete);

    //raquete 2
    areaDesenho.fillRect(larguraCampo- espressuraRaquete,posicaoJogador2,espressuraRaquete,alturaRaquete);

    //bola

    areaDesenho.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola/2,diametroBola,diametroBola);

    //placar
    areaDesenho.fillText("Jogador - " + pontuacaoJogador1 + "pontos", 100,100);
    areaDesenho.fillText("Computador - " + pontuacaoJogador2 + "pontos", larguraCampo - 200,100);


    //calcular desenho bola
    posicaoBolaX = posicaoBolaX + velocidadeBolaX
    posicaoBolaY = posicaoBolaY + velocidadeBolaY

    // olhar lateral superior
    if(posicaoBolaY < 0 && velocidadeBolaY < 0){
        velocidadeBolaY = -velocidadeBolaY;
    }

    // olhar lateral inferior
    if(posicaoBolaY > alturaCampo && velocidadeBolaY > 0){
        velocidadeBolaY = -velocidadeBolaY;
    }

    // olhar ponto P2
    if(posicaoBolaX < 0){
        if(posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete){
        
        // rebater a bola 
        velocidadeBolaX = -velocidadeBolaX;

        var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
        velocidadeBolaY = diferencaY * efeitoRaquete;
        }else{
            //ponto P2
             pontuacaoJogador2 +=1;
        }

        //resetar bola
            posicaoBolaX = larguraCampo / 2
            posicaoBolaY = alturaCampo / 2
            velocidadeBolaX = -velocidadeBolaX
            velocidadeBolaY = 3
    }
    // olhar ponto P1
    if(posicaoBolaX > larguraCampo){
        if(posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete){
        
        // rebater a bola 
        velocidadeBolaX = -velocidadeBolaX;

        var diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
        velocidadeBolaY = diferencaY * efeitoRaquete;
        
        }

        else{
            //ponto P1
             pontuacaoJogador1 +=1;
        }
            //resetar bola
             //resetar bola
             posicaoBolaX = larguraCampo / 2
             posicaoBolaY = alturaCampo / 2
             velocidadeBolaX = -velocidadeBolaX
             velocidadeBolaY = 3
    }

    //movimento computador
    if(posicaoJogador2 + alturaRaquete /2 < posicaoBolaY){
        posicaoJogador2 = posicaoJogador2 + velocidadeJogador2
    }
    else{
        posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;
    }
}