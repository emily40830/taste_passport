const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');
require('handlebars-helpers')();

const session = require('express-session');
const flash = require('connect-flash');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./config/mongoose');
const usePassport = require('./config/passport');

const app = express();
const port = process.env.PORT;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, //使用者每次發送request時，要不要去更新session
    saveUninitialized: true, //把未初始化的session初始化並建立
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      math: function (lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
          '+': lvalue + rvalue,
          '-': lvalue - rvalue,
          '*': lvalue * rvalue,
          '/': lvalue / rvalue,
          '%': lvalue % rvalue,
        }[operator];
      },
      equal: function (str1, str2) {
        return str1 === str2;
      },
    },
  }),
);
app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));

usePassport(app);
app.use(flash());

app.use((req, res, next) => {
  //console.log(req.user);
  //console.log(req.isAuthenticated());
  res.locals.isAuthenticated = req.isAuthenticated(); // 把 req.isAuthenticated() 回傳的布林值，交接給 res 使用
  res.locals.user = req.user; //把使用者資料交接給 res 使用
  res.locals.success_msg = req.flash('success_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  res.locals.login_error_msg = req.flash('login_error_msg');
  res.locals.create_err = req.flash('create_err');
  return next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`Running on the localhost:${port}`);
});
