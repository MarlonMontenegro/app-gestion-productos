## Inventario EXPRESS - REACT

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Imágenes](#imágenes)

## Descripción

Este es un proyecto de gestión de productos e inventarios, donde los usuarios pueden agregar, actualizar, eliminar y comprar productos. Además, se incluye una funcionalidad de búsqueda por cantidad de productos en stock. El proyecto está desarrollado con React para el frontend y utiliza una API en Node.js para manejar las operaciones con productos.

## Características

-   **Búsqueda de productos por cantidad**: Los usuarios pueden buscar productos en el inventario filtrando por la cantidad disponible.
-   **Agregar productos**: Los usuarios pueden agregar productos con información como nombre, descripción, precio y cantidad.
-   **Editar productos**: Los productos pueden ser editados con nueva información.
-   **Eliminar productos**: Los productos se pueden eliminar de la base de datos.
-   **Comprar productos**: Los usuarios pueden realizar compras y actualizar la cantidad disponible de cada producto.

## Tecnologías utilizadas

* **Frontend**: React, Bootstrap, Axios
* **Backend**: Node.js, Express, Mongoose
* **Base de datos**: MongoDB
* **API de notificaciones**: React Toastify
* **Otros**: React Hooks (useState, useEffect) para manejar el estado.

## Instalación

Sigue estos pasos para clonar el repositorio y poner en marcha el proyecto localmente:

1.  Clona este repositorio:

    ```bash
    git clone [https://github.com/tu_usuario/tu_repositorio.git](https://github.com/tu_usuario/tu_repositorio.git)
    ```

## Frontend

1.  Navega a la carpeta del proyecto:

    ```bash
    cd tu_repositorio
    ```

2.  Navega a la carpeta del frontend:

    ```bash
    cd frontend
    ```

3.  Instala las dependencias del frontend:

    ```bash
    npm install
    ```

4.  Inicia el servidor de desarrollo para el frontend:

    ```bash
    npm start
    ```

## Backend

1.  Navega a la carpeta del backend:

    ```bash
    cd backend
    ```

2.  Instala las dependencias del backend:

    ```bash
    npm install
    ```

3.  Asegúrate de tener MongoDB en ejecución en tu máquina o usa un servicio de base de datos en la nube como MongoDB Atlas. Si estás usando MongoDB localmente, puedes iniciar el servicio con:

    ```bash
    mongod
    ```

4.  Inicia el servidor del backend:

    ```bash
    npm start
    ```

Ahora el backend debería estar corriendo en `http://localhost:5000`.

## Imágenes

Aquí puedes agregar capturas de pantalla o imágenes del proyecto.

* **Formulario de agregar producto**:

    ![SaveProducts](https://github.com/user-attachments/assets/c342c18f-fef9-4b73-b823-ef78b8c10556)


* **Lista de productos**:

    ![Lista de productos](ruta/a/la/imagen_lista_productos.png)

* **Ejemplo de búsqueda**:

    ![Ejemplo de búsqueda](ruta/a/la/imagen_busqueda.png)

Asegúrate de reemplazar `ruta/a/la/imagen_principal.png`, etc., con las rutas reales de tus imágenes. Si quieres, puedes añadir más imágenes para mostrar las distintas funcionalidades del proyecto.
