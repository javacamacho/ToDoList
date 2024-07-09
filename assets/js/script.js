const actividades = [
    { id: 1, tarea: 'Ir al supermercado' },
    { id: 2, tarea: 'Estudiar para la prueba' },
    { id: 3, tarea: 'Sacar a pasear al perro' },
];

let renderServicios = () => {
    let lista = document.querySelector('#listaTareas')
    let html = ''

    for(actividad of actividades) {
    html += `
    <li>${actividad.id} ${actividad.tarea} <button onClick='eliminar(${actividad.id})'> x </button> </li>
    `
    }

    lista.innerHTML = html
};

renderServicios()

let eliminar = (id) => {
    let indice = actividades.findIndex((indice) => actividad.id === id )
    actividades.splice(indice, 1)

    renderServicios()
};