---
title: RhapsodyのPlug-inのGroovyによるチュートリアル
---

IBM&reg; Engineering Systems Design Rhapsody&reg;(以下、Rhapsody)のPlug-in(マクロ)をApache Groovy(以下、Groovy)で作成するチュートリアルです。

## Groovyの設定
下記が、インストールの情報です。
- [IBM Rhapsody評価版（無償）をインストールする](https://qiita.com/daikan_murata/items/c5dc416c3912e36dae84)
- [Apache Groovy/Download](https://groovy.apache.org/download.html)

このサンプルでは、下記のバージョンを使用しています。
```
IBM Engineering Systems Design Rhapsody 9.0.1
  (どのEdtionでもPlug-inは動作します)
  デフォルト通り、C:/Program Files/IBM/Rhapsody/9.0.1/にインストールしています。

Apache Groovy 3.0.9
```

Groovyアプリケーションの実行時に、下記を指定します。
- CLASSPATHにて"(Rhapsodyのインストールフォルダ)/JavaAPI/rhapsody.jar"
- プロパティにてjava.library.path="(Rhapsodyのインストールフォルダ)/Share/JavaAPI"

コンパイル、実行は次になります。
```
groovy.bat -cp "/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar" -Djava.library.path="/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI" AppName.groovy
```

## サンプル

### ハイライトしているモデルの名前を表示
[ShowNameOfSelectedElement.groovy](ShowNameOfSelectedElement.groovy)
```
import com.telelogic.rhapsody.core.*

class ShowNameOfSelectedElement {
	static main(args) {
		def app = RhapsodyAppServer.getActiveRhapsodyApplication();
		def se = app.getSelectedElement();
		if (null != se) {
			System.out.println(se.getName());
		}
	}
}
```