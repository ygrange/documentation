(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{253:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(353)),c=["components"],o={title:"1.24.0rc1",sidebar_label:"1.24.0rc1"},l={unversionedId:"release-notes/1.24.0rc1",id:"release-notes/1.24.0rc1",isDocsHomePage:!1,title:"1.24.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.24.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.0rc1",permalink:"/documentation/release-notes/1.24.0rc1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.0rc1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1626704767,formattedLastUpdatedAt:"7/19/2021",sidebar_label:"1.24.0rc1",frontMatter:{title:"1.24.0rc1",sidebar_label:"1.24.0rc1"}},s=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(i.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Adding missing indices which were only available as functional oracle indices. For oracle databases installed with the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/blob/master/etc/sql/oracle/schema.sql"},"schema.sql")," definition, these should already exist (Please verify). (Alembic revision ",Object(i.b)("inlineCode",{parentName:"li"},"8ea9122275b1"),")")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"SUBSCRIPTIONS_STATE_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"subscriptions")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"CONTENTS_RULE_EVAL_FB_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"contents")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"REPLICAS_STATE_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"replicas")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"BAD_REPLICAS_ACCOUNT_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"bad_replicas")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"REQUESTS_DEST_RSE_ID_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Update of ",Object(i.b)("inlineCode",{parentName:"li"},"REQUESTS_STATE_CHK")," constraint in ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table in preparation for Conveyor Preparer (Alembic revision ",Object(i.b)("inlineCode",{parentName:"li"},"d23453595260"),")")),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This Rucio release line drops support for Python 2.7 on the Server/Daemon Side. Only Python 3.6, 3.7 and 3.8 are supported from now on. Rucio clients are still Python 2.7 compatible for the foreseen future (EOL will be announced). If your environment is requiring to run Rucio under Python 2.7 we recommend the Rucio 1.23 LTS release line, which will be supported until 2022.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Due to a fix (",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/3994"},"#3994"),") in the salting-algorithm used for Python 3 all hashes for stored passwords in Rucio need to be re-collected. This only affects password authentication, X509, Kerberos or OIDCS authentication is unaffected."))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add check that alembic version of DB works with rucio release ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1157"},"#1157")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Some function based indexes missing in models.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2714"},"#2714")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Policy packages should support multi-VO Rucio installations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3542"},"#3542")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Provide a bulk method for setting metadata ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3847"},"#3847")),Object(i.b)("li",{parentName:"ul"},"Database: Upgrade SQLAlchemy version ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4055"},"#4055")),Object(i.b)("li",{parentName:"ul"},"Replicas: Allow declaring bad replicas via RSE/DID pair and REST API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4099"},"#4099")),Object(i.b)("li",{parentName:"ul"},"Transfers: Re-Write of Conveyor-Throttler and the throtteling system ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4056"},"#4056"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Make tool execution-dir independent ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4113"},"#4113")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Hardcoded atlas-adc-ddm-support eMail address for rule approval ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4164"},"#4164")),Object(i.b)("li",{parentName:"ul"},"Deletion: all_rses option redundant for light and dark reaper ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3933"},"#3933")),Object(i.b)("li",{parentName:"ul"},"Release management: Upgrade information in setup.py (1.24.0) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4120"},"#4120")),Object(i.b)("li",{parentName:"ul"},"Release management: 1.24 Dependency upgrade ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4157"},"#4157")),Object(i.b)("li",{parentName:"ul"},"Release management: Python memcached package ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4169"},"#4169")),Object(i.b)("li",{parentName:"ul"},"Replicas: Set geoip as default sorting algorithm in list_replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4017"},"#4017"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Userpass authentication not backwards compatible nor unicode capable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3994"},"#3994")),Object(i.b)("li",{parentName:"ul"},"Clients: list_replicas returns a generator with an empty string when there are no replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2517"},"#2517")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Clean URLs coming from AWS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4159"},"#4159")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: S3 endpoints in TPC must use s3s:// instead of s3:// ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4173"},"#4173")),Object(i.b)("li",{parentName:"ul"},"DIRAC: Bug in Belle II permission for dirac ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4174"},"#4174")),Object(i.b)("li",{parentName:"ul"},"Release management: Security upgrade for oic dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4181"},"#4181"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Rucio upload with rse_expression ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4129"},"#4129"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: sorting of column of type datetime in datatable broken ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1771"},"#1771"))))}b.isMDXComponent=!0},353:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);