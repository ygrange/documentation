(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(344)),i={id:"developing-with-rucio",title:"Developing with Rucio"},c={unversionedId:"developing-with-rucio",id:"developing-with-rucio",isDocsHomePage:!1,title:"Developing with Rucio",description:"Rucio Clients",source:"@site/../docs/developing-with-rucio.md",sourceDirName:".",slug:"/developing-with-rucio",permalink:"/documentation/developing-with-rucio",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620227222,formattedLastUpdatedAt:"5/5/2021",frontMatter:{id:"developing-with-rucio",title:"Developing with Rucio"}},l=[{value:"Rucio Clients",id:"rucio-clients",children:[{value:"Errors and Exceptions",id:"errors-and-exceptions",children:[]}]},{value:"RESTful APIs",id:"restful-apis",children:[{value:"Date format",id:"date-format",children:[]},{value:"SSL only",id:"ssl-only",children:[]},{value:"Response formats",id:"response-formats",children:[]},{value:"Error handling",id:"error-handling",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"rucio-clients"},"Rucio Clients"),Object(a.b)("p",null,"Rucio includes a client class to remove some of the complexity of\ndealing with raw HTTP requests against the RESTful API."),Object(a.b)("p",null,"All client methods are accessible through the high-level class Client.\nBelow is one example of using Rucio Client class:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from rucio.client import Client\nrucio_client = Client()\nrucio_client.ping()\n")),Object(a.b)("p",null,"The methods are separated per resource type. The API in full can be viewed\n",Object(a.b)("a",{parentName:"p",href:"/documentation/rucio_client_api"},"here"),"."),Object(a.b)("h3",{id:"errors-and-exceptions"},"Errors and Exceptions"),Object(a.b)("p",null,"In the case of an error, Rucio returns a Python Exception with the\nappropriate Traceback, a detailed error string, and a unique error\nnumber. If the error occurred on the server side, it will be propagated\nto the client. The command line clients will exit back to the shell with\nthe POSIX ","[errno]","{.title-ref} of the unique Rucio error number. The full\nand up to date list can be found in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/lib/rucio/common/exception.py"},"Exception definition"),"."),Object(a.b)("h2",{id:"restful-apis"},"RESTful APIs"),Object(a.b)("p",null,"Each resource can be accessed or modified using specially formed URLs and the standard HTTP methods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"GET to read\nPOST to create\nPUT to update\nDELETE to remove\n")),Object(a.b)("p",null,"We require that all requests are done over SSL. The API supports JSON formats. Rucio uses ",Object(a.b)("a",{parentName:"p",href:"http://oauth.net/"},"OAuth"),"\nto authenticate all API requests. The method is to get an authentication token, and use it for the rest of\nthe requests. Descriptions of the actions you may perform on each resource can be found in the\n",Object(a.b)("a",{parentName:"p",href:"/documentation/rucio_rest_api"},"API documentation"),"."),Object(a.b)("h3",{id:"date-format"},"Date format"),Object(a.b)("p",null,"All dates returned are in UTC and are strings in the following format (RFC 1123, ex RFC 822):\n",Object(a.b)("inlineCode",{parentName:"p"},"Mon, 13 May 2013 10:23:03 UTC")),Object(a.b)("p",null,"In code format, which can be used in all programming languages that support strftime or strptime:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"%a, %d %b %Y %H:%M:%S UTC\n")),Object(a.b)("h3",{id:"ssl-only"},"SSL only"),Object(a.b)("p",null,"We require that all requests(except for the ping) are done over SSL."),Object(a.b)("h3",{id:"response-formats"},"Response formats"),Object(a.b)("p",null,"The currently-available response format for all REST endpoints is the string-based format JavaScript Object Notation\n(",Object(a.b)("a",{parentName:"p",href:"http://www.json.org/"},"JSON"),").\nThe server answer can be one of the following content-type in the http Header:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Content-type: application/json\nContent-Type: application/x-json-stream\n")),Object(a.b)("p",null,"In the last case, it corresponds to JSON objects delimited by newlines(streaming JSON for large answer), e.g.:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{ "id": 1, "foo": "bar" }\n{ "id": 2, "foo": "baz" }\n...\n')),Object(a.b)("h3",{id:"error-handling"},"Error handling"),Object(a.b)("p",null,"Errors are returned using standard HTTP error code syntax.\nAdditional info is included in the header or the body of the return call, JSON-formatted with the parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ExceptionClass\nExceptionMessage\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"ExceptionClass")," refers to Rucio Exceptions."))}p.isMDXComponent=!0},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);