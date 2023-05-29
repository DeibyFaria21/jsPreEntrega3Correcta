productosTeclados = [
    {
        id: 1,
        categoria: "Teclado mecánico",
        nombre: "Teclado Logitech G513 Carbon",
        valor: 24500,
        stock: 6,
        imagen: "./images/g513carbon.jpg",
        descripcion: "G513 es un teclado para juegos de alto desempeño con interruptores mecánicos avanzados GX Brown Tactile. El reposamanos extraíble de espuma viscoelástica y la construcción de aleación de aluminio premium complementan las características de G513 para hacerlo el mejor de su clase."
    },
    {
        id: 2,
        categoria: "Teclado mecánico",
        nombre: "Teclado HyperX Alloy Origins",
        valor: 18000,
        stock: 0,
        imagen: "./images/alloyorigins.jpg",
        descripcion: "El teclado HyperX Alloy Origins es resistente, compacto y cuenta con switches mecánicos HyperX personalizados que han sido diseñados para proporcionar a los jugadores la mejor combinación de rendimiento, fiabilidad y estilo, además de un cuerpo en aluminio muy resistente."
    },
    {
        id: 3,
        categoria: "Teclado mecánico",
        nombre: "Teclado ROG Claymore II",
        valor: 37100,
        stock: 7,
        imagen: "./images/rogclaymoreii.jpg",
        descripcion: "Teclado mecánico para juegos modular TKL 80% / 100% ROG Claymore II con Switches Mecánicos Ópticos ROG RX, teclado numérico y reposamuñecas desmontables, modos 2.4G alámbrico e inalámbricos, teclas de acceso rápido extra personalizables, rueda de control de volumen e inalámbrico."
    },
    {
        id: 4,
        categoria: "Teclado de membrana",
        nombre: "Teclado Corsair K55 RGB",
        valor: 19800,
        stock: 3,
        imagen: "./images/corsairk55.jpg",
        descripcion: "El K55 RGB cuenta con modos de retroiluminación RGB intuitivos, sus 6 teclas macro específicas, el efecto antifantasmas multitecla y sus controles multimedia programables sobre la marcha ofrecen un gran control y capacidad de personalización, elementos esenciales para la victoria."
    },
    {
        id: 5,
        categoria: "Teclado de membrana",
        nombre: "Teclado Redragon Shiva K512",
        valor: 16400,
        stock: 0,
        imagen: "./images/shivak512.jpg",
        descripcion: "La cantidad de prestaciones que ofrece el Shiva es asombrosa: prácticamente todo lo que presumen los teclados mecánicos tope de gama, el Shiva lo tiene en su tipo membrana. Botones macro y multimedia dedicados. Iluminación RGB con 7 perfiles configurables. Reposamuñecas desmontable magnético."
    },
    {
        id: 6,
        categoria: "Teclado de membrana",
        nombre: "Teclado Sentey Acrylix RGB",
        valor: 8600,
        stock: 4,
        imagen: "./images/senteyacrylix.jpg",
        descripcion: "El diseño de retroiluminación, mejora la experiencia como usuario, enalteciendo el entorno para crear una atmósfera única. Acrylix es retroiluminado con LED de alta intensidad brillante que cuenta con tres niveles de brillo diferentes adaptados para diferentes momentos a lo largo del día."
    },
]

/* let productosCategoría = [] */
let dentroCarrito = JSON.parse(localStorage.getItem("productosElegidos")) || [];

let divTarjetas = document.getElementsByClassName("cajaTarjetas");
let contenidoCarrito = document.getElementById("contenidoCarrito");
contenidoCarrito.className = "contenidoCarritoHtml";

    let encabezadoTarjetas = document.createElement("h2");
    encabezadoTarjetas.innerHTML = ("Teclados Full Size<br>Mecánicos y Membrana");
    encabezadoTarjetas.className = "encabezadoTarjetas"
    divTarjetas[0].appendChild(encabezadoTarjetas);


