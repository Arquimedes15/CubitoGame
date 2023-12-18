//load map

const masionMAP = [
    0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0,
    0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0,
    0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0,
    0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,
    4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
]

const arbol1MAP = [
    0, 0, 0, 3, 0, 0, 0,
    0, 0, 2, 3, 2, 0, 0,
    0, 2, 2, 3, 2, 2, 0,
    2, 2, 2, 3, 2, 2, 2,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
]
const arbol2MAP = [
    0, 0, 0, 3, 0, 0, 0,
    0, 0, 2, 3, 2, 0, 0,
    0, 2, 2, 3, 2, 2, 0,
    2, 2, 2, 3, 2, 2, 2,
    0, 0, 2, 3, 2, 0, 0,
    0, 2, 2, 3, 2, 2, 0,
    2, 2, 2, 3, 2, 2, 2,
    2, 2, 2, 3, 2, 2, 2,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
]
const arbol3MAP = [
    0, 0, 0, 3, 0, 0, 0,
    0, 0, 2, 3, 2, 0, 0,
    0, 2, 2, 3, 2, 2, 0,
    2, 2, 2, 3, 2, 2, 2,
    0, 0, 0, 3, 0, 0, 0,
    0, 0, 2, 3, 2, 0, 0,
    0, 2, 2, 3, 2, 2, 0,
    2, 2, 2, 3, 2, 2, 2,
    0, 0, 0, 3, 0, 0, 0,
    0, 0, 2, 3, 2, 0, 0,
    0, 2, 2, 3, 2, 2, 0,
    2, 2, 2, 3, 2, 2, 2,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
]

function loadMApdraw(map) {
    let px = 0;
    switch (map) {
        case "mansion": {
            for (let y = 0; y < 750; y += 50) {
                for (let x = 0; x < 1350; x += 50) {
                    switch (masionMAP[px]) {
                        case 0: {
                            c.fillStyle = "blue"
                            c.fillRect(x, y, 50, 50);
                        } break;
                        case 1: {
                            c.fillStyle = "white"
                            c.fillRect(x, y, 50, 50);
                        } break;
                        case 2: {
                            c.fillStyle = "peru";
                            c.fillRect(x, y, 50, 50);
                        } break;
                        case 5: {
                            c.fillStyle = "red"
                            c.fillRect(x, y, 50, 50);
                        }
                    }
                    px++;
                }
            }
        } break;
        case "arbol1": {
            let img1 = new Image;
            let img2 = new Image;
            img1.src = "https://i.pinimg.com/236x/53/5c/21/535c212cc21f5213cb6727b83af828e2.jpg";
            img2.src = "https://i.pinimg.com/236x/5c/69/18/5c691822a8fb0523f47b33874740a98f.jpg";
            for (let y = 0; y < 300; y += 50) {
                for (let x = 0; x < 350; x += 50) {
                    switch (arbol1MAP[px]) {
                        case 1: {
                            c.drawImage(img1, x, y, 50, 50);
                        } break;
                        case 2: {
                            c.drawImage(img2, x, y, 50, 50);
                        } break;
                        case 3: {
                            c.drawImage(img2, x, y, 50, 50);
                        } break;
                    }
                    px++;
                }
            }
        } break;
    }
}
let cantidadaR = numeroRadom(10, 20);
function generarTemplet() {
    for (let arbol = 0; arbol < cantidadaR; arbol++) {
        let tipo_arbol = numeroRadom(1, 4);
        switch (tipo_arbol) {
            case 1: {
                let posionX = numeroRadom(10, 2900);
                let img1 = "https://i.pinimg.com/236x/53/5c/21/535c212cc21f5213cb6727b83af828e2.jpg";
                let img2 = "https://i.pinimg.com/236x/5c/69/18/5c691822a8fb0523f47b33874740a98f.jpg";
                let px = 0;
                for (let y = 0; y < 300; y += 50) {
                    for (let x = 0; x < 350; x += 50) {
                        switch (arbol1MAP[px]) {
                            case 1: {
                                objectos.push(new Objecto(x + posionX, (2000 - 300) + y, 50, 50, img1, false, "tronco"))
                            } break;
                            case 2: {
                                objectos.push(new Objecto(x + posionX, (2000 - 300) + y, 50, 50, img2, false, "hoja"))
                            } break;
                            case 3: {
                                objectos.push(new Objecto(x + posionX, (2000 - 300) + y, 50, 50, img2, false, "hoja-tronco"))
                            } break;
                        }
                        px++;
                    }
                }
            } break;
            case 2: {
                let posionX = numeroRadom(10, 2900);
                let img1 = "https://i.pinimg.com/236x/53/5c/21/535c212cc21f5213cb6727b83af828e2.jpg";
                let img2 = "https://i.pinimg.com/236x/5c/69/18/5c691822a8fb0523f47b33874740a98f.jpg";
                let px = 0;
                for (let y = 0; y < 500; y += 50) {
                    for (let x = 0; x < 350; x += 50) {
                        switch (arbol2MAP[px]) {
                            case 1: {
                                objectos.push(new Objecto(x + posionX, (2000 - 500) + y, 50, 50, img1, false, "tronco"))
                            } break;
                            case 2: {
                                objectos.push(new Objecto(x + posionX, (2000 - 500) + y, 50, 50, img2, false, "hoja"))
                            } break;
                            case 3: {
                                objectos.push(new Objecto(x + posionX, (2000 - 500) + y, 50, 50, img2, false, "hoja-tronco"))
                            } break;
                        }
                        px++;
                    }
                }
            } break;
        }
    }
}
generarTemplet();