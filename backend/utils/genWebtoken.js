var jwt = require('jsonwebtoken');

const getWebToken = (user) => {
    const privateKey = process.env.APP_SECRET_KEY;
    jwt.sign(
    {
        _id:user.id,
        name:user.name,
        email:user.email
    }, 
    privateKey, function(err, token) {
        console.log(token);
        return token
    });
}

module.exports = getWebToken;