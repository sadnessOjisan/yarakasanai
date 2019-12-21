# yarakasanai

[本番環境でやらかしちゃった人 Advent Calendar 2019](https://qiita.com/advent-calendar/2019/yarakashi-production) 23 日目でやらかしたことを起こさないためのレポジトリです。

## 概要

やらかさないために・確実な publish をするために

- CI/CD サーバーからの publish
- 環境の固定やコード化

を行なったサンプルプロジェクトです。

ここで作ったモジュールは次のようにインストールできます。

```zsh
$ yarn add @sadness.ojisan/yarakasanai
```

また、上でインストールできるモジュールはこのように使うことができます。

[codesandbox.io](https://codesandbox.io/s/nice-rhodes-bgzs1?fontsize=14&hidenavigation=1&theme=dark)

## 環境構築

```zsh
yarn install
```

## やらかしたとき

```zsh
npm unpublish yarakasanai --force
```

## ref

- https://efcl.info/2018/06/21/can-npm-publish/
- https://tech.bitbank.cc/npm-ci-cd/
- https://dev.classmethod.jp/etc/github-actions-npm-automatic-release/
- https://github.com/actions/setup-node/issues/52
- https://docs.npmjs.com/cli/unpublish
- https://ota42y.com/blog/2014/09/29/npm-publish
- https://efcl.info/2015/04/30/npm-namespace/
- https://one-it-thing.com/327/

## License

MIT
