class Camara {
    constructor(){
        this.x = 0;
        this.y = 0;
    };
};
let camara = new Camara;
function controlCamp (){
    camara.x = jugador1.x - (window.innerWidth/2) + 50;
    camara.y = jugador1.y - (window.innerHeight/2) + 50;
    window.scroll(camara.x, camara.y);
}