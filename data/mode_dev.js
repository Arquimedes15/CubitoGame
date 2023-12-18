let m_x, m_y;
canvas.addEventListener("mousemove", (e) => {
    m_x = e.pageX;
    m_y = e.pageY;
})
canvas.addEventListener("click", () => {
    objectos.push(new Objecto(m_x, m_y, 50, 50, text_url[0], true, "tierra"))
})


//TNT

let tntCo = true;

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case " ": {
            if (tntCo) {
                let number = objectos.length;
                objectos.push(new Objecto(jugador1.x,jugador1.y, 50, 50, text_url[4], false, "tnt"))
                tntCo = false;
                var pump = setTimeout(() => {
                    objectos[number].destroy = true;
                }, 4000)
                var tnt = setTimeout(()=>{
                    tntCo = true;
                }, 5000);
            }
        } break;
    }
})