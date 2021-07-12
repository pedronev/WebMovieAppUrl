const mongoose = require('mongoose');
const URI = 'mongodb+srv://user:Nevare2019z@cluster0.fggzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;