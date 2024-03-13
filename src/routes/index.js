const { Router } = require('express');
const router = Router();

router.get('/users', (req, res) => { // creamos una ruta usuarios con dos parametros donde res va a tener la consulta y se la enviaremos a usuarios
    res.send('users');
})
module.exports = router;