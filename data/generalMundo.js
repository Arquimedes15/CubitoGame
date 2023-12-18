//declaracion de arrays
let objectos = [];
let bots = [];

//textura
const text_url = [
    "https://static.vecteezy.com/system/resources/previews/002/948/785/non_2x/pixel-minecraft-style-land-background-vector.jpg",
    "https://i.pinimg.com/736x/63/9e/e3/639ee336abefc1a6a1f40b97db9b409f.jpg",
    "https://i.pinimg.com/236x/92/97/50/929750acdd30536188010a5c43a0f431.jpg",
    "https://i.pinimg.com/736x/f6/bd/4a/f6bd4aa33fff8c89952baf26561ff2b2.jpg",
    "https://e0.pxfuel.com/wallpapers/802/916/desktop-wallpaper-png-minecraft-tnt-png-in-collection-page-1.jpg",

]

const texture_MOB = [
    "https://i.pinimg.com/236x/07/b3/ac/07b3ac2fb39db7554a1badbc0c9d94a8.jpg",
]

//clases
class Objecto {
    constructor(x, y, w, h, img, opcion, opcion2) {
        this.img = new Image;
        this.x = x;
        this.y = y;
        this.alto = h;
        this.ancho = w;
        this.destroy = false;

        this.colision = opcion;

        this.type = opcion2;

        this.img.src = img;

        //dibujar 
        this.dibujar = () => {
            c.drawImage(this.img, this.x, this.y, this.ancho, this.alto);
        }

    }
}

//bot
class Bot {
    constructor(x, y, img, type) {
        this.img = new Image;
        this.x = x;
        this.y = y;
        this.alto = 50;
        this.ancho = 50;
        this.type = type;
        this.move = 1;
        this.velocidad = 1;
        this.delay = false;

        this.img.src = img;
        //dibujar
        this.dibujar = () => {
            c.drawImage(this.img, this.x, this.y, this.ancho, this.alto);
        }
        //logica

        this.logic = () => {
            if (!this.delay) {
                this.delay = true;
                this.move = numeroRadom(1, 4);
                var cambio = setTimeout(() => {
                    this.delay = false;
                }, 3000);
            }
            switch (this.move) {
                case 1: {
                    if (this.x < 0) {
                        this.move = 2;
                        return
                    }
                    this.x -= this.velocidad;
                } break;
                case 2: {
                    if (this.x + this.ancho > canvas.width) {
                        this.move = 1;
                        return
                    }
                    this.x += this.velocidad;
                } break;
                case 3: {
                    //bee
                } break;
            }
        }


    }
}

//generar bot

function generarBot() {
    let cantidad = numeroRadom(5, 15);
    for (let x = 0; x < cantidad; x++) {
        let posionX = numeroRadom(10, canvas.width - 50);
        bots.push(new Bot(posionX, 1950, texture_MOB[0], "animal"))
    }
}
generarBot();

//destrutor

class Destrutor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alto = 350;
        this.ancho = 350;
        this.type = "des"
        this.img = new Image;
        this.img.src = "fx-expres.png";
        this.destroy = false;
        this.dibujar = () => {
            //c.fillStyle = "red";
            //c.fillRect(this.x, this.y, this.ancho, this.alto);
            c.drawImage(this.img, this.x, this.y, this.ancho, this.alto);
        }
    }
}

//Genera terreno plano
for (let x = 0; x < canvas.width; x += 50) {
    objectos.push(new Objecto(x, 2000, 50, 50, text_url[0], true, "tierra"))
}
for (let y = 2050; y < 2500; y += 50) {
    for (let x = 0; x < canvas.width; x += 50) {
        objectos.push(new Objecto(x, y, 50, 50, text_url[1], true, "piedra"))
    }
}

function dibujarAllObjects() {
    for (obj in objectos) {
        objectos[obj].dibujar();
    }
    for (bo in bots) {
        bots[bo].dibujar();
    }
}

function funcionObjects() {
    for (obj in objectos) {
        switch (objectos[obj].type) {
            case "tnt": {
                if (objectos[obj].destroy) {
                    objectos.push(new Destrutor((objectos[obj].x - 175) + 25, (objectos[obj].y - 175) + 25));
                    objectos.splice(obj, 1);
                } else {
                    if (!checkColisionesAll("piso", objectos[obj], objectos)) {
                        objectos[obj].y += gravedad
                    }
                }
            } break;
            //case "":{}break;
            //case "":{}break;
        }
        if (objectos[obj].type == "des" && !objectos[obj].destroy) {
            objectos[obj].destroy = true;
            var des = setTimeout(() => {
                objectos.splice(obj, 1);
            }, 1000);
        }
    }
    for (bo in bots) {
        switch (bots[bo].type) {
            case "animal": {
                if (!checkColisionesAll("piso", bots[bo], objectos)) {
                    bots[bo].y += gravedad
                }
            } break;
        }
        if (colision(jugador1, bots[bo], "piso")) {
            jugador1.y -= 5;
            fx.push(new FX(bots[bo].x, bots[bo].y + 35, "fx-s.png"));
            bots.splice(bo, 1);
            return;
        }
        switch (bots[bo].move) {
            case 1: {
                if (checkColisionesAll("plataformasIz", bots[bo], objectos)) {
                    bots[bo].move = 2;
                }
            } break;
            case 2: {
                if (checkColisionesAll("plataformasDe", bots[bo], objectos)) {
                    bots[bo].move = 1;
                }
            } break;
        }
        bots[bo].logic();
    }
}

//destrutor

function destroyObject() {
    for (obj in objectos) {
        if (objectos[obj].type != "des") {
            for (obj2 in objectos) {
                if (objectos[obj2].type == "des") {
                    if (colision(objectos[obj], objectos[obj2], "direcion")) {
                        objectos.splice(obj, 1);
                    }
                }
            }
        }
    }
    for (obj in objectos) {
        if (objectos[obj].type == "des") {
            if (colision(objectos[obj], jugador1, "direcion")) {
                game_over = true;
            }
        }
    }
}