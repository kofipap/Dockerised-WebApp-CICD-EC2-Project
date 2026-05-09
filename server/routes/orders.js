const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {

  try {

    const order = new Order(req.body);

    await order.save();

    res.json({
      message: 'Order placed successfully'
    });

  } catch (error) {

    res.status(500).json({
      message: 'Server Error'
    });
  }
});

module.exports = router;