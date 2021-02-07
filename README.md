# NPT ~ Node Package Template ~

# What is this?

This is a small node package template repository that uses Webpack and Babel to transform TypeScript to plain Javascript. Also, this uses Jest as a test framework.

# How do I use it?

First, please clone this repository into your workspace.

```bash
git clone git@github.com:takagimeow/node-package-template.git
```

And then, go to that directory and install prerequisite dependencies.

```bash
$ cd node-package-template
$ yarn install
```

## Building the repo

```bash
$ yarn run build
```

## Type-checking the repo

```bash
$ yarn run type-check
```

## Testing the repo

```bash
$ yarn run test
```

### with watch option

```bash
$ yarn run test:watch
```

## Linting the repo

```bash
$ yarn run lint
```

### with fix option

```bash
$ yarn run lint:fix
```

## Run the program

```bash
$ yarn run start
```

# How to use Prisma

## Step 1. Create project setup

```bash
npx prisma init
```

## Step 2. Create daatabase tables with Prisma Migrate

```bash
yarn run prisma:migrate
```

## Step 3. Generate a version of Prisma Client that is tailored to created models

```bash
yarn run prisma:generate
```

# API TEST

## CURL

### POST

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"test", "email": "test@exmaple.com", "posts": { "title": "テスト" }, "profile": { "bio": "テスト" } }' localhost:3000/api
```

# DOCKER

## BUILD

```bash
docker build . -t expressimage
```

## RUN

```bash
docker run -dit --name expresscontainer -p 8080:3000 expressimage
```

## DELETE

```bash
docker stop expresscontainer
docker rm expresscontainer
```

## SAVE

```bash
docker save -o saved.tar expressimage
ls -al saved.tar
```

## LOAD

```bash
docker load -i saved.tar
docker image ls
```

# How to deploy Express App on GCC App Engine

## 参考にしたサイト

[Google App Engineのスタンダード/フレキシブル環境を選ぶときのヒントと設定の注意点](https://zenn.dev/catnose99/articles/f99ea2a8b985b2)

[AppEngineのスタンダード環境からフレキシブル環境へと移行する（Ruby on Rails）](https://zenn.dev/catnose99/scraps/1951c124257888)

[Google App Engineを出来るだけ無料枠で収めるためのオートスケール設定](https://blog.longkey1.net/2020/04/05/google-app-engine-auto-scaling-setting-for-free/)

[App Engine Scaling Config](https://qiita.com/sinmetal/items/017e7aa395ff459fca7c)

カスタムランタイム

[カスタム ランタイムの構築](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build?hl=ja)

[Node.jsからCloud SQL（MySQL）を操作する方法](https://developer.yukimonkey.com/article/20200213/)

## gcloudコマンドをインストールする

```bash
sudo apt-get update
```

[Cloud SDK:コマンドラインインターフェース](https://cloud.google.com/sdk/docs?hl=ja)

Cloud SDK の配布 URI をパッケージ ソースとして追加します。

```bash
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
```

apt-transport-https がインストールされていることを確認する。

```bash
sudo apt-get install apt-transport-https ca-certificates gnupg
```

Google Cloud の公開鍵をインポートします

```bash
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
```

Cloud SDK を更新してインストールします。

```bash
sudo apt-get update && sudo apt-get install google-cloud-sdk
```

##  新しいプロジェクトを作成する

```bash
gcloud projects create [YOUR_PROJECT_ID] --set-as-default
```

プロジェクトを確認する

```bash
gcloud projects describe [YOUR_PROJECT_ID]
```

プロジェクトを使用してApp Engineアプリケーションを初期化する。
リージョン選択のプロンプトが表示されるので、適当なものを選択する。

```bash
gcloud app create --project=[YOUR_PROJECT_ID]
```

## デプロイ

デプロイする前にプロジェクトに対してCloud Build APIが有効になっていることを確認する。プロジェクトに請求先アカウントが設定されていることを確認する。

```bash
gcloud app deploy
```

## 監視

ログを確認する

```bash
gcloud app logs tail -s default
```

ブラウザで確認する

```bash
gcloud app browse
```

# サービスアカウントを作成する

コンソール上でサービスアカウントを作成する。

[Proxy Docker イメージを使用して MySQL クライアントを接続する](https://cloud.google.com/sql/docs/mysql/connect-docker?hl=ja)

# Cloud SQLインスタンスの作成

mysql データベースが作成される

```bash
gcloud sql instances create [YOUR_INSTANCE_NAME] --tier=db-n1-standard-1 --region=asia-northeast1 
```

インスタンスを確認する

```bash
gcloud sql instances describe [YOUR_INSTANCE_NAME]
```

プロキシを使用して外部アプリケーションから接続するためにCloud SQL Proxyをインストールする

```bash
wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy
```

権限を付与する

```bash
chmod +x cloud_sql_proxy
```

プロキシを開始する（開発用）

INSTANCE_CONNECTION_NAMEの部分は、describeサブコマンドを実行したときに表示されるconnectionNameフィールドの値を参照する。

```bash
./cloud_sql_proxy -instances=<INSTANCE_CONNECTION_NAME>=tcp:3306 -credential_file=./認証情報.json
```