const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    owner: {
        type: String,
        unique: true,
        trim: true
    },
    category: {
        type: String,
        unique: true,
        trim: true
    }
}, {
    timestamps: true,
    seviceKeys: false
});


module.exports = mongoose.model('Shop', shopSchema);