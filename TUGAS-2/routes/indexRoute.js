const express = require("express");
const app = express();
let products = require("../products");

const router = express.Router();

const controller = require('../controllers/itemsController.js');

router.get("/", controller.getItems);

router.post("/", controller.postItems);

router.get("/:id", controller.getItemsbyID);

router.delete('/:id', controller.deleteItems);

router.patch('/:id', controller.updateItems);

module.exports = router;