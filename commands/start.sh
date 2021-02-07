#!/bin/sh

./cloud_sql_proxy \
-instances=INSTANCE_NAME=tcp:3306 \
-credential_file=./認証情報.json &

yarn run prisma:migrate

yarn run prisma:generate

yarn run build

yarn run start