const gravedad = 3;

function gravedadJugador(){
    if(!checkColisionesAll("piso", jugador1, objectos)){
        jugador1.y += gravedad
    }
}