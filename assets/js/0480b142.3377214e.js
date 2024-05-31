"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[836],{8976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(5893),t=s(1151);const o={sidebar_position:80},r="Frequently Asked Questions",l={id:"faq",title:"Frequently Asked Questions",description:"General",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/faq.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"defaultSidebar",previous:{title:"Behind the scenes",permalink:"/docs/behind-the-scenes"}},a={},c=[{value:"General",id:"general",level:2},{value:"Is Springwolf free &amp; What&#39;s the license",id:"is-springwolf-free--whats-the-license",level:3},{value:"Use <code>springwolf-ui</code> only (without plugins)",id:"use-springwolf-ui-only-without-plugins",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Show <code>debug</code> output in the logs",id:"show-debug-output-in-the-logs",level:3},{value:"The Springwolf UI isn&#39;t showing",id:"the-springwolf-ui-isnt-showing",level:3},{value:"Unable to publish message from the UI",id:"unable-to-publish-message-from-the-ui",level:3},{value:"Consumers are detected multiple times (with different payloads)",id:"consumers-are-detected-multiple-times-with-different-payloads",level:3},{value:"Only one of multiple classes with the same name (different package) is detected",id:"only-one-of-multiple-classes-with-the-same-name-different-package-is-detected",level:3},{value:"Generic types (List) don&#39;t contain item properties",id:"generic-types-list-dont-contain-item-properties",level:3},{value:"How to migrate from Springwolf 0.18.0 to 1.0.0",id:"how-to-migrate-from-springwolf-0180-to-100",level:3},{value:"How to migrate from the deprecated <code>AsyncApiDocket</code> bean to Spring properties",id:"how-to-migrate-from-the-deprecated-asyncapidocket-bean-to-spring-properties",level:3},{value:"Is Spring Boot 2.X supported",id:"is-spring-boot-2x-supported",level:3},{value:"Usage Patterns",id:"usage-patterns",level:2},{value:"How to access the generated documentation within java",id:"how-to-access-the-generated-documentation-within-java",level:3},{value:"How to generate the documentation at build time",id:"how-to-generate-the-documentation-at-build-time",level:3},{value:"With Gradle",id:"with-gradle",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"is-springwolf-free--whats-the-license",children:"Is Springwolf free & What's the license"}),"\n",(0,i.jsxs)(n.p,{children:["Yes, you can use Springwolf for private and commercial purposes as long as you comply to the ",(0,i.jsx)(n.a,{href:"https://github.com/springwolf/springwolf-core/blob/master/LICENSE",children:"Apache License 2.0"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"use-springwolf-ui-only-without-plugins",children:["Use ",(0,i.jsx)(n.code,{children:"springwolf-ui"})," only (without plugins)"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"springwolf-ui"})," without any other Springwolf dependency.\n",(0,i.jsx)(n.code,{children:"springwolf-ui"})," will fetch any documentation available at the ",(0,i.jsx)(n.code,{children:"springwolf/docs"})," path.\nIt must be in ",(0,i.jsx)(n.code,{children:"json"})," format (",(0,i.jsx)(n.code,{children:"yaml"})," isn't supported)."]}),"\n",(0,i.jsxs)(n.p,{children:["Either create a custom spring controller to serve the file or ",(0,i.jsx)(n.a,{href:"https://spring.io/guides/gs/serving-web-content/",children:"serve static resources with spring"})," and place your AsyncAPI document into ",(0,i.jsx)(n.code,{children:"resources/springwolf/docs"})," (without file extension)."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"springwolf-ui"})," doesn't support the full AsyncAPI spec."]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.h3,{id:"show-debug-output-in-the-logs",children:["Show ",(0,i.jsx)(n.code,{children:"debug"})," output in the logs"]}),"\n",(0,i.jsxs)(n.p,{children:["Springwolf uses the default logging setup of Spring Boot.\nTo enable ",(0,i.jsx)(n.code,{children:"DEBUG"})," output, add the following line to the ",(0,i.jsx)(n.code,{children:"application.properties"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"logging.level.io.github.springwolf=DEBUG\n"})}),"\n",(0,i.jsx)(n.h3,{id:"the-springwolf-ui-isnt-showing",children:"The Springwolf UI isn't showing"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"springwolf-ui"})," dependency is added, the UI should be visible at ",(0,i.jsx)(n.a,{href:"http://localhost:8080/springwolf/asyncapi-ui.html",children:"http://localhost:8080/springwolf/asyncapi-ui.html"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If not, whether"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["you customized the spring ",(0,i.jsx)(n.code,{children:"context-path"})," setting"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"static assets are being served at all. See the code below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n   @Override\n   public void addResourceHandlers(ResourceHandlerRegistry registry) {\n     registry\n         .addResourceHandler("/**")\n         .addResourceLocations("classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/");\n   }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Taken from ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/950375987475005471/950375988217409548/1051909821848363038",children:"Discord Chat"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["spring-security (or similar) denies access the URLs (HTTP 403). Check ",(0,i.jsx)(n.code,{children:"CustomWebSecurityConfigurerAdapter"})," in ",(0,i.jsx)(n.code,{children:"springwolf-kafka-example"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unable-to-publish-message-from-the-ui",children:"Unable to publish message from the UI"}),"\n",(0,i.jsx)(n.p,{children:"Publishing messages from the UI is disabled by default due to security concerns.\nSpringwolf doesn't offer authentication nor authorization, anyone can publish messages to (production) channels."}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"/docs/configuration/",children:"configuration"})," to enable this feature.\nBe sure to enable fully qualified names (",(0,i.jsx)(n.a,{href:"/docs/configuration/",children:(0,i.jsx)(n.code,{children:"use-fqn"})}),") as well."]}),"\n",(0,i.jsx)(n.p,{children:"Spring Security allows to limit access to authorized users."}),"\n",(0,i.jsx)(n.h3,{id:"consumers-are-detected-multiple-times-with-different-payloads",children:"Consumers are detected multiple times (with different payloads)"}),"\n",(0,i.jsx)(n.p,{children:"When Springwolf finds multiple consumers/producers for the same channel/topic, these are merged together.\nThis is expected, as there are use-cases where different payloads are sent via the same channel/topic."}),"\n",(0,i.jsxs)(n.p,{children:["Springwolf uses on scanners to find all consumer and producers in your application.\nMost likely two scanners found your consumer/producer each.\nSee ",(0,i.jsx)(n.a,{href:"/docs/configuration/",children:"configuration"})," to disable scanners."]}),"\n",(0,i.jsx)(n.h3,{id:"only-one-of-multiple-classes-with-the-same-name-different-package-is-detected",children:"Only one of multiple classes with the same name (different package) is detected"}),"\n",(0,i.jsxs)(n.p,{children:["Enable the fully qualified class name (FQN) option (",(0,i.jsx)(n.code,{children:"springwolf.use-fqn=true"}),") so that Springwolf uses the FQN internally."]}),"\n",(0,i.jsx)(n.h3,{id:"generic-types-list-dont-contain-item-properties",children:"Generic types (List) don't contain item properties"}),"\n",(0,i.jsx)(n.p,{children:"Due to java type erasure some generic type information is lost during runtime."}),"\n",(0,i.jsx)(n.p,{children:"Defining your own type can resolve this."}),"\n",(0,i.jsx)(n.p,{children:"Change"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public void sendMessage(List<String> msg) {}\n"})}),"\n",(0,i.jsx)(n.p,{children:"to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"class ListWrapper extends ArrayList<String> {}\n\npublic void sendMessage(ListWrapper<String> msg) {}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-migrate-from-springwolf-0180-to-100",children:"How to migrate from Springwolf 0.18.0 to 1.0.0"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/springwolf/springwolf-core/releases/tag/v1.0.0",children:"Release 1.0.0"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"how-to-migrate-from-the-deprecated-asyncapidocket-bean-to-spring-properties",children:["How to migrate from the deprecated ",(0,i.jsx)(n.code,{children:"AsyncApiDocket"})," bean to Spring properties"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/springwolf/springwolf-core/issues/445",children:"Issue #445"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"is-spring-boot-2x-supported",children:"Is Spring Boot 2.X supported"}),"\n",(0,i.jsx)(n.p,{children:"You can use an older version of Springwolf, which is build to support Spring Boot 2.X.\nHowever, these versions don't get any updates."}),"\n",(0,i.jsx)(n.p,{children:"Last versions to support Spring Boot 2.X:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"springwolf-amqp:0.6.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"springwolf-cloud-stream:0.1.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"springwolf-core:0.6.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"springwolf-kafka:0.10.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"springwolf-ui:0.6.0"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage-patterns",children:"Usage Patterns"}),"\n",(0,i.jsx)(n.h3,{id:"how-to-access-the-generated-documentation-within-java",children:"How to access the generated documentation within java"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"AsyncApiService"})," to access the generated documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-generate-the-documentation-at-build-time",children:"How to generate the documentation at build time"}),"\n",(0,i.jsx)(n.h4,{id:"with-gradle",children:"With Gradle"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"https://github.com/springdoc/springdoc-openapi-gradle-plugin",children:(0,i.jsx)(n.code,{children:"springdoc-openapi-gradle-plugin"})})," and configure the plugin\nfor Springwolf by pointing it to the Springwolf docs endpoint:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'openApi {\n    apiDocsUrl = "http://localhost:8080/springwolf/docs"\n    outputDir = file("$buildDir/docs")\n    outputFileName = "async-api.json"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/build.gradle",children:(0,i.jsx)(n.code,{children:"springwolf-kafka-example"})}),"\ncontains a working example."]}),"\n",(0,i.jsxs)(n.p,{children:["The plugin will startup the spring boot application by using the ",(0,i.jsx)(n.code,{children:"bootRun"})," task and then try to download the documentation\nfrom the given ",(0,i.jsx)(n.code,{children:"apiDocsUrl"})," and store it in the ",(0,i.jsx)(n.code,{children:"outputDir"})," and with the given ",(0,i.jsx)(n.code,{children:"outputFileName"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If your application is unable to start up with the ",(0,i.jsx)(n.code,{children:"bootRun"})," task, see if ",(0,i.jsx)(n.a,{href:"https://github.com/springdoc/springdoc-openapi-gradle-plugin#customization",children:"customBootRun"}),"\nproperties can help you."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);