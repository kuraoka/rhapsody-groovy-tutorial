import{_ as a,c as s,o as n,b as p}from"./app.b052ac6b.js";const C=JSON.parse('{"title":"Rhapsody\u306EPlug-in\u306EScala\u306B\u3088\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB","description":"","frontmatter":{"title":"Rhapsody\u306EPlug-in\u306EScala\u306B\u3088\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB"},"headers":[{"level":2,"title":"Scala\u306E\u8A2D\u5B9A","slug":"scala\u306E\u8A2D\u5B9A"},{"level":2,"title":"\u30B5\u30F3\u30D7\u30EB","slug":"\u30B5\u30F3\u30D7\u30EB"},{"level":3,"title":"\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A","slug":"\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A"}],"relativePath":"src/scala/index.md"}'),e={name:"src/scala/index.md"},l=p(`<p>IBM\xAE Engineering Systems Design Rhapsody\xAE(\u4EE5\u4E0B\u3001Rhapsody)\u306EPlug-in(\u30DE\u30AF\u30ED)\u3092Scala\u3067\u4F5C\u6210\u3059\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u3059\u3002</p><h2 id="scala\u306E\u8A2D\u5B9A" tabindex="-1">Scala\u306E\u8A2D\u5B9A <a class="header-anchor" href="#scala\u306E\u8A2D\u5B9A" aria-hidden="true">#</a></h2><p>\u3053\u306E\u30B5\u30F3\u30D7\u30EB\u3067\u306F\u3001\u6B21\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">IBM Engineering Systems Design Rhapsody 9.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">  (\u3069\u306EEdtion\u3067\u3082Plug-in\u306F\u52D5\u4F5C\u3057\u307E\u3059)</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D5\u30A9\u30EB\u30C0: C:/Program Files/IBM/Rhapsody/9.0.1/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Apache Java 3.0.9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">OS: Windows</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Java\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30D1\u30A4\u30EB\u6642\u306B\u3001\u4E0B\u8A18\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">CLASSPATH\u306B&quot;(Rhapsody\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D5\u30A9\u30EB\u30C0)/JavaAPI/rhapsody.jar&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Java\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u6642\u306B\u3001\u4E0B\u8A18\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">CLASSPATH\u306B\u3066&quot;(Rhapsody\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D5\u30A9\u30EB\u30C0)/JavaAPI/rhapsody.jar&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u3066java.library.path=&quot;(Rhapsody\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30D5\u30A9\u30EB\u30C0)/Share/JavaAPI&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u79C1\u306E\u74B0\u5883\u306E\u5834\u5408\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u306F\u6B21\u306B\u306A\u308A\u307E\u3059\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cat ~/.Java/startup</span></span>
<span class="line"><span style="color:#A6ACCD;">javac -classpath .:/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar AppName.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B9F\u884C\u306F\u6B21\u306B\u306A\u308A\u307E\u3059\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">java -cp .:/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI/rhapsody.jar -Djava.library.path=&quot;/c/Program Files/IBM/Rhapsody/9.0.1/Share/JavaAPI&quot; AppName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u30B5\u30F3\u30D7\u30EB" tabindex="-1">\u30B5\u30F3\u30D7\u30EB <a class="header-anchor" href="#\u30B5\u30F3\u30D7\u30EB" aria-hidden="true">#</a></h2><h3 id="\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A" tabindex="-1">\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A <a class="header-anchor" href="#\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3066\u3044\u308B\u30E2\u30C7\u30EB\u306E\u540D\u524D\u3092\u8868\u793A" aria-hidden="true">#</a></h3>`,14),c=[l];function o(r,t,i,d,A,h){return n(),s("div",null,c)}var v=a(e,[["render",o]]);export{C as __pageData,v as default};
