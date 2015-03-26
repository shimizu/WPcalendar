###wp カレンダー
---

wordpress のエクスポート機能でエクスポートしたXMLをGithub風カレンダーとして表示します。

##使い方

必要なnodeモジュールをインストールします。

```sh
$ npm install
```

エクスポートしたファイルをjosnに変換します。

```sh
$ node wpxml2json.js [wp file]  >  wp.json
```

wp.jsonファイルとindex.htmlをwebサーバの同じディレクトリに入れてアクセスしてください。


