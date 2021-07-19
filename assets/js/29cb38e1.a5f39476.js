(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(353)),o=["components"],l={title:"Replica management with replication rules"},c={unversionedId:"Replica-management",id:"Replica-management",isDocsHomePage:!1,title:"Replica management with replication rules",description:"Replica management is based on replication rules defined on data",source:"@site/../docs/Replica-management.md",sourceDirName:".",slug:"/Replica-management",permalink:"/documentation/Replica-management",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/Replica-management.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1626704767,formattedLastUpdatedAt:"7/19/2021",frontMatter:{title:"Replica management with replication rules"}},s=[{value:"Footnotes",id:"footnotes",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Replica management is based on replication rules defined on data\nidentifiers (files, datasets, containers). A replication rule is owned\nby an account and defines the minimum number of replicas to be available\non a list of RSEs, denoted by an ",Object(i.b)("a",{parentName:"p",href:"rse_expressions.html"},"RSE Expression"),".\nAccounts are allowed to set multiple rules",Object(i.b)("sup",{parentName:"p",id:"fnref-1"},Object(i.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Rules may optionally\nhave a limited lifetime and can be added, removed or modified at any\ntime."),Object(i.b)("p",null,"An example listing of replication rules is given below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"prod: 1x replica @ CERN, no lifetime"),Object(i.b)("li",{parentName:"ul"},"barisits: 1x replica @ US-T2, until 2019-01-01"),Object(i.b)("li",{parentName:"ul"},"vgaronne: 2x replica @ T1, no lifetime")),Object(i.b)("p",null,"A rule engine validates the rules and creates transfer primitives to\nfulfil all rules, e.g. transfer a file from RSE A to RSE B. The rule\nengine is triggered when a new rule is defined on an existing data\nidentifier, or when a file is added to a dataset with existing rules.\nThe rule engine will only create the minimum set of necessary transfer\nprimitives to satisfy all rules."),Object(i.b)("p",null,"Notifications can be provided for rules and their underlying transfer\nrequests. All transfer requests are transient."),Object(i.b)("p",null,"The deletion service supports two different modes: greedy and\nnon-greedy. Greedy means that the service tries to immediately delete\nall replicas which are not protected by a replication rule. Non-greedy\ndeletion is triggered when storage policy dictates that space must be\nfreed. The deletion service will look for replicas on that RSE which can\nbe deleted without violating any replication rule. The deletion service\nwill use a Least Recently Used (LRU) algorithm to select replicas for\ndeletion. The deletion service will also immediately delete all replicas\nof any file which is declared obsolete."),Object(i.b)("p",null,"Some examples of replication rules are listed\n",Object(i.b)("a",{parentName:"p",href:"replication_rules_examples.html"},"here"),"."),Object(i.b)("h2",{id:"footnotes"},"Footnotes"),Object(i.b)("div",{className:"footnotes"},Object(i.b)("hr",{parentName:"div"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol",id:"fn-1"},"The system may reject rules if these violate other policies, e.g.,\nonly specific accounts are allowed to request replication rules for\ntape systems.",Object(i.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);