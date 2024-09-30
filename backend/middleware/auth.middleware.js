const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Verify Token
exports.verifyToken = async(req, res, next) => {

 try{

  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).send('Token is required');
  }
  // Verify Token and Decode
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch User from DB (if necessary)
      const user = await User.findById(decoded.userId);
      if (!user){
       return res.status(404).send('User not found');
      }  
  
      // Attach user information and role to request
      req.userId = user._id;
      req.role = user.role;
      
      // Proceed to the next middleware
      next();
    } catch (err) {
      return res.status(401).send('Invalid Token');
    }
  };
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).send('Invalid Token');
//     req.userId = decoded.userId;
//     req.role = decoded.role;
//     next();
//   });  
// };

// Role check for Admin and SuperAdmin
exports.isAdminOrSuperAdmin = (req, res, next) => {
  if (req.role === 'admin' || req.role === 'superadmin') {
    next();
  } else {
    return res.status(403).send('Require Admin or SuperAdmin Role!');
  }
};

// Only allow SuperAdmin to edit and delete
exports.isSuperAdmin = (req, res, next) => {
  if (req.role === 'superadmin') {
    next();
  } else {
    return res.status(403).send('Require SuperAdmin Role!');
  }
};
