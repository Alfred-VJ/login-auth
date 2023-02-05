# API de Creación de Usuarios con Roles y Autenticación
************************************************************

## Características Principales

*Roles de usuario: administrador, moderador, usuario y invitado
*Prioridad de roles: administrador, moderador, usuario, invitado
*Autenticación mediante JWT
*Protección de contraseñas con hash
*Base de datos: PostgreSQL
*ORM: Sequelize
*Transpilación con Babel
**************************************************************************

## Descripción detallada

Este proyecto es una API de creación de usuarios con roles y autenticación. Se han definido cuatro roles de usuario: administrador, moderador, usuario y invitado, 
con una prioridad establecida en el orden mencionado.

Para garantizar la autenticación de los usuarios, se ha implementado el sistema JWT (JSON Web Token). Además, para proteger las contraseñas de los usuarios, 
se ha aplicado el hash de las mismas utilizando Node.js Express.

La base de datos utilizada es PostgreSQL y para facilitar la manipulación de la información se ha utilizado Sequelize como ORM (Object-Relational Mapping).

Para garantizar la compatibilidad con versiones antiguas de JavaScript, se ha utilizado Babel como tecnología de transpilación. Con esto, se pueden utilizar las
últimas características de JavaScript en el desarrollo del proyecto, asegurándose de que pueda ser ejecutado en una amplia gama de entornos.

En conclusión, este proyecto de API de creación de usuarios con roles y autenticación combina Node.js Express, JWT, PostgreSQL, Sequelize y Babel para ofrecer 
una experiencia segura y compatible para los usuarios.
