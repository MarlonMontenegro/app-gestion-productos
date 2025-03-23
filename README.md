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


## Imágenes


* **Formulario de agregar producto**:

    ![SaveProducts](https://github.com/user-attachments/assets/c342c18f-fef9-4b73-b823-ef78b8c10556)


* **Editar Productos**:

   ![UpdateProducts](https://github.com/user-attachments/assets/0ce6111d-7d51-49f3-99d6-473f5df430c5)


* **Ejemplo de búsqueda**:

    ![SearchProducts](https://github.com/user-attachments/assets/69bdf4b9-f2b5-463f-bde2-b7ad6c48fbe2)

* **Eliminar Productos**:
  
    ![DeleteProducts](https://github.com/user-attachments/assets/4ff7f4c9-5c87-4683-8cf2-9d3f3d0f122b)


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




