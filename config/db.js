var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/p6gdz4', { useNewUrlParser: true });

module.exports = mongoose;