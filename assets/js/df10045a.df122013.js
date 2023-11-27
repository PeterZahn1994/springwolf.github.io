"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[558],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return a?t.createElement(h,i(i({ref:n},c),{},{components:a})):t.createElement(h,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},176:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_position:64},i="Producers",d={unversionedId:"configuration/documenting-producers",id:"configuration/documenting-producers",title:"Producers",description:"Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically.",source:"@site/docs/configuration/documenting-producers.md",sourceDirName:"configuration",slug:"/configuration/documenting-producers",permalink:"/docs/configuration/documenting-producers",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration/documenting-producers.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"tutorialSidebar",previous:{title:"Consumers",permalink:"/docs/configuration/documenting-consumers"},next:{title:"Bindings",permalink:"/docs/configuration/documenting-bindings"}},l={},p=[{value:"Option 1: <code>@AsyncPublisher</code>",id:"option-1-asyncpublisher",level:2},{value:"Channel Name",id:"channel-name",level:3},{value:"Description",id:"description",level:3},{value:"Header",id:"header",level:3},{value:"Servers",id:"servers",level:3},{value:"Option 2: <code>ProducerData</code> (deprecated)",id:"option-2-producerdata-deprecated",level:2},{value:"Channel Name",id:"channel-name-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Binding",id:"binding",level:3},{value:"Payload Type",id:"payload-type",level:3},{value:"Header",id:"header-1",level:3},{value:"<code>AmqpProducerData</code>",id:"amqpproducerdata",level:3},{value:"<code>KafkaProducerData</code>",id:"kafkaproducerdata",level:3}],c={toc:p};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"producers"},"Producers"),(0,r.kt)("p",null,"Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically."),(0,r.kt)("p",null,"Because producers are also an important part of AsyncAPI, Springwolf provides a way to explicitly add them to the generated document."),(0,r.kt)("p",null,"To document producers, either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add the ",(0,r.kt)("inlineCode",{parentName:"li"},"@AsyncPublisher")," annotation or"),(0,r.kt)("li",{parentName:"ul"},"(deprecated) declare the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProducerData")," object as part of the ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncApiDocket"))),(0,r.kt)("p",null,"You are free to use all options together. Per channel and operation, first ",(0,r.kt)("inlineCode",{parentName:"p"},"ProducerData")," is used, then ",(0,r.kt)("inlineCode",{parentName:"p"},"@AsyncPublisher"),"."),(0,r.kt)("h2",{id:"option-1-asyncpublisher"},"Option 1: ",(0,r.kt)("inlineCode",{parentName:"h2"},"@AsyncPublisher")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@AsyncPublisher")," annotation is added to the method of the publisher and extracts the payload from its arguments.\nAdditional fields can be documented."),(0,r.kt)("p",null,"The protocol operation binding is configured via ",(0,r.kt)("inlineCode",{parentName:"p"},"@AmqpAsyncOperationBinding"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@KafkaAsyncOperationBinding")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@AsyncGenericOperationBinding"),", which has to be on the same method."),(0,r.kt)("p",null,"Below is an example to demonstrate the annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@AsyncPublisher(operation = @AsyncOperation(\n        channelName = "example-producer-topic",\n        description = "Optional. Customer uploaded an example payload",\n        servers = {"kafka"},\n        headers = @AsyncOperation.Headers(\n                schemaName = "SpringKafkaDefaultHeaders",\n                values = {\n                        @AsyncOperation.Headers.Header(\n                                name = DEFAULT_CLASSID_FIELD_NAME,\n                                description = "Spring Type Id Header",\n                                value = "io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto"\n                        ),\n                        // (demonstrating https://cloudevents.io) \n                        @AsyncOperation.Headers.Header(\n                                name = AsyncHeadersCloudEventConstants.TYPE,\n                                description = AsyncHeadersCloudEventConstants.TYPE_DESC,\n                                value = "NestedPayloadDto.v1")\n                        // ...\n                }\n        )\n))\n@KafkaAsyncOperationBinding\npublic void sendMessage(ExamplePayloadDto msg) {\n    // send\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Springwolf only finds methods that are within the ",(0,r.kt)("inlineCode",{parentName:"p"},"base-package"),".")),(0,r.kt)("h3",{id:"channel-name"},"Channel Name"),(0,r.kt)("p",null,"The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI."),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Optional. The description allows for human-friendly text to verbosely explain the ",(0,r.kt)("em",{parentName:"p"},"message"),", like specific domain, what the topic is used for and which data it contains."),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,"Optional. The headers describing the metadata of the payload."),(0,r.kt)("h3",{id:"servers"},"Servers"),(0,r.kt)("p",null,"Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.\nThe server needs to exist in ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/"},"configuration > Servers")," as well."),(0,r.kt)("h2",{id:"option-2-producerdata-deprecated"},"Option 2: ",(0,r.kt)("inlineCode",{parentName:"h2"},"ProducerData")," (deprecated)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Must use configuration via ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncApiDocket")," and can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties"),".")),(0,r.kt)("p",null,"Below is an example of describing a Kafka producer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic AsyncApiDocket asyncApiDocket() {\n\n    ProducerData exampleProducerData = ProducerData.builder()\n            .channelName("example-producer-topic")\n            .description("Optional. Customer uploaded an example payload")\n            .operationBinding(ImmutableMap.of("kafka", new KafkaOperationBinding()))\n            .payloadType(ExamplePayloadDto.class)\n            .headers(AsyncHeaders.NOT_USED)\n            .build();\n  \n    return AsyncApiDocket.builder()\n            .basePackage(...)\n            .info(...)\n            .server(...)\n            .producer(exampleProducerData)\n            .build();\n}\n')),(0,r.kt)("p",null,"Multiple producers can be configured by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"producer()")," method multiple times."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use specific ProducerData types ",(0,r.kt)("inlineCode",{parentName:"p"},"AmqpProducerData")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaProducerData")," for protocol specific attributes.")),(0,r.kt)("h3",{id:"channel-name-1"},"Channel Name"),(0,r.kt)("p",null,"The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI."),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Optional. The description allows for human-friendly text to verbosely explain the ",(0,r.kt)("em",{parentName:"p"},"message"),", like specific domain, what the topic is used for and which data it contains."),(0,r.kt)("h3",{id:"binding"},"Binding"),(0,r.kt)("p",null,"This property is used to discriminate the producer's protocol and provide protocol-specific properties (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/documenting-bindings"},"documenting bindings"),")."),(0,r.kt)("h3",{id:"payload-type"},"Payload Type"),(0,r.kt)("p",null,"The class object of the payload that will be published to this channel."),(0,r.kt)("h3",{id:"header-1"},"Header"),(0,r.kt)("p",null,"Optional. The headers describing the metadata of the payload.\nBy default, ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncHeaders.NOT_DOCUMENTED")," is used to indicate that no explicit header documentation exists.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncHeaders")," to add your custom headers, use ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncHeaders.NOT_USED")," if you don't use headers and ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncHeadersForCloudEventsBuilder")," if your events follow the CloudEvent specification."),(0,r.kt)("h3",{id:"amqpproducerdata"},(0,r.kt)("inlineCode",{parentName:"h3"},"AmqpProducerData")),(0,r.kt)("p",null,"The above Kafka ",(0,r.kt)("inlineCode",{parentName:"p"},"ProducerData")," equivalent in ",(0,r.kt)("inlineCode",{parentName:"p"},"AmqpProducerData"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    AmqpProducerData exampleProducer = AmqpProducerData.amqpProducerDataBuilder()\n        .queueName("example-producer-channel")\n        .description("example-producer-channel-description")\n        .exchangeName("example-topic-exchange")\n        .routingKey("example-topic-routing-key")\n        .payloadType(AnotherPayloadDto.class)\n        .build();\n')),(0,r.kt)("h3",{id:"kafkaproducerdata"},(0,r.kt)("inlineCode",{parentName:"h3"},"KafkaProducerData")),(0,r.kt)("p",null,"The above Kafka ",(0,r.kt)("inlineCode",{parentName:"p"},"ProducerData")," simplifies to the following ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaProducerData"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    KafkaProducerData exampleProducerData = KafkaProducerData.kafkaProducerDataBuilder()\n        .topicName("example-producer-topic")\n        .description("Optional. Customer uploaded an example payload")\n        .payloadType(ExamplePayloadDto.class)\n        .headers(AsyncHeaders.NOT_USED)\n        .build();\n')))}s.isMDXComponent=!0}}]);