const path = require ('path');

const express = require ('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    //retornando a view com a ajuda da biblioteca da linha 1
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  });
 
module.exports = router;