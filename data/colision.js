function colision(objecto1, objecto2, direcion) {
    //objecto 1 jugador o objecto en movimiento
    //objecto 2 objecto estatico
    //direcion objecto con que lado va a pegar

    let colision1_tapa = objecto1.y;
    let colision1_derecha = objecto1.x + objecto1.ancho;
    let colision1_iziquierda = objecto1.x;
    let colision1_piso = objecto1.y + objecto1.alto;

    let colision2_tapa = objecto2.y;
    let colision2_derecha = objecto2.x + objecto2.ancho;
    let colision2_iziquierda = objecto2.x;
    let colision2_piso = objecto2.y + objecto2.alto;


    switch (direcion) {
        case "piso": {
            if (objecto1.y + objecto1.alto >= objecto2.y && objecto1.x + objecto1.ancho >= objecto2.x && objecto1.x <= objecto2.x + objecto2.ancho && objecto1.y + objecto1.alto <= objecto2.y + 3) {
                return true;
            }
        } break;
        case "direcion": {
            if (colision1_derecha >= colision2_iziquierda && colision1_iziquierda <= colision2_derecha && colision1_piso >= colision2_tapa && colision1_tapa <= colision2_piso) {
                return true;
            }
        } break;
        case "plataformasDe": {
            if (colision1_derecha >= colision2_iziquierda && colision1_iziquierda <= colision2_derecha - 5 && colision1_piso - 4 >= colision2_tapa && colision1_tapa <= colision2_piso) {
                return true;
            }
        } break;
        case "plataformasIz": {
            if (colision1_derecha >= colision2_iziquierda + 5 && colision1_iziquierda <= colision2_derecha && colision1_piso - 4 >= colision2_tapa && colision1_tapa <= colision2_piso) {
                return true;
            }
        } break;
        default: {
            console.error("opcion no valida")
        } break;
    }
    return false;
}

//check colisiones
function checkColisionesAll(direcion, objecto1, objecto2) {
    //colision de jugador
    for (coli in objecto2) {
        if (objecto2[coli].colision) {
            if (colision(objecto1, objecto2[coli], direcion)) {
                return true;
            }
        }
    }
    return false;
}