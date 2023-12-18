const fxTEXTURE = [
    "https://c0.klipartz.com/pngpicture/307/496/gratis-png-sangre-gotas-de-sangre.png",
    ""
]

class FX{
    constructor(x, y, img){
        this.x = x;
        this.y = y;
        this.img = new Image;
        this.img.src = img;
        this.dibujar = ()=>{
            c.drawImage(this.img, this.x, this.y, 100, 100);
        }
    }
}


let fx = [];

function drawFX() {
    for(f in fx){
        fx[f].dibujar();
    }
}