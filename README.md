# tasteBuds_passport

使用 node.js + Express 創建的餐廳瀏覽頁面  
利用 passport 新增登入 註冊功能  
(update on 8/23)新增第三方登入功能：FaceBook  
(update on 5/21)新增收藏功能  
(update on 5/20)優化 sorting 方式  
(update on 5/17)重構路由  
(update on 5/16)串連 mongodb 提供資料的讀寫功能

## 專案總覽 OverView

![login](https://github.com/emily40830/taste_passport/blob/master/public/img/login.png)
![all](https://github.com/emily40830/tasteBuds_/blob/refactor/public/img/sort.png)

## 專案特色 Features

- (update on 8/22) 加入登入與註冊功能，所有服務皆可綁定帳號
- (update on 5/21) 新增收藏餐廳功能
- (update on 5/17) 增加依照不同餐廳屬性排序的功能
- (update on 5/16) 增加新增餐廳的選項
- (update on 5/16) 增加修改餐廳資訊的選項
- (update on 5/16) 增加刪除餐廳資訊的選項
- 搜尋想要的餐廳，關鍵字不限於英文或中文，搜尋範圍包含分類、餐廳名稱等
- RWD 介面讓您瀏覽時有更好的使用者體驗
- 熱門店家可以迅速讓您知道評價最好的前幾名店家

## 啟動方式 How to install

1. 將專案 clone 到本地端

```
git clone https://github.com/emily40830/tasteBuds_passport.git
```

2. 進入到專案資料夾後，安裝 packages(依照 package.json 的項目安裝)

```
npm install
```

3. 透過 nodemon 啟動專案

```
npm run dev
```

4. 在 terminal 可以看到 `Running on the localhost:3000`，開啟瀏覽器在網址列輸入 localhost:3000 或點[這裡](http://localhost:3000)

- p.s: 也可透過 `npm start`啟動伺服器

5. 另開一終端機視窗，啟動資料庫並放入種子資料

```
npm run seed
```

## 開發環境 Development environment

- bcryptjs: v2.4.3
- body-parser: v1.19.0
- connect-flash": v0.1.1,
- dotenv: v8.2.0,
- express: v4.17.1,
- express-handlebars: v5.1.0,
- express-session: v1.17.1,
- handlebars-helpers: v0.10.0,
- method-override: v3.0.0,
- mongoose: v5.10.0,
- passport: v0.4.1,
- passport-facebook: v3.0.0,
- passport-local: v1.0.0

## Author

Qi-Hua(Emily) Wang
