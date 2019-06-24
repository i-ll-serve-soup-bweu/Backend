exports.seed = function(knex, Promise) {
  return knex('item').del().then(function() {
    return knex('item').insert([
      { id: 1, item_name: 'Rice', quantity: 30, measurement_unit: 'kg', category: 'grains', kitchen_id: 1 },
      { id: 2, item_name: 'Milk', quantity: 10, measurement_unit: 'l', category: 'drinks', kitchen_id: 1 },
      { id: 3, item_name: 'Eggs', quantity: 50, measurement_unit: 'units', category: 'fresh', kitchen_id: 1 },
      { id: 4, item_name: 'Lentils', quantity: 5, measurement_unit: 'kg', category: 'legumes', kitchen_id: 1 },
      { id: 5, item_name: 'Spinach', quantity: 6, measurement_unit: 'kg', category: 'vegetables', kitchen_id: 1 },
      { id: 6, item_name: 'Green peas', quantity: 10, measurement_unit: 'kg', category: 'legumes', kitchen_id: 1 },
      { id: 7, item_name: 'Pasta', quantity: 20, measurement_unit: 'kg', category: 'grains', kitchen_id: 1 },
      { id: 8, item_name: 'Almonds', quantity: 2, measurement_unit: 'kg', category: 'Nuts and seeds', kitchen_id: 1 }
    ]);
  });
};
