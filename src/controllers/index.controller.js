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

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows)
}

const createUser = async (req, res) => {
    const {name, email, post} = req.body; //trae los datos que la aplicacion cliente va a traer 
    const response = await pool.query('INSERT INTO users (name, email, post) VALUES ($1, $2, $3)', [name, email, post]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
};

module.exports = {
    getUsers,
    createUser,
    getUserById
};