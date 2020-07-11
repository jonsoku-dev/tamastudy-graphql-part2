const mongoose = require('mongoose');

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username은 필수입니다. '],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email은 필수입니다. '],
      trim: true,
      unique: true,
      validate: [validateEmail, 'email형식에 맞지 않습니다. '],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email형식에 맞지 않습니다. '],
    },
    password: {
      type: String,
      required: [true, 'password는 필수입니다. '],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);
