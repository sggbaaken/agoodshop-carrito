# agoodshop-carrito
Actividad 1 - DAW entorno cliente UNIR

## Descripción

Carrito de compra desarrollado con HTML, CSS y JavaScript.
Permite consultar productos, seleccionar cantidades y calcular
el importe total.

## Cómo utilizarlo

1. Descargar el proyecto y descomprimirlo si está en formato ZIP.
2. Abrir index.html en un navegador.
3. Introducir las unidades deseadas de cada producto.
4. Confirmar el cambio haciendo clic fuera del campo para actualizar el total.

Es necesaria una conexión a Internet para cargar los productos.

## Organización del código

- index.html: estructura de la página.
- estilos.css: presentación visual.## Descripción

Carrito de compra desarrollado con HTML, CSS y JavaScript.
Permite consultar productos, seleccionar cantidades y calcular
el importe total.

## Cómo utilizarlo

1. Descargar el proyecto y descomprimirlo si está en formato ZIP.
2. Abrir index.html en un navegador.
3. Introducir las unidades deseadas de cada producto.
4. Confirmar el cambio haciendo clic fuera del campo para actualizar el total.

Es necesaria una conexión a Internet para cargar los productos.

## Organización del código

- index.html: estructura de la página.
- estilos.css: presentación visual.
- carrito.js: clase Carrito, petición a la API y actualización de la página.
- productos.json: catálogo de productos publicado en el repositorio.

La clase Carrito gestiona los productos, las cantidades y los cálculos,
sin acceder al DOM. La función mostrarProductos crea los elementos
de la página y gestiona los eventos de los campos de cantidad.

## Origen de los datos

Los productos se obtienen mediante fetch desde la API REST de GitHub,
que devuelve el contenido de productos.json del repositorio público.

## Comportamiento

- Las cantidades comienzan en cero.
- Solo se admiten cantidades enteras mayores o iguales a cero.
- Un campo vacío se interpreta como cero unidades.
- El total se actualiza al confirmar un cambio de cantidad.
- Se muestran mensajes durante la carga y si ocurre un error.
- Las cantidades no se conservan al recargar la página.

## Repositorio

https://github.com/sggbaaken/agoodshop-carrito
- carrito.js: clase Carrito, petición a la API y actualización de la página.
- productos.json: catálogo de productos publicado en el repositorio.

La clase Carrito gestiona los productos, las cantidades y los cálculos,
sin acceder al DOM. La función mostrarProductos crea los elementos
de la página y gestiona los eventos de los campos de cantidad.

## Origen de los datos

Los productos se obtienen mediante fetch desde la API REST de GitHub,
que devuelve el contenido de productos.json del repositorio público.

## Comportamiento

- Las cantidades comienzan en cero.
- Solo se admiten cantidades enteras mayores o iguales a cero.
- Un campo vacío se interpreta como cero unidades.
- El total se actualiza al confirmar un cambio de cantidad.
- Se muestran mensajes durante la carga y si ocurre un error.
- Las cantidades no se conservan al recargar la página.

## Repositorio

https://github.com/sggbaaken/agoodshop-carrito