const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');


//Lưu ý: index luôn để cuối cùng
router.get('/courses/html-css', siteController.search);
router.get('/', siteController.index);

module.exports = router;