import request from 'supertest';
import app from '../src/app';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('Test the users path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});
