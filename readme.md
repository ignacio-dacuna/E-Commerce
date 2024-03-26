# Dacu-Tienda

Dacu-Tienda una plataforma de comercio electrónico especializada en la venta de videojuegos. Explora una amplia selección de títulos para todas las consolas populares, descubre ofertas exclusivas y disfruta de una experiencia de compra sin problemas.

## Como es la app??

### Pantalla de inicio de sesion o principal

- **Caracteristicas:** en este apartado de la app podemos encotrar un pestaña en la cual podesmos hacer dos cosas, loguearonos si es que no tenemos cuenta o iniciar sesion si es que ya la tenemos


<img src="./screenshot/Screenshot_20240326-170343_Expo Go.jpg" width="200" >
<img src="./screenshot/Screenshot_20240326-170350_Expo Go.jpg" width="200" >

### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

## Con que mas cuenta??
### **Home**
La aplicación cuenta con una pantalla principal (home) que muestra todas las categorías de juegos disponibles en el momento. En esta pantalla, los usuarios pueden explorar y acceder fácilmente a las diferentes categorías de juegos disponibles en la plataforma.
### **Carrito**  
La sección "Carrito" de la aplicación es donde los usuarios pueden revisar y gestionar los productos que han seleccionado para comprar. Aquí pueden ver una lista de los artículos agregados, así como modificar cantidades, eliminar elementos o proceder al proceso de pago. Es una parte fundamental para completar una experiencia de compra satisfactoria
### **Ordenes**  
El apartado de "Órdenes de Compra" en la aplicación proporciona a los usuarios un resumen de sus transacciones pasadas. Aquí pueden acceder a información relevante sobre las órdenes recientes, incluyendo detalles como la fecha de compra y los productos adquiridos. Esta sección sirve como referencia rápida para los usuarios, permitiéndoles recordar fácilmente sus compras anteriores.

<img src="./screenshot/Screenshot_20240326-162250_Expo Go.jpg" width="200" >
<img src="./screenshot/Screenshot_20240326-162309_Expo Go.jpg" width="200" >
<img src="./screenshot/Screenshot_20240326-162314_Expo Go.jpg" width="200" >

## Detalles de la app
- Como ya dijimos anteriormente, en la seccion home encotramos la categorias de los juegos que tenemos en disposicion en la tienda, a la hora de tocarlos, encotraremos un grupo de cards que contienen los juegos de la misma categpria, estas cards incluyen tanto el titulos del juego como una foto del mismo

<img src="./screenshot/Screenshot_20240326-162422_Expo Go.jpg" width="200" >

- Ademas contamos con una funcion, que a la hora de tocar cada card nos llevara a una pantalla en donde se muestra la portada del juego, la categoria y para que consolas esta disponible
- contiene tanto el precio del mismo y un boton que nos va a dejar comprarlo o llevarlo al carrito, a la hora de tocarlo nos saldra un alert diciendonos que la compra fue exitosa 

<img src="./screenshot/Screenshot_20240326-111821_Expo Go (1).jpg" width="200" >

## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-aplicacion.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`

## Contacto

Para preguntas o soporte, contacta a ignaciodacuna9@gmail.com.