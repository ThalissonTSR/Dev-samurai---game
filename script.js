var folhaDesenho = document.getElementById("folha");

var areaDesenho = folhaDesenho.getContext("2d");

let larguraCampo = 600;
let alturaCampo = 500;
let larguraLinha = 5;
let larguraBola = 5;
let alturaRaquete = 50;

//background
areaDesenho.fillStyle = "#286047";
areaDesenho.fillRect(0,0,larguraCampo,alturaCampo);

//barra meio
areaDesenho.fillStyle = "white";
areaDesenho.fillRect(larguraCampo/2 - larguraLinha/2,0,larguraLinha,alturaCampo);

//raquete 1
areaDesenho.fillRect(0,30,larguraLinha,alturaRaquete);

//raquete 2
areaDesenho.fillRect(larguraCampo- larguraLinha,30,larguraLinha,alturaRaquete);

//bola
areaDesenho.fillRect(30,30,larguraBola,larguraBola);

