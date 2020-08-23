const express = require('express');
const router = express.Router();
const RestaurantModel = require('../../models/restaurant');

router.get('/', (req, res) => {
  const userId = req.user._id;
  return RestaurantModel.find({ userId, isFavorite: true })
    .lean()
    .then((restaurants) => res.render('favorite', { restaurants, root: 1 }))
    .catch((err) => console.log(err));
});

router.put('/:id', (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  return RestaurantModel.findOne({ _id, userId })
    .then((restaurant) => {
      restaurant.isFavorite = false;
      return restaurant.save();
    })
    .then(() => res.redirect('./'))
    .catch((err) => console.log(err));
});

module.exports = router;
