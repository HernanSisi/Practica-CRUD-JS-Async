const linkServer = 'http://localhost:3009/perfil';
//json-server --w db.json -p 3009
const listaclientes=()=>
    fetch(linkServer).then((i)=>i.json());

const crearCliente = (nombre, email) => {
    return fetch(linkServer, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};

const detalleCliente = (id) => {
    return fetch(linkServer+`/${id}`).then(respuesta => respuesta.json());
};

const eliminarCliente = (id) => {
    return fetch(linkServer+`/${id}`,{
        method: 'DELETE',
    })
};

    const actualizarCliente = (nombre,email,id) =>{
        return fetch(linkServer+`/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre,email,}),
    }).then(res => {
        res
    });
};

export const clientServices = {
    listaclientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};
/* 
CRUD    - METODOS
CREATE  - POST
READ    - GET
UPDATE  - PUT/PAT
DELETE  - DELETE
*/