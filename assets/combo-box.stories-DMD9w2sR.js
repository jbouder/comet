import{j as o}from"./jsx-runtime-CKrituN3.js";import{r as C}from"./index-CBqU2yxZ.js";import{C as n}from"./combo-box-DCYzuZXY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./select-DO6-i82j.js";import"./index-Bl6ORisp.js";import"./index-D6IA0wpC.js";import"./select-or-matches-Bu-g4rUn.js";import"./config-BXli1stc.js";import"./sanitizer-BtXph-xc.js";import"./events-C6LRLXdn.js";const L={title:"USWDS/Forms/Combo Box",component:n,argTypes:{id:{required:!0}}},S="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.",f=[...S.replace(".","").replace(",","").split(" ")],t=f.map(e=>({value:e.toLowerCase(),label:e})),h=e=>{const[s,b]=C.useState(e.defaultValue),x=g=>b(g.target.value);return o.jsxs(o.Fragment,{children:[o.jsx("label",{className:"usa-label",htmlFor:e.id,children:"Combo Box label"}),o.jsx(n,{id:e.id,name:e.name,options:e.options,defaultValue:s,onChange:x}),o.jsxs("p",{children:["Selected value: ",s]})]})},d=e=>o.jsx(h,{...e}),a=d.bind({});a.args={id:"combo-box-1",name:"combo-box-1",options:t,placeholder:"Select...",defaultValue:t[0].value};const r=d.bind({});r.args={id:"combo-box-1",name:"combo-box-1",options:t,placeholder:"Select...",defaultValue:""};var m,l,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"(args: ComboBoxProps) => <ComboBoxWrapper {...args} />",...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"(args: ComboBoxProps) => <ComboBoxWrapper {...args} />",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Standard","NoDefault"];export{r as NoDefault,a as Standard,P as __namedExportsOrder,L as default};
