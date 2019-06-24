const router = require('express').Router();

const Kitchen = require('../data/models/kitchen-model');

// GET --> /kitchen
router.get('/', async (req, res) => {
  try {
    const kitchen = await Kitchen.find();
    res.status(200).json(kitchen);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET --> /kitchen/id
router.get('/:id', async (req, res) => {
  try {
    const kitchen = await Kitchen.findById(req.params.id);
    if (kitchen) {
      res.status(200).json(kitchen);
    } else {
      res.status(404).json({ message: 'Kitchen not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: `${error}` });
  }
});

// POST --> /kitchen
router.post('/', async (req, res) => {
  try {
    const kitchen = await Kitchen.add(req.body);
    res.status(201).json(kitchen);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT --> /kitchen/id
router.put('/:id', async (req, res) => {
  try {
    const kitchen = await Kitchen.update(req.params.id, req.body);
    if (kitchen) {
      res.status(200).json({ message: 'Kitchen updated' });
    } else {
      res.status(404).json({ message: 'Kitchen could not be found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE --> /kitchen/id
router.delete('/:id', async (req, res) => {
  try {
    const count = await Kitchen.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'Kitchen deleted' });
    } else {
      res.status(404).json({ message: 'Unable to find kitchen' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
