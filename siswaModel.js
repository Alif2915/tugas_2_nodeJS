const mongoose = require('mongoose');

const mahasiswaSchema = mongoose.Schema({
    create_date: {
        type: Date,
        default: Date.now(),
    },
    nama: {
        type: String,
        required: true,
    },
    tanggallahir: {
        type: Date,
        required: true,
    },
    jeniskelamin: String,
    hobi: String,
});

const Contact = module.exports = mongoose.model('data', mahasiswaSchema);
module.exports.get = (callback, limit) => {
    Contact.find(callback).limit(limit);
}