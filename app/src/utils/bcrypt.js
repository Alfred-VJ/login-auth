import bcrypt from 'bcrypt';

export function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

export function comparePasswords(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}
/*
En este código se está importando la librería bcrypt para poder crear un hash de la contraseña del usuario y 
compararlo con el hash almacenado en la base de datos.

La función hashPassword recibe como parámetro la contraseña del usuario en claro, utiliza la librería bcrypt 
para crear un hash y devuelve el hash creado.
La función comparePasswords recibe como parametro la contraseña del usuario en claro y el hash almacenado en 
la base de datos, utiliza la librería bcrypt para comparar ambos y devuelve un valor booleano que indica si son 
iguales o no.
De esta manera se puede asegurar que la contraseña del usuario no se almacena en claro en la base de datos y que
se está verificando la contraseña correcta al momento del login.
*/