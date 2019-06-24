const router = require('express').Router();

const Item = require('../data/models/item-model');

// GET --> /item
router.get('/', async (req, res) => {
  try {
    const item = await Item.find(req.id);
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET --> /item/:id
router.get('/:id', async (req, res) => {
  const kitchenID = req.id;
  try {
    const item = await Item.findById(req.params.id);
    if (item && `${item.kitchen_id}` === kitchenID) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST --> /item
router.post('/', async (req, res) => {
  try {
    const item = await Item.add(req.body);
    if (item) {
      res.status(201).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT --> /item/id
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.update(req.params.id, req.body);
    if (item) {
      res.status(200).json({ message: 'Item updated' });
    } else {
      res.status(404).json({ message: 'Item could not be found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE --> /item/id
router.delete('/:id', async (req, res) => {
  try {
    const count = await Item.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Unable to find item' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
