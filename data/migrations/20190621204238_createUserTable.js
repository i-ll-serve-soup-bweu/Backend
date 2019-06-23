exports.up = function(knex) {
  return knex.schema.createTable('users', function(users) {
    users.increments();
    users.string('username').notNullable().unique();
    users.string('name').notNullable();
    users.string('lastName').notNullable();
    users.string('password').notNullable();
    users.string('type').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
