const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API its working',
        status: 'welcome to CRUD App',
    });
});

const mahasiswaController = require('./siswaController');

router.route('/contacts').get(mahasiswaController.index).post(mahasiswaController.new);

module.exports = router;