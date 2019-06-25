const loginRouter = require('../server');
const request = require('supertest');
const db = require('../data/dbConfig.js');

describe('login-router', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  afterEach(async () => {
    await db('users').truncate();
  });

  describe('POST /login endpoint', () => {
    it('returns status 401 when trying to login an unregister user', () => {
      const newUser = { username: 'newuser', password: 'test' };

      return request(loginRouter).post('/login').send(newUser).then((res) => {
        expect(res.status).toBe(401);
      });
    });
  });
});
