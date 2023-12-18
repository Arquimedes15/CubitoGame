class Jugador {
    constructor(x, y){//w   s       a       d       e       " "     click
        this.key =  [false, false, false, false], false, false, false;
        this.x = x;
        this.y = y;
        this.alto = 50;
        this.ancho = 50;
        this.img = new Image;

        this.img.src = "https://i.pinimg.com/236x/92/97/50/929750acdd30536188010a5c43a0f431.jpg";

        //inventario
        this.inventario = [];

        //logica

        //dibujar
        this.dibujar = ()=>{
            c.fillStyle = "blue";
            c.fillRect(this.x, this.y, this.ancho, this.alto);
            c.drawImage(this.img, this.x, this.y, 50, 50);
        }
    }
}

//numero ramdon

function numeroRadom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let game_over=false;