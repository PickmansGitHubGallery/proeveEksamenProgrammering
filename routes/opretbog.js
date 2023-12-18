const express = require('express');
const router = express.Router();
const db = require('../database/db.js');


router.post('/', async (req, res) => {
    const { title, forfatter, forlag, udgave, pris} = req.body;
    try {
      const bog = await db.sellBook(title, forfatter, forlag, udgave, pris);
      //res.render('confirmation', { title: 'Confirmation', packageID: packageID });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  


module.exports = router;