const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decoded);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

module.exports = { requireAuth };