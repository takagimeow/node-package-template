import '@babel/polyfill';
import express from 'express';
import { PrismaClient } from '@prisma/client';

import _ from 'lodash';

export const apiRouter = express.Router();

const prisma = new PrismaClient();

/* GET home page. */
apiRouter.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany();
  await prisma.$disconnect();
  return res.status(200).send(allUsers);
  // res.status(200).send('HELLO WORLD 2nd');
});

apiRouter.post('/', async (req, res, next) => {
  try {
    const {
      name,
      email,
      posts: { title },
      profile: { bio },
    } = req.body;

    if (_.isNil(name) || _.isNil(email) || _.isNil(title) || _.isNil(bio)) {
      const err = new Error('Props is not valid!!!');
      return next(err);
    }
    await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: {
            title,
          },
        },
        profile: {
          create: {
            bio,
          },
        },
      },
    });
  } catch (error) {
    const err = new Error('Error is occured');
    return next(err);
  }
  await prisma.$disconnect();
  return res.status(201).json({
    status: 'okay',
  });
});
