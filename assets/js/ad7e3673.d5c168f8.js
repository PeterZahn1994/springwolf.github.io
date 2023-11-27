"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[987],{3905:(e,n,a)=>{a.d(n,{Zo:()=>l,kt:()=>m});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return a?t.createElement(g,r(r({ref:n},l),{},{components:a})):t.createElement(g,r({ref:n},l))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var c=2;c<o;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9899:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=a(7462),i=(a(7294),a(3905));const o={sidebar_position:66},r="Bindings",d={unversionedId:"configuration/documenting-bindings",id:"configuration/documenting-bindings",title:"Bindings",description:"To indicate the binding (protocol) that's documented, there are multiple options to document them.",source:"@site/docs/configuration/documenting-bindings.md",sourceDirName:"configuration",slug:"/configuration/documenting-bindings",permalink:"/docs/configuration/documenting-bindings",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration/documenting-bindings.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{sidebar_position:66},sidebar:"tutorialSidebar",previous:{title:"Producers",permalink:"/docs/configuration/documenting-producers"},next:{title:"Messages",permalink:"/docs/configuration/documenting-messages"}},p={},c=[{value:"Option 1: Annotations",id:"option-1-annotations",level:2},{value:"<code>@AmqpAsyncOperationBinding</code>",id:"amqpasyncoperationbinding",level:3},{value:"<code>@KafkaAsyncOperationBinding</code>",id:"kafkaasyncoperationbinding",level:3},{value:"<code>@JmsAsyncOperationBinding</code>",id:"jmsasyncoperationbinding",level:3},{value:"<code>@SnsAsyncOperationBinding</code>",id:"snsasyncoperationbinding",level:3},{value:"<code>@SqsAsyncOperationBinding</code>",id:"sqsasyncoperationbinding",level:3},{value:"<code>@AsyncGenericOperationBinding</code>",id:"asyncgenericoperationbinding",level:3},{value:"Option 2: AsyncApiDocket (deprecated)",id:"option-2-asyncapidocket-deprecated",level:2},{value:"<code>AmqpProducerData</code> / <code>AmqpConsumerData</code>",id:"amqpproducerdata--amqpconsumerdata",level:3},{value:"<code>KafkaProducerData</code> / <code>KafkaConsumeData</code>",id:"kafkaproducerdata--kafkaconsumedata",level:3},{value:"Binding properties",id:"binding-properties",level:2},{value:"General",id:"general",level:3},{value:"Queue Name (Channel Name)",id:"queue-name-channel-name",level:4},{value:"Description",id:"description",level:4},{value:"Payload Type",id:"payload-type",level:4},{value:"Headers",id:"headers",level:4},{value:"AMQP",id:"amqp",level:3},{value:"Exchange Name",id:"exchange-name",level:4},{value:"Routing Key",id:"routing-key",level:4},{value:"Kafka",id:"kafka",level:3},{value:"Group Id",id:"group-id",level:4},{value:"Client Id",id:"client-id",level:4}],l={toc:c};function s(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bindings"},"Bindings"),(0,i.kt)("p",null,"To indicate the binding (protocol) that's documented, there are multiple options to document them.\nAdd at least one binding so that readers know the protocol in use and functionality like publishing works."),(0,i.kt)("p",null,"To use the protocol specific bindings, ensure that you have added the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/supported-protocols"},"plugin"),"."),(0,i.kt)("h2",{id:"option-1-annotations"},"Option 1: Annotations"),(0,i.kt)("h3",{id:"amqpasyncoperationbinding"},(0,i.kt)("inlineCode",{parentName:"h3"},"@AmqpAsyncOperationBinding")),(0,i.kt)("p",null,"Associate this operation with AMQP, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationBindingsObject"},"operation-binding")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@AmqpAsyncOperationBinding(cc = "example-topic-routing-key")\n')),(0,i.kt)("h3",{id:"kafkaasyncoperationbinding"},(0,i.kt)("inlineCode",{parentName:"h3"},"@KafkaAsyncOperationBinding")),(0,i.kt)("p",null,"Associate this operation with Kafka, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationBindingsObject"},"operation-binding")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@KafkaAsyncOperationBinding(\n        bindingVersion = "1"\n)\n')),(0,i.kt)("h3",{id:"jmsasyncoperationbinding"},(0,i.kt)("inlineCode",{parentName:"h3"},"@JmsAsyncOperationBinding")),(0,i.kt)("p",null,"Associate this operation with JMS, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationBindingsObject"},"operation-binding")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@JmsAsyncOperationBinding\n")),(0,i.kt)("h3",{id:"snsasyncoperationbinding"},(0,i.kt)("inlineCode",{parentName:"h3"},"@SnsAsyncOperationBinding")),(0,i.kt)("p",null,"Associate this operation with SNS, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationBindingsObject"},"operation-binding")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SnsAsyncOperationBinding\n")),(0,i.kt)("h3",{id:"sqsasyncoperationbinding"},(0,i.kt)("inlineCode",{parentName:"h3"},"@SqsAsyncOperationBinding")),(0,i.kt)("p",null,"Associate this operation with SQS, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationBindingsObject"},"operation-binding")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SqsAsyncOperationBinding\n")),(0,i.kt)("h3",{id:"asyncgenericoperationbinding"},(0,i.kt)("inlineCode",{parentName:"h3"},"@AsyncGenericOperationBinding")),(0,i.kt)("p",null,"This binding is generic, so that any properties can be specified.\nYou can define anything and there is no validation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@AsyncGenericOperationBinding(\n    type = "custom-binding",\n    fields = {\n        "internal-field=customValue",\n        "nested.key=nestedValue"\n    }\n)\n')),(0,i.kt)("h2",{id:"option-2-asyncapidocket-deprecated"},"Option 2: AsyncApiDocket (deprecated)"),(0,i.kt)("h3",{id:"amqpproducerdata--amqpconsumerdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"AmqpProducerData")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"AmqpConsumerData")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    AmqpProducerData exampleProducer = AmqpProducerData.amqpProducerDataBuilder()\n        .queueName("example-producer-channel")\n        .description("example-producer-channel-description")\n        .exchangeName("example-topic-exchange")\n        .routingKey("example-topic-routing-key")\n        .payloadType(AnotherPayloadDto.class)\n        .build();\n')),(0,i.kt)("h3",{id:"kafkaproducerdata--kafkaconsumedata"},(0,i.kt)("inlineCode",{parentName:"h3"},"KafkaProducerData")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"KafkaConsumeData")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    KafkaProducerData exampleProducerData = KafkaProducerData.kafkaProducerDataBuilder()\n        .topicName("example-producer-topic")\n        .description("Optional. Customer uploaded an example payload")\n        .payloadType(ExamplePayloadDto.class)\n        .headers(AsyncHeaders.NOT_USED)\n        .build();\n')),(0,i.kt)("h2",{id:"binding-properties"},"Binding properties"),(0,i.kt)("p",null,"Explanation of the different binding properties."),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("p",null,"The following properties are the same for all bindings."),(0,i.kt)("h4",{id:"queue-name-channel-name"},"Queue Name (Channel Name)"),(0,i.kt)("p",null,"The queue name that will be used to publish messages to by the UI."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Optional. The description allows for human-friendly text to verbosely explain the ",(0,i.kt)("em",{parentName:"p"},"message"),", like specific domain, what the topic is used for and which data it contains."),(0,i.kt)("h4",{id:"payload-type"},"Payload Type"),(0,i.kt)("p",null,"The class object of the payload that will be published to this channel."),(0,i.kt)("h4",{id:"headers"},"Headers"),(0,i.kt)("p",null,"The Kafka headers describing the metadata of the payload, more details in the generic ProducerData."),(0,i.kt)("p",null,"The Springwolf comes with a special ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncHeadersCloudEventConstants")," to document CloudEvents."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka")," header ",(0,i.kt)("inlineCode",{parentName:"p"},"__TypeId__")," (constant from ",(0,i.kt)("inlineCode",{parentName:"p"}," AbstractJavaTypeMapper.DEFAULT_CLASSID_FIELD_NAME"),") can be documented as well."),(0,i.kt)("h3",{id:"amqp"},"AMQP"),(0,i.kt)("h4",{id:"exchange-name"},"Exchange Name"),(0,i.kt)("p",null,"The exchange name that will be used to bind queues to."),(0,i.kt)("h4",{id:"routing-key"},"Routing Key"),(0,i.kt)("p",null,"The routing key used when publishing a message."),(0,i.kt)("h3",{id:"kafka"},"Kafka"),(0,i.kt)("h4",{id:"group-id"},"Group Id"),(0,i.kt)("p",null,"The group id that will be used during message consumption"),(0,i.kt)("h4",{id:"client-id"},"Client Id"),(0,i.kt)("p",null,"The client id to identify the consumer"))}s.isMDXComponent=!0}}]);