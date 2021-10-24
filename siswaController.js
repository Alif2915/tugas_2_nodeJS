Contact = require('./siswaModel');

exports.index = (req, res) => {
    Contact.get((err, contact) => {
        if (err){
            res.json({
                status: 'error',
                message: err,
            });
        }
        res.json({
            status: 'success',
            message: 'Data siswa berhasil diambil',
            data: contact,
        });
    });
};

exports.new = (req, res) => {
    let contact = new Contact();
    contact.nama = req.body.nama ? req.body.nama : contact.nama;
    contact.tanggallahir = req.body.tanggallahir;
    contact.jeniskelamin = req.body.jeniskelamin;
    contact.hobi = req.body.hobi;
    contact.save().then((data) => {
        res.json({
            status: 'Success',
            message: 'Siswa berhasil ditambahkan',
            contact: data,
        });
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'Internal server error',
        });
    });
};