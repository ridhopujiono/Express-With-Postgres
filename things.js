const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
    res.send(`GET ${req.params.name}`);
});
router.post('/', (req, res) => {
    res.send('POST request');
});

module.exports = router;