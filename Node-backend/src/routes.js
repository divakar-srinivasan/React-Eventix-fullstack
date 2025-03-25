// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createUser } = require('./controllers/userController');
const { createEvent, getAllEvents } = require('./controllers/eventController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/login', createUser);
router.post('/add', upload.single('image'), createEvent);
router.get('/get', getAllEvents); 

module.exports = router;
