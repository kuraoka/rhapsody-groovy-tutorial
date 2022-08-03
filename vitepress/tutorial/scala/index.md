---
title: RhapsodyのPlug-inのScalaによるチュートリアル
---
IBM&reg; Engineering Systems Design Rhapsody&reg;(以下、Rhapsody)のPlug-in(マクロ)をScalaで作成するチュートリアルです。

## Scalaでビルド、実行
このサンプルでは、次のバージョンを使用しています。

```
IBM Engineering Systems Design Rhapsody 9.0.1
  (どのEdtionでもPlug-inは動作します)
  インストールフォルダ: C:/Program Files/IBM/Rhapsody/9.0.1/

Scala 2.12.16

OS: Windows
```

Scalaアプリケーションのコンパイル時に、下記を指定します。
- CLASSPATHに"(Rhapsodyのインストールフォルダ)/JavaAPI/rhapsody.jar"

Scalaアプリケーションの実行時に、下記を指定します。
- CLASSPATHにて"(Rhapsodyのインストールフォルダ)/JavaAPI/rhapsody.jar"
- プロパティにてjava.library.path="(Rhapsodyのインストールフォルダ)/Share/JavaAPI"

コンパイルは次になります。
```
scalac -cp "/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar" AppName.java
```

実行は次になります。
```
scala -cp .:"/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar" -Djava.library.path="/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI" AppName
```

## サンプル

### ハイライトしているモデルの名前を表示
[ShowNameOfSelectedElement.scala](ShowNameOfSelectedElement.scala)
```
import com.telelogic.rhapsody.core._

object ShowNameOfSelectedElement extends App {
	val ra = RhapsodyAppServer.getActiveRhapsodyApplication()
	val se = ra.getSelectedElement()
	if (null != se) {
		printf("%s\n", se.getName())
	}
}
```
