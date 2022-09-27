

import { clientServices } from "../service/client-service.js";
const crearnuevalinea = (nombre, email, id) =>{
    const linea = document.createElement('tr');
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
        <li>
            <a href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit">
                Editar
            </a>
        </li>
        <li>
            <button
            class="simple-button simple-button--delete"
            type="button"
            id='${id}'>
                Eliminar
            </button>
        </li>
        </ul>
    </td>
`;
linea.innerHTML = contenido;
const btn = linea.querySelector('button');
btn.addEventListener('click', ()=>{eliminar(btn.id)})
return linea;
};

clientServices.listaclientes().then((data)=>{
    data.forEach(({nombre,email,id}) => {
        const nl = crearnuevalinea(nombre,email,id);
        document.querySelector('[data-table]').appendChild(nl);
    });
}).catch((error) => {
    window.location.href = "../screens/error.html";
});

const eliminar = (id) =>{
    clientServices.eliminarCliente(id).catch(resp =>{
        window.location.href = "../screens/error.html";
    });
};