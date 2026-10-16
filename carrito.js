class Carrito {
  constructor(productos, moneda) {
    this.moneda = moneda;
    this.productos = [];

    for (const producto of productos) {
      this.productos.push({
        SKU: producto.SKU,
        title: producto.title,
        price: Number(producto.price),
        quantity: 0,
      });
    }
  }

  obtenerProductos() {
    return this.productos;
  }

  actualizarUnidades(sku, unidades) {
    if (!Number.isInteger(unidades) || unidades < 0) {
      return;
    }
    for (const producto of this.productos) {
      if (producto.SKU === sku) {
        producto.quantity = unidades;
      }
    }
  }
  calcularTotal() {
    let total = 0;

    for (const producto of this.productos) {
      total = total + producto.price * producto.quantity;
    }

    return total;
  }

  obtenerInformacionProducto(sku) {
    for (const producto of this.productos) {
      if (producto.SKU === sku) {
        return producto;
      }
    }
  }

  obtenerCarrito() {
    const productosSeleccionados = [];

    for (const producto of this.productos) {
      if (producto.quantity > 0) {
        productosSeleccionados.push(producto);
      }
    }

    return {
      total: this.calcularTotal(),
      currency: this.moneda,
      products: productosSeleccionados,
    };
  }
}

function mostrarProductos(miCarrito) {
  const elementoMoneda = document.getElementById("moneda");
  elementoMoneda.textContent = miCarrito.moneda;
  const elementoTotal = document.getElementById("total");
  elementoTotal.textContent = miCarrito.calcularTotal().toFixed(2);

  const listaProductos = document.getElementById("lista-productos");

  for (const producto of miCarrito.obtenerProductos()) {
    const elemento = document.createElement("li");

    const informacion = document.createElement("div");

    const nombrePrecio = document.createElement("span");
    nombrePrecio.textContent =
      producto.title +
      " — " +
      producto.price.toFixed(2) +
      " " +
      miCarrito.moneda;

    const codigo = document.createElement("small");
    codigo.textContent = "SKU: " + producto.SKU;

    informacion.appendChild(nombrePrecio);
    informacion.appendChild(codigo);
    elemento.appendChild(informacion);
    const campoCantidad = document.createElement("input");

    campoCantidad.type = "number";
    campoCantidad.min = "0";
    campoCantidad.step = "1";
    campoCantidad.value = producto.quantity;

    campoCantidad.setAttribute("aria-label", "Unidades de " + producto.title);

    elemento.appendChild(campoCantidad);

    campoCantidad.addEventListener("change", function () {
      const unidades = Number(campoCantidad.value);

      if (!Number.isInteger(unidades) || unidades < 0) {
        campoCantidad.value = producto.quantity;
        return;
      }

      miCarrito.actualizarUnidades(producto.SKU, unidades);
      campoCantidad.value = producto.quantity;

      elementoTotal.textContent = miCarrito.calcularTotal().toFixed(2);
    });

    listaProductos.appendChild(elemento);
  }
}

async function cargarProductos() {
  const estado = document.getElementById("estado");
  estado.textContent = "Cargando productos...";
  try {
    const respuesta = await fetch(
      "https://api.github.com/repos/sggbaaken/agoodshop-carrito/contents/productos.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
        },
      },
    );
    if (!respuesta.ok) {
      throw new Error("Error HTTP: " + respuesta.status);
    }

    const datos = await respuesta.json();

    const carritoDesdeAPI = new Carrito(datos.products, datos.currency);
    mostrarProductos(carritoDesdeAPI);
    estado.textContent = "";
  } catch (error) {
    console.error("No se pudieron cargar los productos:", error);
    estado.textContent =
      "No se pudieron cargar los productos. Recarga la página para intentarlo de nuevo.";
  }
}

cargarProductos();
