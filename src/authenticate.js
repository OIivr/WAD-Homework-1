// TODO: authenticate user

const jwt = require('jose'); 

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        req.user = decoded;
        next(); 
    });
};

module.exports = {
    authenticateUser,
    JWT_SECRET,
};
