require('dotenv').config();
const db = require('../../config/mongoose');
const Restaurant = require('../restaurant');
const User = require('../user');
const bcrypt = require('bcryptjs');
const data = require('./restaurant.json');

const restaurants = data.results;
const users = data.users;

db.once('open', () => {
  //return console.log(users.map((u) => u.email));
  //console.log('mongodb connected!');
  User.find({
    email: { $in: users.map((u) => u.email) },
  }).then((user) => {
    //console.log(user);
    if (user.length) {
      console.log('email is existed!');
      process.exit();
    } else {
      const allPromises = [
        createSeed(users[0], 0, 3),
        createSeed(users[1], 3, 3),
      ];
      return Promise.all(allPromises)
        .then(() => {
          console.log('Sucessfully');
          //如果不加setTimeout 就會有幾筆resaurant data建立不起來
          return process.exit();
        })
        .catch((err) => console.log(err));
    }
  });
});

// 種子資料產生器：user object, 起始, 數量
const createSeed = (user, start, num) => {
  return new Promise((resolve, reject) => {
    const { name, email, password } = user;
    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) =>
        User.create({
          name,
          email,
          password: hash,
        }),
      )
      .then((user) => {
        const userId = user._id;
        console.log(userId);
        //resolve(
        return Promise.all(
          Array.from({ length: num }, (_, i) => {
            //console.log(i + start);

            return Restaurant.create({
              restaurant_id: restaurants[i + start].id,
              name: restaurants[i + start].name,
              name_en: restaurants[i + start].name_en,
              category: restaurants[i + start].category,
              image: restaurants[i + start].image,
              location: restaurants[i + start].location,
              phone: restaurants[i + start].phone,
              google_map: restaurants[i + start].google_map,
              rating: restaurants[i + start].rating,
              description: restaurants[i + start].description,
              userId,
            });
            //}).then(() => resolve(console.log(i + start)));
          }),
        )
          .then(() => resolve(console.log('create data from', start)))
          .catch((err) => reject(err));
        //);
      });
  });
};
