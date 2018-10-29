var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/User',{ useNewUrlParser:true},{soft:true})
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connect error:'));
db.once('open',function(){

})

module.exports = mongoose