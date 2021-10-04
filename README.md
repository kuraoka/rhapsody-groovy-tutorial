IBM&reg; Engineering Systems Design Rhapsody&reg;(以下、Rhapsody)のPlug-in(マクロ)をApache Groovy(以下、Groovy)でプログラミングするガイドです。

この記事では次を紹介します。
- RhapsodyのPlug-inのプログラミング基礎
- Groovyの設定

# RhapsodyのPlug-inのプログラミング基礎
RhapsodyのPlug-inは、Javaアプリケーションです。下記が参考になります。

- [公式HELP:Rhapsody API](https://www.ibm.com/docs/ja/rhapsody/9.0.1?topic=function-rhapsody-api)
- [Rhapsody Java API の使い方解説](https://www.ibm.com/support/pages/rhapsody-java-api-%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9%E8%A7%A3%E8%AA%AC-0)
- [Rational Rhapsody JAVA API – Code Snippets & Helper Apps](https://www.ibm.com/support/pages/rational-rhapsody-java-api-%E2%80%93-code-snippets-helper-apps)
- APIのJava Doc: ```file:///C:/Program Files/IBM/Rhapsody/9.0.1/Doc/java_api/index.html```

Groovyは、Javaアプリケーションであるため、GroovyでRhapsodyのPlug-inを作成することができます。

# Groovyの設定
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
