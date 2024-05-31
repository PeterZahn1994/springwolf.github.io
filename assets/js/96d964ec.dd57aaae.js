"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[84],{9684:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var s=a(5893),t=a(1151),r=a(4866),i=a(5162),o=a(9286);const l="dependencies {\n    implementation 'io.swagger.core.v3:swagger-core:2.2.20'\n}",c="<dependencies>\n    <dependency>\n        <groupId>io.swagger.core.v3</groupId>\n        <artifactId>swagger-core</artifactId>\n        <version>2.2.20</version>\n    </dependency>\n</dependencies>",d={sidebar_position:68},u="Messages",p={id:"configuration/documenting-messages",title:"Messages",description:"Springwolf provides different ways to document the messages. The message is part of the AsyncAPI operationObject",source:"@site/docs/configuration/documenting-messages.mdx",sourceDirName:"configuration",slug:"/configuration/documenting-messages",permalink:"/docs/configuration/documenting-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration/documenting-messages.mdx",tags:[],version:"current",sidebarPosition:68,frontMatter:{sidebar_position:68},sidebar:"defaultSidebar",previous:{title:"Bindings",permalink:"/docs/configuration/documenting-bindings"},next:{title:"Customizing",permalink:"/docs/configuration/customizing"}},h={},m=[{value:"Payload Type",id:"payload-type",level:2},{value:"Unwrapping the Payload",id:"unwrapping-the-payload",level:3},{value:"Schema",id:"schema",level:2},{value:"Using <code>@Schema</code>",id:"using-schema",level:3},{value:"Usage",id:"usage",level:4},{value:"Primitive, final and external classes",id:"primitive-final-and-external-classes",level:4}];function g(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"messages",children:"Messages"}),"\n",(0,s.jsxs)(n.p,{children:["Springwolf provides different ways to document the messages. The ",(0,s.jsx)(n.code,{children:"message"})," is part of the AsyncAPI ",(0,s.jsx)(n.code,{children:"operationObject"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A definition of the message that will be published or received by this operation"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A message can be defined as part of the ",(0,s.jsx)(n.code,{children:"@AsyncOperation"})," annotation, using ",(0,s.jsx)(n.code,{children:"message = @AsyncMessage()"})," field."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@AsyncPublisher(operation = @AsyncOperation(\n        channelName = "example-producer-topic",\n        description = "Customer uploaded an example payload", // Optional\n        payloadType = ExamplePayloadDto.class, // Optional\n        message = @AsyncMessage( // Optional\n                messageId = "my-unique-id",\n                name = "ExamplePayloadDto",\n                schemaFormat = "application/vnd.aai.asyncapi+json;version=3.0.0",\n                description = "Example payload model for sending messages"\n        )\n))\npublic void sendMessage(ExamplePayloadDto msg) {\n    // process\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"payload-type",children:"Payload Type"}),"\n",(0,s.jsx)(n.p,{children:"Springwolf tries to auto-detect the payload type based on the method signature."}),"\n",(0,s.jsxs)(n.p,{children:["When the method has multiple arguments, the payload can be indicated via ",(0,s.jsx)(n.code,{children:"@Payload"}),", that's"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public void sendMessage(@Payload ExamplePayloadDto msg, String traceId, Object loggingContext) {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, the annotation property ",(0,s.jsx)(n.code,{children:"payloadType"})," of ",(0,s.jsx)(n.code,{children:"@AsyncOperation"})," allows to overwrite the detected class."]}),"\n",(0,s.jsx)(n.h3,{id:"unwrapping-the-payload",children:"Unwrapping the Payload"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes, the payload type is wrapped in other objects.\nSome wrappers are automatically unwrapped, including ",(0,s.jsx)(n.code,{children:"Message<String>"}),", which becomes ",(0,s.jsx)(n.code,{children:"String"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/configuration/",children:"configuration property"})," to modify the defaults is currently in ",(0,s.jsx)(n.em,{children:"beta"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Assuming a method signature of ",(0,s.jsx)(n.code,{children:"sendMessage(ConsumerRecord<String, MyEvent> msg)"}),", where the actual payload is located in parameter index 1 (String).\nAdding the configuration property ",(0,s.jsx)(n.code,{children:"springwolf.payload.extractable-classes.org.apache.kafka.clients.consumer.ConsumerRecord=1"})," tells Springwolf how to handle this payload type."]}),"\n",(0,s.jsx)(n.p,{children:"The configuration property is split into three parts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The base configuration property ",(0,s.jsx)(n.code,{children:"springwolf.payload.extractable-classes"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The canonical class name, ",(0,s.jsx)(n.code,{children:"org.apache.kafka.clients.consumer.ConsumerRecord"})," in this case."]}),"\n",(0,s.jsxs)(n.li,{children:["The parameter index (",(0,s.jsx)(n.code,{children:"1"}),") of the actual payload class (",(0,s.jsx)(n.code,{children:"MyEvent"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsxs)(n.p,{children:["Under the hood Springwolf relies on swagger-core ",(0,s.jsx)(n.code,{children:"ModelConverters"})," to define the message schema."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the type and example values for the properties are guessed.\nThe default Jackson ",(0,s.jsx)(n.code,{children:"ModelResolver"})," supports schema definitions via ",(0,s.jsx)(n.code,{children:"@Schema"})," to overwrite the property definitions."]}),"\n",(0,s.jsxs)(n.h3,{id:"using-schema",children:["Using ",(0,s.jsx)(n.code,{children:"@Schema"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@Schema"})," annotation allows to set many properties like ",(0,s.jsx)(n.code,{children:"description"}),", ",(0,s.jsx)(n.code,{children:"example"}),", ",(0,s.jsx)(n.code,{children:"requiredMode"}),", ",(0,s.jsx)(n.code,{children:"minimum"})," to document payloads."]}),"\n",(0,s.jsxs)(n.p,{children:["All properties are part of the produced AsyncAPI file. However, not all are displayed in ",(0,s.jsx)(n.code,{children:"springwolf-ui"})," (see ",(0,s.jsx)(n.a,{href:"https://github.com/springwolf/springwolf-core/issues/378",children:"#378"}),")"]}),"\n",(0,s.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Add the following dependency:"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(i.Z,{value:"Groovy",label:"Groovy",default:!0,children:(0,s.jsx)(o.Z,{language:"groovy",children:l})}),(0,s.jsx)(i.Z,{value:"Maven",label:"Maven",children:(0,s.jsx)(o.Z,{language:"xml",children:c})})]}),"\n",(0,s.jsxs)(n.p,{children:["Then, add the ",(0,s.jsx)(n.code,{children:"@Schema"})," annotation to the payload class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import io.swagger.v3.oas.annotations.media.Schema;\nimport static io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED;\n\n@Schema(description = "Example payload model")\npublic class ExamplePayloadDto {\n    @Schema(description = "Some string field", example = "some string value", requiredMode = REQUIRED)\n    private String someString;\n\n    public String getSomeString() {\n        return someString;\n    }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@AsyncMessage.description"})," field will always override the ",(0,s.jsx)(n.code,{children:"@Schema"})," description if provided"]})}),"\n",(0,s.jsxs)(n.p,{children:["For a full example, take a look at ",(0,s.jsxs)(n.a,{href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/springwolf/examples/amqp/dtos/ExamplePayloadDto.java",children:["ExamplePayloadDto.java in ",(0,s.jsx)(n.code,{children:"springwolf-amqp-example"})]})]}),"\n",(0,s.jsx)(n.h4,{id:"primitive-final-and-external-classes",children:"Primitive, final and external classes"}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"@Schema"})," annotation can't be attached to the payload class (that's ",(0,s.jsx)(n.code,{children:"java.lang.String"}),"), the payload can be wrapped in an envelope class. The actual payload is a field within this class (",(0,s.jsx)(n.code,{children:"StringEnvelope"}),"), marked using ",(0,s.jsx)(n.code,{children:"@AsyncApiPayload"})," and documented using the ",(0,s.jsx)(n.code,{children:"@Schema"})," annotation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@AsyncListener( operation = @AsyncOperation( channelName = TOPIC,\n     payloadType = StringEnvelope.class) // <- envelope class\n)\npublic void receiveStringPayload(String stringPayload) { // <- The original class is used here\n    // ...\n}\n\n@Data\nstatic class StringEnvelope {\n    @AsyncApiPayload // <- The annotation marker\n    @Schema(description = "Payload description using @Schema annotation and @AsyncApiPayload within envelope class")\n    private final String payload;\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"../add-ons",children:"Add-Ons"})," for more information on how to document other formats"]})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>i});a(7294);var s=a(512);const t={tabItem:"tabItem_Ymn6"};var r=a(5893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,i),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>w});var s=a(7294),t=a(512),r=a(2466),i=a(6550),o=a(469),l=a(1980),c=a(7392),d=a(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:t}}=e;return{value:n,label:a,attributes:s,default:t}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,r=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:a,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Nk)(a);return[t,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),x=(()=>{const e=c??g;return h({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(5893);function j(e){let{className:n,block:a,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),t=o[a].value;t!==s&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,t.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,y.jsx)(b,{...e,children:u(e.children)},String(n))}}}]);