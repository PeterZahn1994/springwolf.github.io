"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:80},r="Frequently Asked Questions",l={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"General",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/faq.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Behind the scenes",permalink:"/docs/behind-the-scenes"}},s={},p=[{value:"General",id:"general",level:2},{value:"Is Springwolf free &amp; What&#39;s the license",id:"is-springwolf-free--whats-the-license",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Show <code>debug</code> output in the logs",id:"show-debug-output-in-the-logs",level:3},{value:"The Springwolf UI isn&#39;t showing",id:"the-springwolf-ui-isnt-showing",level:3},{value:"Unable to publish message from the UI",id:"unable-to-publish-message-from-the-ui",level:3},{value:"Is Spring Boot 2.X supported",id:"is-spring-boot-2x-supported",level:3},{value:"Usage Patterns",id:"usage-patterns",level:2},{value:"How to access the generated documentation within java",id:"how-to-access-the-generated-documentation-within-java",level:3},{value:"How to generate the documentation at build time",id:"how-to-generate-the-documentation-at-build-time",level:3},{value:"With Gradle",id:"with-gradle",level:4},{value:"Consumers are detected multiple times (with different payloads)",id:"consumers-are-detected-multiple-times-with-different-payloads",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"is-springwolf-free--whats-the-license"},"Is Springwolf free & What's the license"),(0,o.kt)("p",null,"Yes, you can use Springwolf for private and commercial purposes as long as you comply to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/LICENSE"},"Apache License 2.0"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"show-debug-output-in-the-logs"},"Show ",(0,o.kt)("inlineCode",{parentName:"h3"},"debug")," output in the logs"),(0,o.kt)("p",null,"Springwolf uses the default logging setup of Spring Boot.\nTo enable ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," output, add the following line to the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"logging.level.io.github.stavshamir.springwolf=DEBUG\n")),(0,o.kt)("h3",{id:"the-springwolf-ui-isnt-showing"},"The Springwolf UI isn't showing"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"springwolf-ui")," dependency is added, the UI should be visible at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/springwolf/asyncapi-ui.html"},"http://localhost:8080/springwolf/asyncapi-ui.html"),"."),(0,o.kt)("p",null,"If not, whether"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"you customized the spring ",(0,o.kt)("inlineCode",{parentName:"p"},"context-path")," setting ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"static assets are being served at all. See the code below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n  @Override\n  public void addResourceHandlers(ResourceHandlerRegistry registry) {\n    registry\n        .addResourceHandler("/**")\n        .addResourceLocations("classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/");\n  }\n}\n')),(0,o.kt)("p",{parentName:"li"},"Taken from ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/950375987475005471/950375988217409548/1051909821848363038"},"Discord Chat"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"spring-security (or similar) denies access the URLs (HTTP 403). Check ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomWebSecurityConfigurerAdapter")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"springwolf-kafka-example"),"."))),(0,o.kt)("h3",{id:"unable-to-publish-message-from-the-ui"},"Unable to publish message from the UI"),(0,o.kt)("p",null,"Publishing messages from the UI is disabled by default due to security concerns.\nSpringwolf doesn't offer authentication nor authorization, anyone can publish messages to (production) channels."),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/"},"configuration")," to enable this feature."),(0,o.kt)("p",null,"Spring Security allows to limit access to authorized users."),(0,o.kt)("h3",{id:"is-spring-boot-2x-supported"},"Is Spring Boot 2.X supported"),(0,o.kt)("p",null,"You can use an older version of Springwolf, which is build to support Spring Boot 2.X.\nHowever, these versions don't get any updates."),(0,o.kt)("p",null,"Last versions to support Spring Boot 2.X:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"springwolf-amqp:0.6.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"springwolf-cloud-stream:0.1.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"springwolf-core:0.6.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"springwolf-kafka:0.10.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"springwolf-ui:0.6.0"))),(0,o.kt)("h2",{id:"usage-patterns"},"Usage Patterns"),(0,o.kt)("h3",{id:"how-to-access-the-generated-documentation-within-java"},"How to access the generated documentation within java"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncApiService")," to access the generated documentation."),(0,o.kt)("h3",{id:"how-to-generate-the-documentation-at-build-time"},"How to generate the documentation at build time"),(0,o.kt)("h4",{id:"with-gradle"},"With Gradle"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springdoc/springdoc-openapi-gradle-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"springdoc-openapi-gradle-plugin"))," and configure the plugin\nfor Springwolf by pointing it to the Springwolf docs endpoint: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'openApi {\n    apiDocsUrl = "http://localhost:8080/springwolf/docs"\n    outputDir = file("$buildDir/docs")\n    outputFileName = "async-api.json"\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/build.gradle"},(0,o.kt)("inlineCode",{parentName:"a"},"springwolf-kafka-example")),"\ncontains a working example."),(0,o.kt)("p",null,"The plugin will startup the spring boot application by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootRun")," task and then try to download the documentation\nfrom the given ",(0,o.kt)("inlineCode",{parentName:"p"},"apiDocsUrl")," and store it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputDir")," and with the given ",(0,o.kt)("inlineCode",{parentName:"p"},"outputFileName"),"."),(0,o.kt)("p",null,"If your application is unable to start up with the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootRun")," task, see if ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springdoc/springdoc-openapi-gradle-plugin#customization"},"customBootRun"),"\nproperties can help you."),(0,o.kt)("h3",{id:"consumers-are-detected-multiple-times-with-different-payloads"},"Consumers are detected multiple times (with different payloads)"),(0,o.kt)("p",null,"When Springwolf finds multiple consumers/producers for the same channel/topic, these are merged together.\nThis is expected, as there are use-cases where different payloads are sent via the same channel/topic."),(0,o.kt)("p",null,"Springwolf uses on scanners to find all consumer and producers in your application.\nMost likely two scanners found your consumer/producer each.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/"},"configuration")," to disable scanners."))}c.isMDXComponent=!0}}]);