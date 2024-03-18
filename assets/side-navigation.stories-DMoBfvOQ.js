import{j as r}from"./jsx-runtime-CKrituN3.js";import{S as c,a as s}from"./side-navigation-CGob9ClI.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const k={title:"USWDS/Side Navigation",component:c,argTypes:{id:{required:!0}}},d=e=>r.jsx(c,{...e}),m="Secondary navigation",a=(e=!1)=>r.jsx("a",{className:e?"usa-current":"",href:"/",onClick:j=>j.preventDefault(),children:"Navigation Link"}),L=[{anchor:a(!0)},...[...Array(4)].map(()=>({anchor:a()}))],i=d.bind({});i.args={id:"side-navigation-1",items:L,ariaLabel:m};const T=[{anchor:a(!0),items:[...[...Array(3)].map(()=>({anchor:a()})),{anchor:a(!0)}]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))],t=d.bind({});t.args={id:"side-navigation-2",items:T,ariaLabel:m};const b=[{anchor:a(!0),items:[{anchor:a(!0),items:[...[...Array(3)].map(()=>({anchor:a()})),{anchor:a(!0)}]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))]},...[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a(),items:[...Array(3)].map(()=>({anchor:a()}))}))}))],o=d.bind({});o.args={id:"side-navigation-3",items:b,ariaLabel:m};const C=e=>r.jsxs(c,{...e,children:[r.jsx(s,{anchor:a(!0)}),r.jsx(s,{anchor:a(!1)}),r.jsx(s,{anchor:a(!1)})]}),n=C.bind({});n.args={id:"side-navigation-4"};var g,p,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"(args: SideNavigationProps) => <SideNavigation {...args} />",...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,v,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"(args: SideNavigationProps) => <SideNavigation {...args} />",...(l=(v=t.parameters)==null?void 0:v.docs)==null?void 0:l.source}}};var S,N,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"(args: SideNavigationProps) => <SideNavigation {...args} />",...(A=(N=o.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(args: SideNavigationProps) => <SideNavigation {...args}>
    <SideNavigationItem anchor={createAnchor(true)} />
    <SideNavigationItem anchor={createAnchor(false)} />
    <SideNavigationItem anchor={createAnchor(false)} />
  </SideNavigation>`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const D=["FlatSideNavigation","TwoLevelSideNavigation","ThreeLevelSideNavigation","WithChildren"];export{i as FlatSideNavigation,o as ThreeLevelSideNavigation,t as TwoLevelSideNavigation,n as WithChildren,D as __namedExportsOrder,k as default};
