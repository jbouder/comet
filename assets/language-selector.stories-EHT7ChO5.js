import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-BVJUMyRR.js";import"./banner-Bw8lfjUO.js";import"./button-Dd8-kEV6.js";import"./button-group-BN71EIBV.js";import"./checkbox-CpTcJyh6.js";import"./combo-box-D5DMLfiu.js";import"./date-picker-C7Awo9Yg.js";import"./error-messages-DQwxQ3pR.js";import"./index-6AjxVyA6.js";import"./form-group-C28HkzXF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DmiP_97y.js";import"./label-Z58zP1tT.js";import"./modal-CStBDjck.js";import"./process-list-Bed8PEFh.js";import"./radio-button-_0K6zHdQ.js";import"./range-slider-CzsXM0Uq.js";import"./search-JM0QJSq7.js";import"./select-DHBXVsM-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-JtVnI_Tp.js";import"./step-indicator-D7PUQDYb.js";import"./summary-box-B_jHB6Ih.js";import"./tag-CWT_L072.js";import"./text-area-CFuC_m78.js";import"./time-picker-ByEt3GmI.js";import"./tooltip-DFiF7rKt.js";import"./index-a7FTRroA.js";import"./iframe-B-LHO2Aq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJf-3RvT.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DbQQjkW7.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'selector-1',
    items: [{
      label: 'English',
      attr: 'en',
      onChange: () => handleChange('en')
    }, {
      label: 'Español',
      attr: 'es',
      onChange: () => handleChange('es')
    }],
    variant: 'default',
    size: 'default'
  },
  render: (args: LanguageSelectorProps) => <LanguageSelector {...args} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'selector-2',
    items: [{
      label: 'English',
      attr: 'en',
      onChange: () => handleChange('en')
    }, {
      label: 'Español',
      localLabel: 'Spanish',
      attr: 'es',
      onChange: () => handleChange('es')
    }, {
      label: 'Français',
      localLabel: 'French',
      attr: 'fr',
      onChange: () => handleChange('fr')
    }],
    variant: 'default',
    size: 'small'
  },
  render: (args: LanguageSelectorProps) => <LanguageSelector {...args} />
}`,...t.parameters?.docs?.source}}};const N=["Default","ThreeOrMore"];export{a as Default,t as ThreeOrMore,N as __namedExportsOrder,K as default};
