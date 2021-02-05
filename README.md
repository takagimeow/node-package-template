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