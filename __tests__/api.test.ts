import request from 'supertest';
import { PrismaClient } from '@prisma/client';

import app from '../src/app';

// jest.setTimeout(10000);

const prisma = new PrismaClient();

describe('Test the root path', () => {
  beforeEach(async (done) => {
    console.log('beforeEach');
    const posts = await prisma.post.findMany();
    const profiles = await prisma.profile.findMany();
    const users = await prisma.user.findMany();
    await Promise.all(
      posts.map(async (post) => {
        const deletedPost = await prisma.post.delete({
          where: {
            id: post.id,
          },
        });
        console.log('deletedPost: ', deletedPost);
      }),
    );
    await Promise.all(
      profiles.map(async (profile) => {
        const deletedProfile = await prisma.profile.delete({
          where: {
            id: profile.id,
          },
        });
        console.log('deletedProfile: ', deletedProfile);
      }),
    );
    await Promise.all(
      users.map(async (user) => {
        const deletedUser = await prisma.user.delete({
          where: {
            id: user.id,
          },
        });
        console.log('deletedUser: ', deletedUser);
      }),
    );
    done();
  });
  afterAll(async (done) => {
    console.log('afterAll');
    await prisma.$disconnect();
    done();
  });
  test('何もデータがないときに取得を試みた場合空の配列が返される', async (done) => {
    const response = await request(app).get('/api');
    const data = JSON.parse(response.text);
    expect(data).toStrictEqual([]);
    done();
  });

  test('データをひとつ作成して取得を試みると、作成したデータが配列に入って返される', async (done) => {
    const response = await request(app)
      .post('/api')
      .send({
        name: 'john',
        email: 'john@example.com',
        posts: {
          title: "john's diary",
        },
        profile: {
          bio: 'I live in Tokyo.',
        },
      })
      .set('Accept', 'application/json');
    let data = JSON.parse(response.text);
    expect(data).toStrictEqual({ status: 'okay' });
    const getResponse = await request(app).get('/api');
    data = JSON.parse(getResponse.text);
    expect(data[0].email).toStrictEqual('john@example.com');
    done();
  });
});
