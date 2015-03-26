###wp カレンダー
---

wordpress のエクスポート機能でエクスポートしたXMLをカレンダーとして表示します。

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

ローカルで実行する場合は、<a href-"https://github.com/shimizu/SimpleWebServer">simpleWebServer</a>を使用してください。

```sh
$node simpleWebServer.js
```

上記コマンドを実行しブラウザでlocalhost:8888にアクセスするとカレンダーが表示されます。

