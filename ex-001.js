function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagemm')
    var sectionBody = window.document.getElementById('section-body')
    var data = new Date()
    var hora = data.getHours()
    console.log(hora)
    msg.innerHTML - `Agora são ${hora} horas`
        if (hora >= 0 && hora <= 12) {
        //BOM DIA
        img.src = 'MANHA1.png'
        msg.innerHTML = "BOM DIA" 
        sectionBody.style.backgroundColor = 'black';
        } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'TARDE.png'
        msg.innerHTML = "BOA TARDE"
        sectionBody.style.backgroundColor = 'green';
        } else {
        // BOA NOITE
        img.src = 'NOITE.png'
        msg.innerHTML = "BOA NOITE"
        sectionBody.style.backgroundColor = 'yellow';
    }
}

