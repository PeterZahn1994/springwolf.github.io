"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[427],{5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(7462),o=t(7294),r=t(6010),s=t(2466),i=t(6775),l=t(1980),u=t(7392),d=t(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,u]=g({queryString:t,groupId:a}),[c,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=l??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var h=t(2389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),a=u[t].value;a!==i&&(c(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.Z)("tabs__item",b,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v)},o.createElement(k,(0,a.Z)({},e,n)),o.createElement(y,(0,a.Z)({},e,n)))}function N(e){const n=(0,h.Z)();return o.createElement(w,(0,a.Z)({key:String(n)},e))}},4778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),r=t(4866),s=t(5162),i=t(614);const l={sidebar_position:68},u="Messages",d={unversionedId:"configuration/documenting-messages",id:"configuration/documenting-messages",title:"Messages",description:"Springwolf provides different ways to document the messages. The message is part of the AsyncApi operationObject",source:"@site/docs/configuration/documenting-messages.md",sourceDirName:"configuration",slug:"/configuration/documenting-messages",permalink:"/docs/configuration/documenting-messages",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration/documenting-messages.md",tags:[],version:"current",sidebarPosition:68,frontMatter:{sidebar_position:68},sidebar:"tutorialSidebar",previous:{title:"Producers",permalink:"/docs/configuration/documenting-producers"},next:{title:"Customizing",permalink:"/docs/configuration/customizing"}},c={},p=[{value:"Schema",id:"schema",level:2},{value:"Using <code>@Schema</code>",id:"using-schema",level:2},{value:"Usage",id:"usage",level:3},{value:"Custom ModelConverters",id:"custom-modelconverters",level:2}],m={toc:p};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messages"},"Messages"),(0,o.kt)("p",null,"Springwolf provides different ways to document the messages. The ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," is part of the AsyncApi ",(0,o.kt)("inlineCode",{parentName:"p"},"operationObject")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A definition of the message that will be published or received by this operation")),(0,o.kt)("p",null,"A message can be defined as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@AsyncOperation")," annotation, using ",(0,o.kt)("inlineCode",{parentName:"p"},"message = @AsyncMessage()")," field."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@AsyncPublisher(operation = @AsyncOperation(\n        channelName = "example-producer-topic",\n        description = "Optional. Customer uploaded an example payload",\n        message = @AsyncMessage(\n                messageId = "my-unique-id",\n                name = "ExamplePayloadDto",\n                schemaFormat = "application/schema+json;version=draft-07",\n                description = "Example payload model for sending messages"\n        )\n))\npublic void sendMessage(ExamplePayloadDto msg) {\n    // send\n}\n')),(0,o.kt)("h2",{id:"schema"},"Schema"),(0,o.kt)("p",null,"Under the hood Springwolf relies on swagger-core ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelConverters")," to define the message schema."),(0,o.kt)("p",null,"By default, the type and example values for the properties are guessed.\nThe default Jackson ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelResolver")," supports schema definitions via ",(0,o.kt)("inlineCode",{parentName:"p"},"@Schema")," to overwrite the property definitions."),(0,o.kt)("h2",{id:"using-schema"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"@Schema")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Schema")," annotation allows to set many properties like ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"example"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"requiredMode")," to document payloads."),(0,o.kt)("p",null,"All properties are part of the produced AsyncApi file. However, not all of them are displayed in Springwolf-ui. The ones listed above are included."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Add the following dependency:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Groovy",label:"Groovy",default:!0,mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"groovy",mdxType:"CodeBlock"},"dependencies {\n    implementation 'io.swagger.core.v3:swagger-core:2.2.10'\n}")),(0,o.kt)(s.Z,{value:"Maven",label:"Maven",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"xml",mdxType:"CodeBlock"},"<dependencies>\n    <dependency>\n        <groupId>io.swagger.core.v3</groupId>\n        <artifactId>swagger-core</artifactId>\n        <version>2.2.10</version>\n    </dependency>\n</dependencies>"))),(0,o.kt)("p",null,"Then, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Schema")," annotation to the payload class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import io.swagger.v3.oas.annotations.media.Schema;\nimport static io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED;\n\n@Schema(description = "Example payload model")\npublic class ExamplePayloadDto {\n    @Schema(description = "Some string field", example = "some string value", requiredMode = REQUIRED)\n    private String someString;\n\n    public String getSomeString() {\n        return someString;\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@AsyncMessage.description")," field will always override the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Schema")," description if provided")),(0,o.kt)("p",null,"For a full example, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/stavshamir/springwolf/example/amqp/dtos/ExamplePayloadDto.java"},"ExamplePayloadDto.java in springwolf-amqp-example")),(0,o.kt)("h2",{id:"custom-modelconverters"},"Custom ModelConverters"),(0,o.kt)("p",null,"Additionally, custom ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelConverters")," are supported.\nThese are needed when swagger is unable to extract a schema from a class."),(0,o.kt)("p",null,"One example is ",(0,o.kt)("inlineCode",{parentName:"p"},"javax.money.MonetaryAmount"),".\nAdding a model converter is demoed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-add-ons/springwolf-common-model-converters"},"springwolf-add-ons/springwolf-common-model-converters")))}g.isMDXComponent=!0}}]);