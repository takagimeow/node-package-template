FROM node:12-buster

WORKDIR /usr/src/app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV DEBIAN_FRONTEND=noninteractive

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .  

RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy \
&& chmod +x cloud_sql_proxy

RUN chmod +x ./commands/start.sh

EXPOSE 3000

CMD ["./commands/start.sh"]