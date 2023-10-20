const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://khareharsh26:kaliasotdam026@cluster0.6iojdda.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
