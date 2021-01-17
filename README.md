# NPT ~ Node Package Template ~

## 準備

### 1. パッケージ名と同じフォルダを作成する

### 2. 必要なモジュールをインストールする

```bash
$ yarn init -y
$ yarn add -D webpack webpack-cli babel-loader
$ yarn add -D @babel/core @babel/preset-env
$ yarn add -D @babel/plugin-proposal-class-properties @babel/preset-typescript 
$ yarn add -D babel-plugin-module-resolver
$ yarn add -D typescript
```

### 3. webpack.config.jsファイルを作成する

webpack.config.jsファイルはwebpackへの指示内容をまとめた設定ファイルなので、これをルートディレクトリに作成して置きます。

```entry```はwebpackコマンドを使ってバンドルするときの出発点となるファイルの名前です。これは相対パスで指定します。

```output.path```は出力先のファイルが存在するフォルダへの絶対パスです。
```output.filename```は上記のフォルダに出力するファイル名です。

```__dirname```はNode.jsで使える変数で、webpack.config.jsファイルが存在するフォルダ名への絶対パスが格納されています。

```mode```はバンドルする際に```development```と```production```のどちらのモードで出力の際にファイルを作り出すかを指定します。

```development```だと、デバッグがしやすい状態で出力され、```production```だと、ファイルが完全に圧縮されて本番環境用に最終的なファイルが作成されます。

```devtool```に```inline-source-map```を指定することで、出力後のファイルとソースファイルの対応している個所の関係を見やすくするためのソースマップも一緒に含めてくれます。

### 3. srcフォルダを作成する

srcフォルダを作成して、その中に```index.ts```ファイルを作成する。

### 4. Babel

Webpackはjsファイルやjsonファイルをひとつにまとめるツールです。なのでtypescriptやcssで書かれたファイルもまとめるためには、loaderを指定してバンドルするまえにコンパイル（トランスパイル）しなくてはいけません。

Loaderに指定するのは``test``と```use```の二つです。
```test```は、loader適用対象のファイルの種類。```use```はそのファイルの種類に対して適用するloaderの名前です。loaderは配列で指定することができ、配列の最後の値から順番に実行されていきます。

loaderにoptionsを渡したいときは下記の方法を使って記述します。```loader```には名前。optionsにはそのloaderに対する設定情報を渡します。

```js
module.exports = {
  module: {
    rules: [
      { 
        test: /\.txt$/,
        exclude: /node_modules/,　//対象外ディレクトリ
        use: [
          {
            loader: 'raw-loader', //loader名
            options: {...}        //設定情報
          },
          'a-loader',
          'c-loader'
        ]
      }
    ]
  }
};
```

## ESLint

eslintは導入されているのでコーディングスタイルをインストールします。

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add -D eslint-config-airbnb-base eslint-plugin-import eslint-config-airbnb-typescript
```

次にprettierをインストールします

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

ルートディレクトリに.prettierrcファイルを作成します。

```.prettierrc
{
  "printWidth": 100,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "auto"
}
```

## jestの導入

jest と ts-jestをインストールします。

```bash
$ yarn add -D jest ts-jest
```

jest.config.jsファイルをルートディレクトリに作成します。


# 参考にした記事

[webpackとBabelの基本を理解する(1) ―webpack編―](https://qiita.com/koedamon/items/3e64612d22f3473f36a4)
[webpackとBabelの基本を理解する(2) ―Babel編―](https://qiita.com/koedamon/items/92c986456e4b9e845acd)
[webpackとBabelの基本を理解する(3) ―webpackとBabel編―](https://qiita.com/koedamon/items/6cf2201be78c3d79516d)
[yarnの使いかた](https://qiita.com/senou/items/d939601e32c0005ebfe3)
[Babel 7でTypeScriptをトランスパイルしつつ型チェックをする 〜webpack 4 + Babel 7 + TypeScript + TypeScript EsLint + Prettierの開発環境を構築する〜](https://qiita.com/soarflat/items/d583356e46250a529ed5)