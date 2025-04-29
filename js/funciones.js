const productos = [
    {id: 1, nombre: "camiseta", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camiseta.jpg"},
    {id: 2, nombre: "camiseta", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camiseta.jpg"},
    {id: 3, nombre: "camiseta", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camiseta.jpg"},
    {id: 4, nombre: "camiseta", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camiseta.jpg"},
    {id: 5, nombre: "camiseta", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camiseta.jpg"},  
]

productos.forEach(element =>{
    document.getElementById("productos").innerHTML = `
    <img src="${element.imagen}" class="imagenProducto">
    <p>${element.nombre}</p>
    `;
});