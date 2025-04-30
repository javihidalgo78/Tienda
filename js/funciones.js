const productos = [
    {id: 1, nombre: "R.E.M.", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camisetarem.jpg"},
    {id: 2, nombre: "The Beatles", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/beatles.jpg"},
    {id: 3, nombre: "Pink Floyd", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/pinkfloyd.jpg"},
    {id: 4, nombre: "Ramones", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/ramones.jpg"},
    {id: 5, nombre: "U2", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/u2.jpg"},
    
     
]


let contenido = "";
productos.forEach(element => {
    contenido += `
        <div class="producto">
            <img src="${element.imagen}" class="imagenProducto">
            <div class="infoProducto">
                <p><strong>${element.nombre}</strong></p>
                <p>Descripción: ${element.descripcion}</p>
                <p>Precio: $${element.precio.toFixed(2)}</p>
            </div>
        </div>
    `;
});
document.getElementById("productos").innerHTML = contenido;