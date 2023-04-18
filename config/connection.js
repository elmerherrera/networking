const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/networking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });



module.exports =  connection