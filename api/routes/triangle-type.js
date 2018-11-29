const express = require('express');

const router = express.Router();
const TriangleType = require('../../lib/TriangleType');

/* check type of triangle. */
router.post('/', async (req, res, next) => {
  const { a, b, c } = req.body;
  try {
    const response = await TriangleType(a, b, c);
    return res.json({ type: response });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
