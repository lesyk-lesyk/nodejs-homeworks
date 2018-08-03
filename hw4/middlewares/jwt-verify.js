import * as jwt from 'jsonwebtoken';
import { jwtSecret } from '../config';

export function checkToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  console.log(req.headers.authorization);
  if (token) {
    jwt.verify(token, jwtSecret, (err) => {
      if (err) {
        res.status(403).json({
          code: 403,
          message: 'Failed to authenticate token.'
        });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({
      code: 403,
      message: 'No token provided.'
    })
  }
}
