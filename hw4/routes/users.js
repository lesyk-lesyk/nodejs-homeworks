var express = require('express')
var router = express.Router()

import { User } from '../models/user';
const users = new User();

router.get('/', (req, res) => {
  res.json(users.getAllUsers());
});

module.exports = router