productosTeclados.forEach((teclado) => {
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class","card col-md-3 m-3");
    divTarjetas[0].appendChild(tarjeta);

        let tarjetaImagen = document.createElement("img");
        tarjetaImagen.setAttribute("class","card-img-top mt-3 mb-3 border border-2 border-dark");
        tarjetaImagen.setAttribute("src",teclado.imagen);
        tarjeta.appendChild(tarjetaImagen);

        let tarjetaTitulo = document.createElement("h4");
        tarjetaTitulo.setAttribute("class","card-title text-center");
        tarjetaTitulo.innerText = (teclado.nombre);
        tarjeta.appendChild(tarjetaTitulo);

        let tarjetaParrafo = document.createElement("p");
        tarjetaParrafo.setAttribute("class","card-text text-center mt-2");
        tarjetaParrafo.innerText = (teclado.descripcion);
        tarjeta.appendChild(tarjetaParrafo);

        let tarjetaPrecio = document.createElement("h5");
        tarjetaPrecio.setAttribute("class","card-title text-center");
        tarjetaPrecio.innerText = ("$ " + teclado.valor);
        tarjeta.appendChild(tarjetaPrecio);

        let botonAgregar = document.createElement("button");
        botonAgregar.className = "botonAgregar";
        botonAgregar.innerText = "Agregar al carrito";
        tarjeta.appendChild(botonAgregar);

                
        botonAgregar.addEventListener("click", () => {
                /* let compraContenido = document.createElement("div");
                compraContenido.className = "compraContenido"; */
            dentroCarrito.push({
                imagen: teclado.imagen,
                id: teclado.id,
                titulo: teclado.nombre,
                valor: teclado.valor,
            });
            console.log(dentroCarrito);
            guardadoTemporal();
        })
})


let botonCarrito = document.querySelector(".botonCarrito");

botonCarrito.addEventListener("click", () => {
    contenidoCarrito.innerHTML = "";
    contenidoCarrito.style.display = "block";
    const contenidoCarritoTitulo = document.createElement("div");
    contenidoCarritoTitulo.setAttribute("class","tituloCarrito");
    contenidoCarritoTitulo.innerHTML = "<h2>Productos Aregados al Carrito de Compra</h2>"
    contenidoCarrito.appendChild(contenidoCarritoTitulo);

    const contenidoCarritoCerrar = document.createElement("h2");
    contenidoCarritoCerrar.setAttribute("class","cerrarCarrito");
    contenidoCarritoCerrar.innerText = "🔴"
    contenidoCarritoTitulo.appendChild(contenidoCarritoCerrar);

    contenidoCarritoCerrar.addEventListener(("click"), () => {
        contenidoCarrito.style.display = "none";
    })

    dentroCarrito.forEach((teclado) => {
        let tecladoElegido = document.createElement("div");
        tecladoElegido.setAttribute("class","productoElegido");
        
            let tecladoElegidoImagen = document.createElement("img");
            tecladoElegidoImagen.className = "tecladoElegidoImagen";
            tecladoElegidoImagen.setAttribute("src",teclado.imagen);
            tecladoElegido.appendChild(tecladoElegidoImagen);

            let tecladoElegidoId = document.createElement("h4");
            tecladoElegidoId.className = "tecladoElegidoId";
            tecladoElegidoId.innerText = teclado.id;
            tecladoElegido.appendChild(tecladoElegidoId);
        
            let tecladoElegidoTitulo = document.createElement("h3");
            tecladoElegidoTitulo.className = "tecladoElegidoTitulo";
            tecladoElegidoTitulo.innerText = teclado.titulo;
            tecladoElegido.appendChild(tecladoElegidoTitulo);

            let tecladoElegidoPrecio = document.createElement("h3");
            tecladoElegidoPrecio.className = "tecladoElegidoPrecio";
            tecladoElegidoPrecio.innerText = "$ " + teclado.valor;
            tecladoElegido.appendChild(tecladoElegidoPrecio);
        
        contenidoCarrito.appendChild(tecladoElegido);
    })

})

    
let guardadoTemporal = () => {
    localStorage.setItem("productosElegidos", JSON.stringify(dentroCarrito));
};

JSON.parse(localStorage.getItem("productosElegidos"));
