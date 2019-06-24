exports.seed = function(knex, Promise) {
  return knex('kitchen').del().then(function() {
    return knex('kitchen').insert([
      {
        id: 1,
        kitchen_name: 'Test Kitchen',
        location: 'London, UK',
        description: 'This is the description for the test kitchen.',
        km_id: 14
      }
    ]);
  });
};
