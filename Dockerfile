FROM node:12-buster

WORKDIR /usr/src/app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV DEBIAN_FRONTEND=noninteractive

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run prisma:generate
RUN yarn run prisma:generate

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]