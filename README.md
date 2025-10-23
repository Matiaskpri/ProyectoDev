# ProyectoDev

Tecnologías utilizadas
• 	Frontend: Angular 20 + Angular Material
• 	Backend: Node.js + Express
• 	Base de datos: MySQL
• 	Autenticación: JWT
• 	Estilos: Angular Material + CSS personalizado

 Funcionalidades implementadas
- Login con validación de token
- Listado de jugadores con paginación
- Filtro por club con autocompletado dinámico
- Exportación a Excel y CSV
- Detalle de jugador
- Alta y edición de jugadores
- Página de inicio y navegación clara
- Página de error para rutas inválidas


Pasos de desarrollo
- Configuración del backend con rutas protegidas y paginación
- Estructura del frontend con rutas y componentes standalone
- Implementación de filtros, autocompletado y exportación
- Mejora visual con Angular Material y navegación clara
- Pruebas en Postman con token JWT


Cómo ejecutar el proyecto
El front se inicia con ng serve 
El backend se inicia con node index.js
Tiene un usuario admin fijo para hacer y probar el login: (email:admin@fifa.com) y (contraseña:123456)

Reflexión personal
Este proyecto fue un gran desafío técnico y personal. Aunque me hubiera gustado sumar más funcionalidades, prioricé cumplir con los requerimientos básicos: autenticación, listado con filtros, exportación, navegación clara y visuales profesionales. Lo desarrollé en paralelo con mi trabajo y rutina, y aprendí muchísimo sobre arquitectura backend y frontend real.





This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
