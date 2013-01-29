# Q.O.F - Quotes on Front-end

Q.O.Fはフロントエンドにまつわるクオートを集積するウェブアプリケーションです。  
本アプリケーションは **テストしやすいJavaScript** のデモ用に作成されました。

## ブランチモデル

### not_good

このバージョンでは、大きく分けて以下の4つのアクションが混在しています。

1. jQueryの`domready`イベント / ページイベント
2. 保存ボタン(`#form-send-mock`)のクリックイベント / ユーザイベント
3. フォーム(`#send-quote`)内のデータ / ユーザインプット
4. `.append()`内でのHTML生成 / HTMLテンプレート

このバージョンではサーバとのデータの送受信を行うロジックは **組み込まれていません。**

jQueryの`$.ajax()`メソッドを使ってデータの送信を行うとしたら、上記に加えて:

- ネットワーク書き込み
- `success`や`error`などのネットワークイベント

の2つのアクションが追加されることになります。

併せて6つのアクションがそれぞれ複雑に関連しあって、本アプリケーションに必要なロジックを実行しています。

### master

このバージョンでは、`not_goodブランチ`のソースコードをテストしやすいコードへとリファクタしています。  
実際にJavaScriptのテストツールである[mocha](http://visionmedia.github.com/mocha/)を使ったテストも行っています。

`not_goodブランチ`で実装したロジックそのものには変更はありません。  
このバージョンでもサーバとのデータの送受信を行うロジックは **組み込まれていません。**

### firebase (未実装)

このバージョンは[Firebase](https://www.firebase.com)というJavaScriptから簡単にデータの生成、保存、取得などを行えるサービスを利用し、実際にきちんと動作するアプリケーションにしています。  
テストしやすいJavaScriptとは一切関係がありませんが、手軽にデータのIOに関連するバックエンド環境を利用できるので、サンプルアプリケーションなどを構築するのに非常に便利です。

プログラミングに限りませんが、何かを学ぶ上でもっとも効率的な方法は実際にやってみることです。  
JavaScriptを書きたいと長らく思っているけど、まだ書けない。
と感じている方は是非、このアプリ、Q.O.F、に新しい機能を追加するなどから初めてみてはいかがでしょうか。  
新機能を追加した際にはぜひPull
Requestを送って下さい。1人で開発するよりも多くの人と一緒に開発したほうが楽しいですし、勉強にもなりますので。

## ライセンス

Anything I wrote is public domain: [http://unlicense.org/](http://unlicense.org/]). 
Other than that, please refer and respect thier licence.

- [jQuery](http://jquery.com/) / MIT license by jQuery Foundation
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) / SIL Open Font License、MIT license、CC BY 3.0 License by Dave Gandy
- [SubtlePatterns](https://github.com/subtlepatterns/SubtlePatterns) / CC BY 3.0 License by Atle Mo
- [Grunt](https://github.com/gruntjs/grunt) / MIT license by "Cowboy" Ben Alman, contributors

Initially build by Yuya Saito <studiomohawk@gmail.com>  
Made Proudly in Tokyo.
