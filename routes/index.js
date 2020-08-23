const express = require('express');
const router = express.Router();

const home = require('./modules/home');
const restaurants = require('./modules/restaurants');
const sort = require('./modules/sort');
const favorite = require('./modules/favorite');
const users = require('./modules/users');
const auth = require('./modules/auth');
const { authenticator } = require('../middleware/auth');

router.use('/restaurants', authenticator, restaurants);
router.use('/users', users);
router.use('/auth', auth);
router.use('/sort', sort);
router.use('/favorite', favorite);
router.use('/', authenticator, home);

module.exports = router;
