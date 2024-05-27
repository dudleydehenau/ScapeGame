const express = require('express');
const { param } = require('express-validator');
const scoresController = require('../controllers/classement');

const router = express.Router();

// Route pour récupérer le classement
router.get('/:levelId',
  [
    param('levelId').isInt()
  ],
  scoresController.getClassement
);

module.exports = router;
