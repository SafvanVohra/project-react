const express = require('express');
const userController = require('../controller/user.controller');
const verifyToken = require('../utils/verifyUser');

const router = express.Router();

router.get('/test', userController.getTest);
router.post('/update/:id', verifyToken, userController.updateUser);
router.delete('/delete/:id', verifyToken, userController.deleteUser);

module.exports = router;
