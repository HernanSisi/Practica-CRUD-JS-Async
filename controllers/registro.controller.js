
import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (x)=>{
    x.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.crearCliente(nombre, email).then(() => {
        window.location.href = '/screens/registro_completado.html';
    }).catch(() => window.location.href = "../screens/error.html");
});

