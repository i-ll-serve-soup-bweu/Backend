const db = require('../dbConfig.js');

const itemModel = require('./item-model.js');

describe('item-model.js', () => {
  describe('find()', () => {
    it('Should return items for the specified kitchen_id', async () => {
      const items = await itemModel.find(1);

      expect(items.length).toBeGreaterThan(0);
    });

    it('Should return an array', async () => {
      const items = await itemModel.find(1);

      expect(Array.isArray(items)).toBeTruthy();
    });
  });

  describe('add()', () => {
    it('Should return a list that includes the added item', async () => {
      const rice = {
        item_name: 'Rice',
        quantity: 15,
        measurement_unit: 'kg',
        category: 'grains',
        kitchen_id: 1
      };

      const newItem = await itemModel.add(rice);
      expect(newItem.item_name).toBe('Rice');
    });
  });

  describe('findById()', () => {
    it('Should return an item', async () => {
      const id = 1;
      const findItem = await itemModel.findById(id);

      expect(findItem).toBeTruthy();
    });

    it('Should return the item with the specified ID', async () => {
      const id = 2;
      const findItem = await itemModel.findById(id);

      expect(findItem.id).toBe(id);
    });
  });

  describe('remove()', () => {
    it.skip('Should remove the item with the specified ID', async () => {
      const item_id = 2;

      const deleted = await itemModel.remove(item_id);

      expect(deleted).toBeTruthy();
    });

    it.skip('Should remove only one item', async () => {
      const kitchen_id = 1;
      const item_id = 10;

      const before = await itemModel.find(kitchen_id);
      await itemModel.remove(item_id);
      const after = await itemModel.find(kitchen_id);

      expect(after.length).toBe(before.length - 1);
    });
  });

  describe('update()', () => {
    it('Should return return 1/truthy', async () => {
      const id = 1;
      const changes = {
        item_name: 'Rice',
        quantity: 15,
        measurement_unit: 'kg',
        category: 'grains',
        kitchen_id: 1
      };

      const updated = await itemModel.update(id, changes);
      expect(updated).toBeTruthy();
    });

    it('Should update the specified item', async () => {
      const id = 1;
      const changes = {
        item_name: 'Rice',
        quantity: 25,
        measurement_unit: 'kg',
        category: 'grains',
        kitchen_id: 1
      };

      await itemModel.update(id, changes);
      const newItem = await itemModel.findById(id);
      expect(newItem.item).toBe(changes.item);
    });
  });
});
