const mongoose = require('mongoose');

mongoose.connect(process.env.connecT.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro de conexão: ', err));

  module.exports = mongoose;
