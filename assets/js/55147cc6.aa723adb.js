(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(353)),o=["components"],c={title:"1.21.5",sidebar_label:"1.21.5"},s={unversionedId:"release-notes/1.21.5",id:"release-notes/1.21.5",isDocsHomePage:!1,title:"1.21.5",description:"General",source:"@site/../docs/release-notes/1.21.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.5",permalink:"/documentation/release-notes/1.21.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.5.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1626704767,formattedLastUpdatedAt:"7/19/2021",sidebar_label:"1.21.5",frontMatter:{title:"1.21.5",sidebar_label:"1.21.5"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Documentation: Repository cleanup ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2525"},"#2525")),Object(i.b)("li",{parentName:"ul"},"Rules: Filtering of blacklisted updated_dids needs to be added to sql query ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3228"},"#3228"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: SAML Authentication wrongly requires client config section ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3209"},"#3209")),Object(i.b)("li",{parentName:"ul"},"Consistency checks: Dark reaper crashes due to None scope ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2877"},"#2877")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Importer fails to import RSEs that were deleted ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2896"},"#2896")),Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper 2.0 is creating error traces for SourceNotFound ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2969"},"#2969")),Object(i.b)("li",{parentName:"ul"},'Transfers: Conveyor Finisher fails to retry requests in the "protocol mismatch" state ',Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3102"},"#3102")),Object(i.b)("li",{parentName:"ul"},"Transfers: Crash when enabling multihop mode ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3225"},"#3225")),Object(i.b)("li",{parentName:"ul"},"Transfers: Disabling source_rse_id filling on queue_requests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3236"},"#3236"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Add client location awareness to upload ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3181"},"#3181")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: Expand S3 protocol to accept 204 No Content as File not Found ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1695"},"#1695"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Cannot set account limits via CLI ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3160"},"#3160"))))}b.isMDXComponent=!0},353:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);