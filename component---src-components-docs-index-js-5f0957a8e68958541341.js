(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(142),o=a(156),c=a(144),l=a(143),d=r.b.ul.withConfig({displayName:"Topics__List",componentId:"sc-1b6m273-0"})(["margin:0;padding:10px;border-radius:3px;list-style-type:none;box-shadow:1px 1px 1px 0 #ddd;background-color:#f6f6f6;@media (max-width:620px){width:100%;}"]),m=r.b.li.withConfig({displayName:"Topics__Item",componentId:"sc-1b6m273-1"})(["padding:.25em 0;"]),s=Object(r.b)(l.Link).withConfig({displayName:"Topics__Link",componentId:"sc-1b6m273-2"})(["padding:.35em .75em;display:block;border-radius:3px;font-family:Helvetica,Arial,sans-serif;text-decoration:none;color:black;background-color:#eee;&:hover{color:gray;}&:active{color:darkred;}"]),g=function(e){var t=e.links;return i.a.createElement(d,null,t.map(function(e,t){var a=e.title,n=e.path;return i.a.createElement(m,{key:t},i.a.createElement(s,{to:n},a))}))},I=r.b.article.withConfig({displayName:"Text__StyledText",componentId:"mudrlg-0"})(["padding:0 30px 30px 30px;margin-bottom:25px;border-radius:3px;border:solid 1px #eee;line-height:180%;font-size:16px;font-family:Helvetica,Arial,sans-serif;box-shadow:1px 1px 1px 0 #ddd;&,*{box-sizing:border-box;}p{margin-top:0;margin-bottom:.25em;}a{color:var(--blue);&:hover{text-decoration:none;}&:active{color:darkred;}}ul p,ol p{margin:0;}ul li,ol li{margin-bottom:.75em;}h1,h2,h3,h4,h5,h6{padding-bottom:.35em;margin-top:1em;margin-bottom:.75em;border-bottom:solid 1px #f5f5f5;}h1{font-size:calc(1em + .25em * 6);}h2{font-size:calc(1em + .25em * 4);}h3{font-size:calc(1em + .25em * 3);}h4{font-size:calc(1em + .25em * 2);}h5{font-size:calc(1em + .25em);}h6{font-size:1em;}pre,code{background-color:#eee;}code{padding:.05em .15em;}pre code{padding:unset;background-color:unset;}pre{padding:1em 1.25em;overflow-x:auto;}blockquote{margin:0;padding-left:1em;border-left:solid .25em var(--orange-light);color:gray;}@media (max-width:620px){font-size:14px;}"]),p=r.b.a.withConfig({displayName:"Text__GitHubLink",componentId:"mudrlg-1"})(["display:block;margin-bottom:50px;font-size:14px;font-style:italic;color:gray;"]);function M(e){return"https://github.com/piiijs/piii.js.org/blob/master/src/docs/"+e}var u=function(e){var t=e.html,a=e.filename;return i.a.createElement(n.Fragment,null,i.a.createElement(I,{dangerouslySetInnerHTML:{__html:t}}),i.a.createElement(p,{href:M(a)},"Viu algum erro? Ajude-nos corrigindo no GitHub."))},x=r.b.main.withConfig({displayName:"Docs__Main",componentId:"sc-1xgwfxf-0"})(["display:flex;padding:50px 0;margin:0 auto;@media (max-width:620px){padding:0;flex-direction:column-reverse;}"]),f=r.b.aside.withConfig({displayName:"Docs__Aside",componentId:"sc-1xgwfxf-1"})(["width:200px;@media (max-width:620px){padding:20px 0;display:block;width:unset;}"]),y=r.b.article.withConfig({displayName:"Docs__Article",componentId:"sc-1xgwfxf-2"})(["flex:1;margin-right:20px;@media (max-width:620px){margin-right:0;}"]);t.default=function(e){var t=e.pageContext,a=t.html,n=t.filename,r=t.links;return i.a.createElement(o.a,null,i.a.createElement(c.a,null,i.a.createElement(x,null,i.a.createElement(y,null,i.a.createElement(u,{html:a,filename:n})),i.a.createElement(f,null,i.a.createElement(g,{links:r})))))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return I});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(141),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var d=a(145),m=a.n(d);a.d(t,"PageRenderer",function(){return m.a});var s=a(33);a.d(t,"parsePath",function(){return s.a});var g=i.a.createContext({}),I=function(e){return i.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}I.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){"use strict";var n=a(142).b.div.withConfig({displayName:"Container",componentId:"ya5rfe-0"})(["--pad-x:20px;margin:0 auto;padding:0 var(--pad-x);max-width:calc(1000px + var(--pad-x));"]);t.a=n},145:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},146:function(e,t){e.exports="data:image/svg+xml;base64,PHN2Zw0KICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnDQogIHZpZXdCb3g9JzAgMCAxMDAgMTAwJw0KICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJw0KPg0KICA8cG9seWdvbg0KICAgIGZpbGw9J3doaXRlJw0KICAgIHBvaW50cz0nMCwxMDAgMTAwLDAgMTAwLDEwMCcNCiAgLz4NCjwvc3ZnPg=="},147:function(e,t,a){e.exports=a.p+"static/logo-62ca3394f438ff43a6f1c32872fc6b0b.svg"},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkdpdEh1YiIgcm9sZT0iaW1nIgp2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QKd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiCnJ4PSIxNSUiCmZpbGw9IiMxQjE4MTciLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzM1IDQ5OWMxNCAwIDEyIDE3IDEyIDE3SDE2NXMtMi0xNyAxMi0xN2MxMyAwIDE2LTYgMTYtMTJsLTEtNTBjLTcxIDE2LTg2LTI4LTg2LTI4LTEyLTMwLTI4LTM3LTI4LTM3LTI0LTE2IDEtMTYgMS0xNiAyNiAyIDQwIDI2IDQwIDI2IDIyIDM5IDU5IDI4IDc0IDIyIDItMTcgOS0yOCAxNi0zNS01Ny02LTExNi0yOC0xMTYtMTI2IDAtMjggMTAtNTEgMjYtNjktMy02LTExLTMyIDMtNjcgMCAwIDIxLTcgNzAgMjYgNDItMTIgODYtMTIgMTI4IDAgNDktMzMgNzAtMjYgNzAtMjYgMTQgMzUgNiA2MSAzIDY3IDE2IDE4IDI2IDQxIDI2IDY5IDAgOTgtNjAgMTIwLTExNyAxMjYgMTAgOCAxOCAyNCAxOCA0OGwtMSA3MGMwIDYgMyAxMiAxNiAxMnoiLz48L3N2Zz4="},149:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9Im5wbSIgcm9sZT0iaW1nIgp2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QKd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiCnJ4PSIxNSUiCmZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNjYjM4MzciIHN0cm9rZS13aWR0aD0iMjIiIGQ9Ik0xNjYgMzMzaDkwbTE0Ni0xMDF2NjhtLTQ1LTY4djY4bS0xMTItNjh2NDVtLTExIDM0aDIxM1YxOTlINjV2MTEyaDExM1YyMTBtLTQ1IDIydjY4bTE1Ny05MHY5MCIvPjwvc3ZnPg=="},150:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IlBheVBhbCIgcm9sZT0iaW1nIgp2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHJlY3QKd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiCnJ4PSIxNSUiCmZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSIjMDAyYzhhIiBkPSJNMzc3IDE4NC44TDE4MC43IDM5OWgtNzJjLTUgMC05LTUtOC0xMGw0OC0zMDRjMS03IDctMTIgMTQtMTJoMTIyYzg0IDMgMTA3IDQ2IDkyIDExMnoiLz48cGF0aCBmaWxsPSIjMDA5YmUxIiBkPSJNMzgwLjIgMTY1YzMwIDE2IDM3IDQ2IDI3IDg2LTEzIDU5LTUyIDg0LTEwOSA4NWwtMTYgMWMtNiAwLTEwIDQtMTEgMTBsLTEzIDc5Yy0xIDctNyAxMi0xNCAxMmgtNjBjLTUgMC05LTUtOC0xMGwyMi0xNDNjMS01IDE4Mi0xMjAgMTgyLTEyMHoiLz48cGF0aCBmaWxsPSIjMDAxZjZiIiBkPSJNMTk3IDI5MmwyMC0xMjdhMTQgMTQgMCAwIDEgMTMtMTFoOTZjMjMgMCA0MCA0IDU0IDExLTUgNDQtMjYgMTE1LTEyOCAxMTdoLTQ0Yy01IDAtMTAgNC0xMSAxMHoiLz48L3N2Zz4="},151:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IlR3aXR0ZXIiIHJvbGU9ImltZyIKdmlld0JveD0iMCAwIDUxMiA1MTIiPjxyZWN0CndpZHRoPSI1MTIiIGhlaWdodD0iNTEyIgpyeD0iMTUlIgpmaWxsPSIjMWRhMWYzIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQzNyAxNTJhNzIgNzIgMCAwIDEtNDAgMTIgNzIgNzIgMCAwIDAgMzItNDAgNzIgNzIgMCAwIDEtNDUgMTcgNzIgNzIgMCAwIDAtMTIyIDY1IDIwMCAyMDAgMCAwIDEtMTQ1LTc0IDcyIDcyIDAgMCAwIDIyIDk0IDcyIDcyIDAgMCAxLTMyLTcgNzIgNzIgMCAwIDAgNTYgNjkgNzIgNzIgMCAwIDEtMzIgMSA3MiA3MiAwIDAgMCA2NyA1MCAyMDAgMjAwIDAgMCAxLTEwNSAyOSAyMDAgMjAwIDAgMCAwIDMwOS0xNzkgMjAwIDIwMCAwIDAgMCAzNS0zNyIvPjwvc3ZnPg=="},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Piii.js",description:"Um avançado filtro de palavrões.",author:"Matheus Alves (@theuves)"}}}}},154:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},155:function(e,t,a){e.exports=a.p+"static/icon-f4deaea774c6de0125b5ee4ff94d64a1.png"},156:function(e,t,a){"use strict";var n=a(157),i=a.n(n),r=a(152),o=a(0),c=a.n(o),l=a(158),d=a.n(l),m=a(143),s=a(142),g=a(153),I=a.n(g),p=a(144),M=s.b.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-5kfws1-0"})(["padding:2.5px 0;color:white;background-color:black;"]),u=Object(s.b)(p.a).withConfig({displayName:"Header__StyledContainer",componentId:"sc-5kfws1-1"})(["display:flex;align-items:center;justify-content:space-between;"]),x=Object(s.b)(function(e){var t=e.children,a=I()(e,["children"]);return a.href?c.a.createElement("a",a,t):c.a.createElement(m.Link,a,t)}).withConfig({displayName:"Header__Link",componentId:"sc-5kfws1-2"})(["font-family:'Open Sans Condensed',Helvetica,Verdana,Arial,sans-serif;text-decoration:none;color:white;&:hover{opacity:.8;}&:active{opacity:.9;}"]),f=s.b.h1.withConfig({displayName:"Header__Brand",componentId:"sc-5kfws1-3"})(["margin:0;font-size:2.25em;"]),y=s.b.ul.withConfig({displayName:"Header__List",componentId:"sc-5kfws1-4"})(["display:flex;padding:0;list-style-type:none;"]),h=s.b.li.withConfig({displayName:"Header__Item",componentId:"sc-5kfws1-5"})(["font-size:1.15em;&:not(:last-child){margin-right:20px;}"]),w=function(){return c.a.createElement(M,null,c.a.createElement(u,null,c.a.createElement(f,null,c.a.createElement(x,{to:"/"},"Piii.js")),c.a.createElement(y,null,c.a.createElement(h,null,c.a.createElement(x,{to:"/docs/instalacao"},"Documentação")),c.a.createElement(h,null,c.a.createElement(x,{href:"https://github.com/piiijs/piii.js"},"Código-fonte")))))},D=a(155),T=a.n(D),b=a(146),A=a.n(b),E=a(147),N=a.n(E),C=a(148),v=a.n(C),z=a(149),j=a.n(z),L=a(150),k=a.n(L),S=a(151),P=a.n(S);function Z(){var e=i()(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto|Open+Sans+Condensed:300');\n\n  * {\n    --blue: #303952;\n    --orange-light: #e15f41;\n    --orange-dark: #b23e23;\n    --orange-dark-2: #d5674d;\n\n    box-sizing: border-box;\n\n    &::selection {\n      background-color: #ddd;\n    }\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, Helvetica, Verdana, Arial, sans-serif;\n  }\n"]);return Z=function(){return e},e}var Y=Object(s.a)(Z());t.a=function(e){var t=e.children;return c.a.createElement(m.StaticQuery,{query:"2417117884",render:function(e){return c.a.createElement(o.Fragment,null,c.a.createElement(d.a,{encodeSpecialCharacters:!0,defaultTitle:e.site.siteMetadata.title},c.a.createElement("html",{lang:"pt-BR"}),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),c.a.createElement("link",{rel:"preconnect",href:"https://codepen.io/"}),c.a.createElement("link",{rel:"preload",as:"image",href:T.a}),c.a.createElement("link",{rel:"preload",as:"image",href:A.a}),c.a.createElement("link",{rel:"preload",as:"image",href:N.a}),c.a.createElement("link",{rel:"preload",as:"image",href:N.a}),c.a.createElement("link",{rel:"preload",as:"image",href:v.a}),c.a.createElement("link",{rel:"preload",as:"image",href:j.a}),c.a.createElement("link",{rel:"preload",as:"image",href:k.a}),c.a.createElement("link",{rel:"preload",as:"image",href:P.a}),c.a.createElement("meta",{name:"author",content:e.site.siteMetadata.author}),c.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),c.a.createElement("meta",{property:"og:url",content:"https://piii.js.org/"}),c.a.createElement("meta",{property:"og:title",content:e.site.siteMetadata.title}),c.a.createElement("meta",{property:"og:description",content:e.site.siteMetadata.description}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:site",content:"@theuves"}),c.a.createElement("meta",{name:"twitter:title",content:e.site.siteMetadata.title}),c.a.createElement("meta",{name:"twitter:description",content:e.site.siteMetadata.title}),c.a.createElement("link",{rel:"canonical",href:"https://piii.js.org/"}),c.a.createElement("link",{rel:"favicon",href:T.a})),c.a.createElement(Y,null),c.a.createElement(w,null),c.a.createElement("main",null,t))},data:r})}}}]);
//# sourceMappingURL=component---src-components-docs-index-js-5f0957a8e68958541341.js.map