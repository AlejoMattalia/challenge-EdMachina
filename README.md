# Challenge - Ed Machina

Desarrollé el dashboard para PetCare siguiendo al detalle el diseño del equipo de UX/UI. Se pueden visualizar el porcentaje de actividad, sueño y bienestar con filtros por día, semana, mes, trimestre, semestre y año. También incorporé un calendario de vacunación, un chat y una sección de estadísticas donde se puede seleccionar y analizar el nivel de estrés, pulso, temperatura y calorías por día, mes o año.

## Descripción de la Aplicación

### Autenticación

- **Inicio de Sesión**: Al ingresar a la aplicación, deberás iniciar sesión usando tu email o nombre de usuario y contraseña.
- **Registro**: Si no tienes una cuenta, puedes registrarte proporcionando tu nombre de usuario, email, contraseña y un confirmar contraseña.
- **Recuperar Contraseña**: Si olvidaste tu contraseña, podés restablecerla ingresando tu email. Primero, verificá que el email exista y, si es válido, ingresá una nueva contraseña y confirmala para completar el proceso.

### Funcionalidades del Usuario

Una vez dentro de la aplicación, tendrás acceso a las siguientes secciones:

- **Navbar**:

  - Buscador y las opciones son las rutas, ejemplo, /dashboard.
  - Abrir el dropdown de notificaciones.

- **Sidebar**:

  - Navega al **Home** desde el logo.
  - Redireccionar a las distintas rutas.
  - Cerrar sesión

- **Dashboard**:
  - Visualizar el porcentaje de actividad, sueño y bienestar con filtros por día, semana, mes, trimestre, semestre y año.
  - Calendario de vacunación que se puede filtrar por **type** (Overdue, Noncore, Core).
  - Chat, ver el mensaje completo desde un modal.
  - Estadísticas donde se puede seleccionar y analizar el nivel de estrés, pulso, temperatura y calorías por día, mes o año.

## Tecnologías

- **Vue 3**: Framework progresivo para la construcción de interfaces de usuario.
- **Vite**: Entorno de desarrollo rápido y ligero para proyectos con Vue.
- **Typescript**: Superset de JavaScript que añade tipado estático y mejora la mantenibilidad del código.
- **Firebase**: Plataforma de backend como servicio (BaaS) que proporciona autenticación, base de datos en tiempo real y más.

## Librerías

- **Apexcharts**: Librería para la creación de gráficos interactivos y personalizables.
- **bcryptjs**: Librería para el cifrado de contraseñas y gestión de seguridad.
- **vue-router**: Sistema de enrutamiento oficial para aplicaciones Vue.js.
- **vue3-toastify**: Librería para mostrar notificaciones en aplicaciones Vue 3.
- **naive-ui**: Conjunto de componentes UI accesibles y personalizables para Vue 3.

## Rutas de la Aplicación

- **/login** - Página de inicio de sesión.
- **/register** - Página de registro de usuarios.
- **/forgot-password** - Página para recuperar la contraseña.
- **/dashboard** - Página del dashboard.
- **/** - Home (No hay nada, para probar el enrutado).
- **/pet-profile** - Pet profile (No hay nada, para probar el enrutado)..

## Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para levantar el proyecto en tu entorno local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AlejoMattalia/challenge-EdMachina.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd challenge-EdMachina
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno, creando un archivo `.env` con la siguientes variables:

   ```bash
   VITE_FIREBASE_API_KEY=AIzaSyDqhoUDMLl-pGDyVQ6b_KocyCdmYAJmKI8
   VITE_FIREBASE_AUTH_DOMAIN=challenge-edmachina.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=challenge-edmachina
   VITE_FIREBASE_STORAGE_BUCKET=challenge-edmachina.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=199941441291
   VITE_FIREBASE_APP_ID=1:199941441291:web:d7d7bcbff603a212c7040e
   ```

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

El servidor se ejecutará por defecto en el puerto 5173. Usar una pantalla de al menos 1750px, ya que las medidas fueron tomadas según el Figma.
