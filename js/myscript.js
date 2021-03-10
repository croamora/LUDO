var numeroDado = 0;
var posicionJ1 = 0;
var posicionJ2 = 0;
var posicionJ3 = 0;
var posicionJ4 = 0;

function lanzarDado(jugador){
	for(var i=0 ; i<10;i++){
		numeroDado = getNumeroAleatorio();
		setTimeout(function(){ 
			console.log("Ready")
		}, 1000);

		document.getElementById("dado").src = "img/" + numeroDado + ".png";
	}
	
	moverFicha(getPosicion(jugador), numeroDado, jugador );
}

function getPosicion(numeroJugador){
	if(numeroJugador === 1 ){
		return posicionJ1;
	}else if(numeroJugador === 2 ){
		return posicionJ2;
	}else if(numeroJugador === 3 ){
		return posicionJ3;
	}else if(numeroJugador === 4 ){
		return posicionJ4;
	}
}

function moverFicha(posicioninIcial,numeroDado,jugador){
	document.getElementById(posicioninIcial).innerHTML = "";
	posicionJ1 = posicioninIcial + numeroDado;
	if(posicionJ1 > 56){
		var camino = posicionJ1 - 56;
		if(camino === 1){
			document.getElementById("1").innerHTML = getJugador(1);
			posicionJ1 = 57
		}else{
			document.getElementById("j1p"+(camino-1)).innerHTML = getJugador(1);
		}
			
	}else{
		document.getElementById(posicionJ1).innerHTML = getJugador(jugador);
	}
	
}

function getNumeroAleatorio() {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}


function partir(jugador){
	if(jugador === 1 ){
		document.getElementById("1").innerHTML = getJugador(jugador);
		posicionJ1 = 1;
	}else if(jugador === 2 ){
		document.getElementById("15").innerHTML = getJugador(jugador);
		posicionJ2 = 15;
	}else if(jugador === 3 ){
		document.getElementById("43").innerHTML = getJugador(jugador);
		posicionJ3 = 43;
	}else if(jugador === 4 ){
		document.getElementById("29").innerHTML = getJugador(jugador);
		posicionJ4 = 29;
	}
	
}


function getJugador(jugador){
	return "<img src='img/jugador"+jugador+".png' class='ficha'>";	
}