# 花将のおまとめサービスフロントエンド

おまとめサービスを使う企業側(company)とその顧客側(customer)を取りまとめるレポジトリ。それぞれのディレクトリに入って`yarn install`, `yarn dev`でローカルの開発ができるようになる。

## バージョン

Node は以下のバージョンを想定する。

- Node: 18.12.1 (始動時点での推奨版)
- yarn: 1.22.1

なお、各ディレクトリに`.node-version`を置いているため、nodenv をインストールしておくと自動で切り替わる。

## ディレクトリ構成について

このレポジトリは yarn workspace で管理され、以下のように構成する。

- company (企業側サイト)
- customer (顧客側サイト)
- shared (共通で使用する機能などまとめる)

## VSCode の設定

VSCode を使っている場合は以下のプラグインを入れて、以下の設定を入れておくことをお勧めする。

- ESLint
- Prettier
- EditorConfig for VSCode
- Code Spell Checker
- Stylelint

vscode の setting.json を弄っても良いが、.vscode フォルダに作ることでそのプロジェクトのみに反映される

```
// .vscode/settings.json
{
  // eslintを適用させる
  "eslint.validate": ["javascript", "typescript"],

  // フォーマッターをprettierにして保存時に自動フォーマットする
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  // 保存時にauto fixさせる
  "editor.codeActionOnSave": {
    "source.fixAll.eslint": true
    "source.fixAll.stylelint": true
  },

  // css周り
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
}
```

## MUI

このプロジェクトは MUI(マテリアル UI)を使ってスタイリングしていく。
正直、まだ理解が浅いので参考にしたサイトの URL を列挙する

- https://mui.com/

- https://qiita.com/hasehiro0828/items/ef1736e871b85b039212
- https://thundermiracle.com/blog/2022-01-16-mui-styled-components-typescript/
- https://zenn.dev/ttani/articles/next-materialui-setup
