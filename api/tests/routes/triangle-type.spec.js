const request = require('supertest');
const app = require('../../app.js');


describe('Test route functions for triangle', () => {
  test('It should return scalene if no sides match', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 2, c: 3 })
    .expect(200)
    .then((data) => {
      expect(data.text).toMatch('scalene');
    }));

  test('It should return equilateral if all sides match', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 1, c: 1 })
    .expect(200)
    .then((data) => {
      expect.assertions(2);
      expect(data.text).toMatch('{"type":"equilateral"}');
      expect(data.text).toMatch('equilateral');
    }));

  test('It should return isosceles if 2 sides a & bmatch', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 1, c: 3 })
    .expect(200)
    .then((data) => {
      expect(data.text).toMatch('{"type":"isosceles"}');
    }));

  test('It should return isosceles if 2 sides c & b match', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 3, c: 3 })
    .expect(200)
    .then((data) => {
      expect(data.text).toMatch('{"type":"isosceles"}');
    }));

  test('It should return isosceles if 2 sides c & a match', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 3, c: 1 })
    .expect(200)
    .then((data) => {
      expect(data.text).toMatch('{"type":"isosceles"}');
    }));

  test('It should return 400 if not enough args', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 3 })
    .expect(400)
    .then((data) => {
      expect(data.text).toMatch('Not Enough Arguments');
    }));

  test('It should return 400 if invalid argument', () => request(app)
    .post('/triangle')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 3, c: 'kjfds' })
    .expect(400)
    .then((data) => {
      expect(data.text).toMatch('Invalid Arguments');
    })
    .catch((e) => {
      console.log('\n\n\n\n e', e);
      expect(e).toBeDefined();
    }));

  test('It should return 404 if path not valid', () => request(app)
    .post('/')
    .set('Accept', 'application/json')
    .send({ a: 1, b: 3, c: 'kjfds' })
    .expect(404));
});
