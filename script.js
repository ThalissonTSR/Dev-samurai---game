   //carrega os principais comandos
   
   window.onload = function(){
    iniciar();                      // inicia as variavies
    setInterval(principal,1000 / 30);
   }
   function iniciar(){

   
     folhaDesenho = document.getElementById("folha")
     areaDesenho = folhaDesenho.getContext("2d")

     larguraCampo = 600
     alturaCampo = 500
     espessuraRede = 5
     diametroBola = 10
     espessuraRaquete = 11
     alturaRaquete = 100
     efeitoRaquete = 0.3

     velocidadeJogador2 = 5
    
     posicaoBolaX = 10
     posicaoBolaY = 10
     velocidadeBolaX = 5
     velocidadeBolaY = 5

     posicaoJogador1 = 40
     posicaoJogador2 = 40

     pontuacaoP1 = 0
     pontuacaoP2 = 0

   folhaDesenho.addEventListener("mousemove", function(e){
        posicaoJogador1 = e.clientY - alturaRaquete / 2
   })
   }
   function principal(){
    desenhar();
    calcular();
   }

   function desenhar(){
    areaDesenho.fillStyle = "#286047"  //cor verde

    areaDesenho.fillRect(0,0,600,500);

    areaDesenho.fillStyle = "white"

    areaDesenho.fillRect(larguraCampo / 2 - espessuraRede / 2,0,espessuraRede,alturaCampo)

    // desenho bola
    areaDesenho.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola,diametroBola);

    //raquete1

    areaDesenho.fillRect(0,posicaoJogador1,espessuraRaquete,alturaRaquete)

    //raquete2
    areaDesenho.fillRect(larguraCampo - espessuraRaquete,posicaoJogador2,espessuraRaquete,alturaRaquete)

    // mostrar pontos
    areaDesenho.fillText("Jogador 1 - " + pontuacaoP1 + "pontos", 100,100)
    areaDesenho.fillText("computador - " + pontuacaoP2 + "pontos",larguraCampo - 200,100)

   }

   function calcular(){
    
    

    posicaoBolaX = posicaoBolaX + velocidadeBolaX
    posicaoBolaY = posicaoBolaY + velocidadeBolaY

    //verificar lateral superior
    if(posicaoBolaY < 0 && velocidadeBolaY < 0){
        velocidadeBolaY = -velocidadeBolaY
    }

    if(posicaoBolaY > alturaCampo && velocidadeBolaY > 0){
        velocidadeBolaY = -velocidadeBolaY
    }
    //verificar lateral superior
    if(posicaoBolaX < 0){
        if(posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete){
            //rebater a bola
            velocidadeBolaX = -velocidadeBolaX

            var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2)
            velocidadeBolaY = diferencaY * efeitoRaquete
        }else{
            // marcar pts P2
            pontuacaoP2++

            //resetar bola
            continuar()
        }
    }
    if(posicaoBolaX > larguraCampo){
        if(posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete){

            //rebater a bola
            velocidadeBolaX = -velocidadeBolaX

            var diferencaY =posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2)
            velocidadeBolaY = diferencaY * efeitoRaquete

        }else{
            // marcar pts P2
            pontuacaoP1++

            //resetar bola
            continuar()
        }

    }

    //rastreio do controle P2
    if(posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY){
        posicaoJogador2 = posicaoJogador2 + velocidadeJogador2
    }else{
        posicaoJogador2 = posicaoJogador2 - velocidadeJogador2

    }
}

function continuar(){
    posicaoBolaX = larguraCampo / 2
    posicaoBolaY = alturaCampo /2
    velocidadeBolaX = -velocidadeBolaX+1
    velocidadeBolaY += 1.1
    velocidadeJogador2 += 0.3
    
}

