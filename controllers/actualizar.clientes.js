
import { clientServices } from "../service/client-service.js";
const informacion = async() => {
    const url = new URL(window.location).searchParams.get('id');
/*     if (url === null || url === '') {
    } */
    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');
    try{
        const perfil = await clientServices.detalleCliente(url);
        if (perfil.nombre && perfil.email) {
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else {
            throw new Error();
        }
    }catch(err){
        window.location.href = "../screens/error.html"
    }
};
informacion();

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    const url = new URL(window.location).searchParams.get('id');
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.actualizarCliente(nombre,email,url).then(()=>{
        window.location.href = '../screens/edicion_concluida.html'
    });
})