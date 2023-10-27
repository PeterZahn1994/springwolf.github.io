"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[47],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,l(l({ref:e},c),{},{components:n})):r.createElement(g,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},285:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:15},l="Supported Protocols",i={unversionedId:"introduction/supported-protocols",id:"introduction/supported-protocols",title:"Supported Protocols",description:"Besides auto-detection of protocols (native support),",source:"@site/docs/introduction/supported-protocols.md",sourceDirName:"introduction",slug:"/introduction/supported-protocols",permalink:"/docs/introduction/supported-protocols",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/introduction/supported-protocols.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction/"},next:{title:"Quickstart",permalink:"/docs/quickstart"}},p={},s=[{value:"Native Support",id:"native-support",level:2},{value:"Any protocol",id:"any-protocol",level:2}],c={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supported-protocols"},"Supported Protocols"),(0,a.kt)("p",null,"Besides auto-detection of protocols (native support),\nany protocol can be defined using Springwolf custom annotations ",(0,a.kt)("inlineCode",{parentName:"p"},"@AsyncListener")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@AsyncPublisher"),"."),(0,a.kt)("h2",{id:"native-support"},"Native Support"),(0,a.kt)("p",null,"The following protocols are supported natively:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,a.kt)("th",{parentName:"tr",align:null},"Auto-detected annotations"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Project"),(0,a.kt)("th",{parentName:"tr",align:null},"Latest Plugin Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AMQP (RabbitMQ)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@RabbitListener")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example"},(0,a.kt)("inlineCode",{parentName:"a"},"springwolf-amqp-example"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic",alt:"Maven Central"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Functions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@Bean")," (functional interface)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example"},(0,a.kt)("inlineCode",{parentName:"a"},"springwolf-cloud-stream"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic",alt:"Maven Central"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@KafkaListener"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"@KafkaHandler")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example"},(0,a.kt)("inlineCode",{parentName:"a"},"springwolf-kafka-example"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic",alt:"Maven Central"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SNS"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sns-example"},(0,a.kt)("inlineCode",{parentName:"a"},"springwolf-sns-example"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sns?color=green&label=springwolf-sns&style=plastic",alt:"Maven Central"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SQS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@SqsListener")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sqs-example"},(0,a.kt)("inlineCode",{parentName:"a"},"springwolf-sqs-example"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sqs?color=green&label=springwolf-sqs&style=plastic",alt:"Maven Central"}))))),(0,a.kt)("p",null,"Check out the example projects, which include a full ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," setup.\nThe examples are simple, easy to start with, good for testing and reproducing bugs."),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/issues/new"},"open an issue")," if you want a protocol to be supported."),(0,a.kt)("h2",{id:"any-protocol"},"Any protocol"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/documenting-consumers"},(0,a.kt)("inlineCode",{parentName:"a"},"@AsyncListener"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/documenting-producers"},(0,a.kt)("inlineCode",{parentName:"a"},"@AsyncPublisher"))," any protocol can be documented, although the binding in the AsyncApi document will remain empty."),(0,a.kt)("p",null,"The protocols with native support come along with a ",(0,a.kt)("inlineCode",{parentName:"p"},"@_ProtocolName_Binding")," annotation to define protocol specific properties."))}u.isMDXComponent=!0}}]);