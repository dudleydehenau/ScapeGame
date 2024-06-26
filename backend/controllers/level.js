const { validationResult } = require('express-validator');

const Level = require('../modèles/level');

exports.getLevelData = (async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  try {
    const [levelData] = await Level.fetchAll();
    if (!levelData.length) {
      return res.status(404).json({ message: 'Level not found' });
    }
    res.status(200).json(levelData);
  } catch (error) {
    next(error);
  }
});

exports.searchLevels = (async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const searchTerm = req.query.term;
  
    try {
      const levels = await Level.searchByName(searchTerm);
      const levelData = levels[0].map(level => ({
        levelId: level.levelId,
        levelName: level.levelName,
      }));
      //console.log(`Found levels: ${JSON.stringify(levelData)}`);
      res.status(200).json(levels);
    } catch (error) {
      console.error(`Error occurred: ${error}`);
      next(error);
    }
});
