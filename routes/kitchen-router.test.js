const server = require('../server');
const request = require('supertest');
const db = require('../data/dbConfig.js');

const validUser = {
  username: 'Test',
  password: '1234567'
};

describe('kitchen-router', () => {
  beforeEach(async () => {
    await db('kitchen').truncate();
  });

  afterEach(async () => {
    await db('kitchen').truncate();
  });

  describe('Server is working', () => {
    it('Alive!', () => {
      const expectedResponseBody = 'Alive!';
      return request(server)
        .get('/')
        .expect(expectedResponseBody)
        .expect('Content-Length', expectedResponseBody.length.toString());
    });
  });

  describe('GET /kitchen endpoint', () => {
    it('get 400 without token', () => {
      return request(server).get('/kitchen').expect(400);
    });
    it('get 400 without token', async () => {
      // const registerUser = await request(server).post('/auth/register').send(validUser);

      const loginUser = await request(server).post('/auth/login').send(validUser);
      console.log(loginUser);
      return await request(server)
        .get('/kitchen')
        .set('Authorization', /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .expect(401);
    });
  });

  describe('GET /kitchen/:id endpoint', () => {
    it('get 400 without token', () => {
      return request(server).get('/kitchen').expect(400);
    });
  });

  describe('POST /kitchen endpoint', () => {
    it('get 400 without token', () => {
      return request(server).post('/kitchen').expect(400);
    });
  });

  describe('PUT /kitchen endpoint', () => {
    it('get 400 without token', () => {
      return request(server).put('/kitchen').expect(400);
    });
  });

  describe('DELETE /kitchen endpoint', () => {
    it('get 400 without token', () => {
      return request(server).delete('/kitchen').expect(400);
    });
  });
});
