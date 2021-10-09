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

Groovyで、次の設定を行ってください。

```
$ cat ~/.groovy/startup
JAVA_OPTS="$JAVA_OPTS -Djava.library.path=\"/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI\""
CLASSPATH='"/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar"'
```
