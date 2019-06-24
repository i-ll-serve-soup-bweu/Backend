const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db('kitchen');
}

function findBy(filter) {
  return db('kitchen').where(filter);
}

async function add(party) {
  const [ id ] = await db('kitchen').insert(kitchen);

  return findById(id);
}

function findById(id) {
  return db('kitchen').where({ id }).first();
}

function remove(id) {
  return db('kitchen').where({ id }).del();
}

function update(id, changes) {
  return db('kitchen').where({ id }).update(changes, '*');
}
