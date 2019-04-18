const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/p6gdz4', { useCreateIndex : true, useNewUrlParser: true });

module.exports = mongoose;