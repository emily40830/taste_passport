# tasteBuds_passport

使用 node.js + Express 創建的餐廳瀏覽頁面
(update on 8/23)新增第三方登入功能：FaceBook
(update on 8/23)利用 passport 新增登入 註冊功能
(update on 5/21)新增收藏功能  
(update on 5/20)優化 sorting 方式  
(update on 5/17)重構路由  
(update on 5/16)串連 mongodb 提供資料的讀寫功能

## 專案總覽 OverView

![](https://github.com/emily40830/tasteBuds_express/blob/refactor/public/img/sort.png)

## 專案特色 Features

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
git clone https://github.com/emily40830/tasteBuds_express.git
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

- Node.js: v10.16.0
- Express: v4.17.1
- Express-Handlebars: v4.0.4
- Mongoose: v5.9.14
- method-override: v3.0.0
- handlebars-helpers: v0.10.0

## Author

Qi-Hua(Emily) Wang
