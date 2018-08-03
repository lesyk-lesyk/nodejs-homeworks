var express = require('express')
var router = express.Router()
import { checkToken } from '../middlewares/jwt-verify';

import { User } from '../models/user';
const users = new User();

router.get('/', checkToken, (req, res) => {
  res.json(users.getAllUsers());
});

module.exports = router