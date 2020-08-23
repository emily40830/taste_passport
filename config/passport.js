const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = (app) => {
  // 初始化
  app.use(passport.initialize());
  app.use(passport.session());

  // local strategy setting
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passReqToCallback: true, //得到驗證後的訊息
      },
      (req, email, password, done) => {
        User.findOne({ email })
          .then((user) => {
            // 1. 使用者不存在
            if (!user) {
              console.log('使用者不存在');
              return done(
                null,
                false,
                req.flash('login_error_msg', 'Email is not registered!'),
              );
            }
            // 2. 用bcrypt比對密碼
            return bcrypt.compare(password, user.password).then((isMatch) => {
              if (!isMatch) {
                console.log('帳密不正確');
                return done(
                  null,
                  false,
                  req.flash(
                    'login_error_msg',
                    'Email or password is incorrect!',
                  ),
                );
                console.log(req.flash);
              }
              //3. 資料正確，成功登入
              return done(
                null,
                user,
                req.flash('success_msg', 'Login Successfully'),
              );
            });
          })
          .catch((err) => done(err, false));
      },
    ),
  );

  // facebook 登入策略
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK,
        profileFields: ['email', 'displayName'],
        auth_type: 'reauthenticate',
      },
      (accessToken, refreshToken, profile, done) => {
        const { name, email } = profile._json;
        User.findOne({ email }).then((user) => {
          if (user) return done(null, user);
          const randomPassword = Math.random().toString(36).slice(-8);

          return bcrypt
            .genSalt(10)
            .then((salt) => bcrypt.hash(randomPassword, salt))
            .then((hash) => User.create({ name, email, password: hash }))
            .then((user) => done(null, user))
            .catch((err) => done(err, false));
        });
      },
    ),
  );
  // serializeUser & deserializeUser
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .then((user) => done(null, user))
      .catch((err) => done(err, null));
  });
};
