const { connect } = require('mongoose');

module.exports = async () => {
  await connect('mongodb://localhost/networking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return connection;
};