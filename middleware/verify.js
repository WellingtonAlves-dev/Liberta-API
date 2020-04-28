const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token) res.status(401).send("Acesso não autorizado!");
    jwt.verify(token, 'admin', (err, decode) => {
        // if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        // req.userID = decode.id;
        // console.log(decode.id);
        next();
    })
}

module.exports = verify;