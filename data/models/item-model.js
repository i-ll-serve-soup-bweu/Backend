const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find(id) {
  const kitchen_id = id;
  return db('item').where({ kitchen_id });
}

function findBy(filter) {
  return db('item').where(filter);
}

async function add(item) {
  const [ id ] = await db('item').insert(item);

  return findById(id);
}

function findById(id) {
  return db('item').where({ id }).first();
}

function remove(id) {
  return db('item').where({ id }).del();
}

function update(id, changes) {
  return db('item').where({ id }).update(changes, '*');
}
