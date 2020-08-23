const express = require('express');
const router = express.Router();
const RestaurantModel = require('../../models/restaurant');

//Create
router.get('/new', (req, res) => {
  res.render('create', { root: 1 });
});

// Read all
router.get('/', (req, res) => {
  //console.log(req.user);
  const userId = req.user._id;
  RestaurantModel.find({ userId })
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((err) => console.log(err));
});

//Search
router.get('/search', (req, res) => {
  const userId = req.user._id;
  const keyword = req.query.keyword;
  const reg = new RegExp(keyword, 'i'); // i 代表忽略大小寫

  return RestaurantModel.find({
    $and: [
      { userId },
      {
        $or: [
          { name: { $regex: reg } },
          { name_en: { $regex: reg } },
          { category: { $regex: reg } },
        ],
      },
    ],
  })
    .lean()
    .then((restaurants) => res.render('index', { restaurants, query: keyword }))
    .catch((err) => console.log(err));
});

//Popular
router.get('/popular', (req, res) => {
  return RestaurantModel.find()
    .sort({ rating: -1 })
    .lean()
    .then((restaurants) => res.render('popular', { restaurants, root: 1 }))
    .catch((error) => console.log(error));
});

module.exports = router;
