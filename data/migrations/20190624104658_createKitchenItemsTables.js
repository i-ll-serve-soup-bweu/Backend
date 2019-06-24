exports.up = function(knex) {
  return knex.schema
    .createTable('kitchen', function(kitchen) {
      kitchen.increments();
      kitchen.string('kitchen_name').notNullable();
      kitchen.string('location');
      kitchen.string('description');
      kitchen.integer('km_id').unsigned().notNullable().references('id').inTable('users');
    })
    .createTable('item', function(item) {
      item.increments();
      item.string('item_name').notNullable();
      item.integer('quantity');
      item.string('measurement_unit');
      item.string('category');
      item.integer('kitchen_id').unsigned().notNullable().references('id').inTable('kitchen');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
