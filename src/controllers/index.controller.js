const { Pool } = require('pg'); // CONEXION CON POSTGRESS conjunto de conexiones que se pueden utilizar a medida que van haciendo peticiones al servidor
const pool = new Pool ({ //Aqui se crea la conexion con la BD 
    host:'localhost',
    user: 'postgres',
    password: '0',
    database: 'socialnetwork',
    port: '5432'
});

const getUsers = async (req, res) => { // creamos una ruta usuarios con dos parametros donde res va a tener la consulta y se la enviaremos a usuarios
    const response = await pool.query('SELECT * FROM users'); //obtenemos los datos consultados y los guardamos en response
    // console.log(response.rows)
    res.status(200).json(response.rows); // le mandamos los datos a res por medio de un json en renglones
}

module.exports = {
    getUsers
};