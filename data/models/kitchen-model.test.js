const db = require('../dbConfig.js');
const KitchenModel = require('./kitchen-model.js');

describe('Kitchen Model', () => {
  beforeEach(async () => {
    await db('kitchen').truncate();
  });

  afterEach(async () => {
    await db('kitchen').truncate();
  });

  describe('add', () => {
    it('add kitchen into database', async () => {
      const newKitchen = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      expect(newKitchen.kitchen_name).toBe('Kitchen Pants');
    });
    it('adding 2 kitchens to the database', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen2 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const allOfThem = await db('kitchen');
      expect(allOfThem).toHaveLength(2);
    });
  });

  describe('find', () => {
    it('find kitchen in database', async () => {
      const newKitchen = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const findKitchen = await KitchenModel.find();
      expect(findKitchen).toEqual([
        {
          id: 1,
          kitchen_name: 'Kitchen Pants',
          location: 'London, UK',
          description: 'This is a kitchen description',
          km_id: 1
        }
      ]);
    });
    it('find 2 kitchens after adding them to the database', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen2 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const findKitchen = await KitchenModel.find();
      expect(findKitchen).toEqual([
        {
          id: 1,
          kitchen_name: 'Kitchen Pants',
          location: 'London, UK',
          description: 'This is a kitchen description',
          km_id: 1
        },
        {
          id: 2,
          kitchen_name: 'Kitchen Pants',
          location: 'London, UK',
          description: 'This is a kitchen description',
          km_id: 1
        }
      ]);
    });
  });

  describe('findById', () => {
    it('find by kitchen id one kitchen in a database with 2 kitchens', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen2 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const findKitchen = await KitchenModel.findById(1);
      expect(findKitchen).toEqual({
        id: 1,
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
    });
    it('find by kitchen id a different kitchen in a database with 2 kitchen.', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen2 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const findKitchen = await KitchenModel.findById(2);
      expect(findKitchen).toEqual({
        id: 2,
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
    });
  });

  describe('remove', () => {
    it('removes kitchen correctly', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const removeKitchen = await KitchenModel.remove(1);

      const allOfThem = await db('kitchen');
      expect(allOfThem).toHaveLength(0);
    });
    it('removes kitchen correctly when adding more than one', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen2 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen3 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const removeKitchen = await KitchenModel.remove(1);

      const allOfThem = await db('kitchen');
      expect(allOfThem).toHaveLength(2);
    });
  });

  describe('update', () => {
    it('update 1 kitchen in database', async () => {
      const newKitchen1 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const newKitchen2 = await KitchenModel.add({
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const updateKitchen = await KitchenModel.update(1, {
        id: 1,
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
      const findKitchen = await KitchenModel.findById(1);
      expect(findKitchen).toEqual({
        id: 1,
        kitchen_name: 'Kitchen Pants',
        location: 'London, UK',
        description: 'This is a kitchen description',
        km_id: 1
      });
    });
  });
});
//
