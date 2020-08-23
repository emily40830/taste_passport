const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  restaurant_id: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  google_map: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  userId: {
    //關聯到User的object id
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true, // 延伸閱讀：搜尋db index
    required: true,
  },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
