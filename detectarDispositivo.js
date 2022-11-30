const dispositivo__texto = document.getElementById('dispositivo__texto')
const dispositivo__texto1 = document.getElementById('dispositivo__texto1')
const dispositivo__texto2 = document.getElementById('dispositivo__texto2')
const dispositivo__texto3 = document.getElementById('dispositivo__texto3')
const dispositivo__texto4 = document.getElementById('dispositivo__texto4')
const dispositivo__texto5 = document.getElementById('dispositivo__texto5')

class Dispositivo {
    esMovil = false
    esTablet = false
    esAndroid = false
    esiPhone = false
    esiPad = false
    esOrdenador = false
    esWindows = false
    esLinux = false
    esMac = false
}

const deteccion = () => {
    dispositivo = new Dispositivo()

    if (navigator.userAgent.toLowerCase().match(/mobile/)){
        dispositivo.esMovil = true
    }
    else {
        if (navigator.userAgent.toLowerCase().match(/tablet/))
            dispositivo.esTablet = true
        else
            dispositivo.esOrdenador = true
    }

    // console.log(navigator.userAgent.toLocaleLowerCase())

    if (dispositivo.esMovil == true) {
        if (navigator.userAgent.toLowerCase().match(/android/)) {
            dispositivo.esAndroid = true
            dispositivo__texto.innerText = "Celular Android"
        } else if (navigator.userAgent.toLowerCase().match(/ipad/)){
            dispositivo.esiPad = true
            dispositivo__texto.innerText = "iPad"
        } else {
            dispositivo.esiPhone = true
            // dispositivo__texto.innerText = "Celular iPhone"
        }
    } else if(dispositivo.esTablet == true)
            dispositivo__texto.innerText = "Tablet"
      else {
        if (navigator.userAgent.toLowerCase().match(/mac/)) {
            dispositivo.esMac = true
            dispositivo__texto.innerText = "Ordenador Mac"
        } else if(navigator.userAgent.toLowerCase().match(/linux/)){
            dispositivo.esLinux = true
            dispositivo__texto.innerText = "Ordenador Linux"
        } else {
            dispositivo.esWindows = true
            dispositivo__texto.innerText = ""
        }
    }
}

window.addEventListener('load', deteccion())

/*contenido exclusivo*/

/*pc*/



if(dispositivo.esOrdenador){
    dispositivo__texto4.innerHTML = 
    '<p class="card-text">Desarrolladora: 2K Developer <br>No contiene anuncios <br>Valoracion: 4.4 &#9733; <br> Descargas: 200M+<br>Apto para todo publico.</p>'
}

if(dispositivo.esOrdenador){
    dispositivo__texto3.innerHTML = 
    '<p class="card-text">&#128241; Esta aplicación solo esta disponible para algunos de tus dispositivos moviles.</p><p class="card-text">&#127968; Puedes compartir este contenido con tu grupo familiar. Más información sobre la bibleoteca familiar.</p>'
}

/*celular*/
if(dispositivo.esMovil){
    dispositivo__texto4.innerHTML = '<p class="card-text">Desarrolladora: 2K Developer <br>No contiene anuncios <br>Valoracion: 4.4 &#9733; <br> Descargas: 200M+<br>Apto para todo publico. <img class="test" src="logo_app.jpeg" alt=""></p>'
}
if(dispositivo.esMovil){
    dispositivo__texto5.innerHTML = '<button type="button" class="btn btn-success btn-lg">Instalar</button>'
}


