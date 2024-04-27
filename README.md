# Proyecto Almacenadora de Productos

Este es un proyecto de una aplicación web desarrollada con React en el frontend y Node.js con Express en el backend, utilizando MongoDB como base de datos. La aplicación permite a los usuarios crear, leer, actualizar y eliminar tareas, así como marcarlas como completadas o incompletas.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. **Frontend**: Desarrollado con React, se encuentra en el repo [`frontend`](https://github.com/kinal-team-1/almacenadora-frontend).
2. **Backend**: Desarrollado con Node.js y Express, se encuentra en este repo, [`backend`](https://github.com/kinal-team-1/almacenadora-backend).

## Contribución al Proyecto

Para contribuir al proyecto, sigue estos pasos:

1. **Crea una rama a partir de `develop`**:
   - Asegúrate de tener la rama `develop` actualizada: `git checkout develop && git pull`
   - Crea una nueva rama con un nombre descriptivo: `git checkout -b <BRANCH_TYPE>/<PREFIX>-<INCIDENCIA>/<NOMBRE_DESCRIPTIVO>`
   en donde `BRANCH_TYPE` puede ser uno de [`feature`, `fix`, `hotfix`], `PREFIX` debe ser el identificador del proyecto, `INCIDENCIA` debe ser el numero de task asignada, y `NOMBRE_DESCRIPTIVO` es un nombre a tu gusto describiendo el proposito de la rama
   ejemplo:
   
   `git checkout -b feature/ALM-4/eliminar-tarea-endpoint`

2. **Realiza tus cambios**:
   - Realiza los cambios necesarios en tu rama, ya sea en el frontend, backend o ambos.

3. **Verifica el código**:
   - Asegúrate de que tu código siga las pautas de estilo y lint configuradas.
   esto lo puedes hacer con `npm run lint`

4. **Realiza un pull request a `develop`**:
   - Haz push de tus cambios a tu rama remota: `git push origin <RAMA>` o `git push --set-upstream origin <RAMA>`
   - Crea un pull request desde tu rama a `develop` en GitHub.
   - Asegúrate de que el CI (Continuous Integration) pase correctamente antes de pedir la code review.

## Configuración del Proyecto

2. Instala las dependencias: `npm install`
3. Este paso es opcional, ya que por defecto se carga `.env.example`, pero, si deseas configurar el puerto y otras variables de entorno, crea un archivo `.env` , esto basado en `.env.example`, para que se sobrescriban las variables de entorno.
4. Inicia el servidor de desarrollo: `npm run dev`

El servidor estará disponible en `http://localhost:3000`.

## Despliegue

El despliegue de la aplicación se realizará automáticamente en un entorno de producción cuando se fusionen los cambios en la rama `develop`.

## Recursos y Documentación

Si tienes alguna pregunta o necesitas ayuda, no dudes en preguntar al equipo de desarrollo.
