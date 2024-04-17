"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[558],{9587:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(5893),o=i(1151);const a={sidebar_position:64},s="Producers",r={id:"configuration/documenting-producers",title:"Producers",description:"Unlike consumers which are defined declaratively with an annotation,",source:"@site/docs/configuration/documenting-producers.md",sourceDirName:"configuration",slug:"/configuration/documenting-producers",permalink:"/docs/configuration/documenting-producers",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration/documenting-producers.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"tutorialSidebar",previous:{title:"Consumers",permalink:"/docs/configuration/documenting-consumers"},next:{title:"Bindings",permalink:"/docs/configuration/documenting-bindings"}},d={},c=[{value:"<code>@AsyncPublisher</code>",id:"asyncpublisher",level:2},{value:"Channel Name",id:"channel-name",level:3},{value:"Description",id:"description",level:3},{value:"Header",id:"header",level:3},{value:"Servers",id:"servers",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"producers",children:"Producers"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike consumers which are defined declaratively with an annotation,\nproducers are defined imperatively (that's ",(0,t.jsx)(n.code,{children:"KafkaTemplate"}),"),\nand there is no implementation uniform enough so that metadata can be picked up automatically."]}),"\n",(0,t.jsxs)(n.p,{children:["Because producers are also an important part of AsyncAPI,\nSpringwolf provides a way to explicitly add them to the generated document using the ",(0,t.jsx)(n.code,{children:"@AsyncPublisher"})," annotation."]}),"\n",(0,t.jsx)(n.h2,{id:"asyncpublisher",children:(0,t.jsx)(n.code,{children:"@AsyncPublisher"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@AsyncPublisher"})," annotation is added to the method of the publisher and extracts the payload from its arguments.\nAdditional fields can be documented."]}),"\n",(0,t.jsxs)(n.p,{children:["On the same method, the protocol binding is defined. More details can be found in the ",(0,t.jsx)(n.a,{href:"/docs/configuration/documenting-bindings",children:"bindings"})," section."]}),"\n",(0,t.jsx)(n.p,{children:"Below is an example to demonstrate the annotation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@AsyncPublisher(operation = @AsyncOperation(\n        channelName = "example-producer-topic",\n        description = "Customer uploaded an example payload", // Optional\n        servers = {"kafka"}, // Optional\n        headers = @AsyncOperation.Headers( // Optional\n                schemaName = "SpringKafkaDefaultHeaders",\n                values = {\n                        @AsyncOperation.Headers.Header(\n                                name = DEFAULT_CLASSID_FIELD_NAME,\n                                description = "Spring Type Id Header",\n                                value = "io.github.springwolf.example.dtos.ExamplePayloadDto"\n                        ),\n                        // (demonstrating https://cloudevents.io) \n                        @AsyncOperation.Headers.Header(\n                                name = AsyncHeadersCloudEventConstants.TYPE,\n                                description = AsyncHeadersCloudEventConstants.TYPE_DESC,\n                                value = "NestedPayloadDto.v1")\n                        // ...\n                }\n        )\n))\n@KafkaAsyncOperationBinding\npublic void sendMessage(ExamplePayloadDto msg) {\n    // process\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Springwolf only finds methods that are within the ",(0,t.jsx)(n.code,{children:"base-package"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"channel-name",children:"Channel Name"}),"\n",(0,t.jsx)(n.p,{children:"The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI."}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Optional. The description allows for human-friendly text to verbosely explain the ",(0,t.jsx)(n.em,{children:"message"}),", like specific domain, what the topic is used for and which data it contains."]}),"\n",(0,t.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.p,{children:"Optional. The headers describing the metadata of the payload."}),"\n",(0,t.jsx)(n.h3,{id:"servers",children:"Servers"}),"\n",(0,t.jsxs)(n.p,{children:["Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.\nThe server needs to exist in ",(0,t.jsx)(n.a,{href:"/docs/configuration/",children:"configuration > Servers"})," as well."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);