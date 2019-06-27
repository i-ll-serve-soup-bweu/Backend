const registerRouter = require('../server');
const request = require('supertest');
const db = require('../data/dbConfig.js');

describe('register-router', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  afterEach(async () => {
    await db('users').truncate();
  });
  describe('POST /register endpoint', () => {
    it('returns the right response status', () => {
      const newUser = { username: 'testingtests', password: 'test', name: 'test', lastName: 'test', type: 'km' };
      return request(registerRouter).post('/register').send(newUser).then((res) => {
        expect(res.status).toBe(201);
      });
    });
  });
});
