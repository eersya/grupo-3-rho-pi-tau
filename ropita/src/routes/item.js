
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.list);

router.get('/item/add', itemsController.add);
router.post('/item/add', itemsController.create);

router.get('/item/:id', itemsController.detail);
router.get('/item/:id/update', itemsController.update);
router.update('/item/:id/update', itemsController.upgrade);
router.delete('/item/:id/delete', itemsController.delete);
