# Carrito de Compras

Esta es una aplicación de carrito de compras desarrollada con React. Permite a los usuarios agregar productos a su carrito, editarlos o eliminarlos. También muestra un resumen de las compras realizadas.

## Funcionalidades

- Agregar productos al carrito.
- Editar productos en el carrito.
- Eliminar productos del carrito.
- Mostrar un resumen de las compras realizadas, incluyendo el total gastado y la cantidad de items comprados.

## Componentes

### `CompraCard`

Este componente muestra los detalles de un producto en el carrito. Permite editar o eliminar el producto.

### `CompraForm`

Este componente proporciona un formulario para agregar o editar un producto en el carrito. Guarda los datos ingresados en el Local Storage.

### `Compras`

Este componente muestra la lista de productos en el carrito. Utiliza los componentes `CompraCard` y `CompraForm`. Permite agregar, editar y eliminar productos. También muestra un modal para agregar o editar productos.

### `Modal`

Este componente es un modal que se muestra cuando se agrega o edita un producto en el carrito. Contiene el formulario `CompraForm`.

### `IconButton`

Este componente muestra un botón con un icono. Se utiliza para activar el modal de agregar o editar productos.

### `ResumenCompras`

Este componente muestra un resumen de las compras realizadas. Muestra el total gastado y la cantidad de items comprados.

### `Navbar`

Este componente muestra la barra de navegación de la aplicación. Incluye un ícono y el título del carrito de compras.

### `Content`

Este componente es el contenedor principal de la aplicación. Contiene los componentes `Compras`, `ResumenCompras` y `IconButton`.

## Uso

1. Clona el repositorio.
2. Instala las dependencias con el siguiente comando:

```
npm install

```
3. Ejecuta la aplicación con el siguiente comando:

```
npm run dev

```


## Notas

- Los datos de las compras se almacenan en el Local Storage para que persistan incluso después de cerrar la aplicación.
- La aplicación utiliza Tailwind CSS para estilos y es responsive, adaptándose a diferentes tamaños de pantalla.

¡Disfruta de tu experiencia de compra con nuestra aplicación de carrito de compras!
