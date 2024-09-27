const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(403).send('Token is required');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Invalid Token');
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  if (req.role !== 'admin') return res.status(403).send('Require Admin Role!');
  next();
};

exports.isSuperAdmin = (req, res, next) => {
  if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');
  next();
};

