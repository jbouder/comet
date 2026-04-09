import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as n}from"./table-Bnk8_ZSp.js";import"./banner-DaNUWC6B.js";import"./button-BBRQUKvI.js";import"./button-group-C1nE9yV4.js";import"./checkbox-XBxn5C4M.js";import"./combo-box-bRn14VFr.js";import"./date-picker-B1RtmM0i.js";import"./error-messages-DQwxQ3pR.js";import"./index-vDXwgqiw.js";import"./form-group-DPbr_CyZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CFIGdgJV.js";import"./label-Z58zP1tT.js";import"./modal-CDfJhrME.js";import"./process-list-CNc9uPXT.js";import"./radio-button-BeBcYdRv.js";import"./range-slider-YK9VDpbJ.js";import"./search-Bk-U-dyK.js";import"./select-K_uAE42h.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BYvIIzlh.js";import"./step-indicator-CHkqJLxG.js";import"./summary-box-DyLv9KhP.js";import"./tag-B1t4DQ1l.js";import"./text-area-KT2cjLV_.js";import"./time-picker-zz_A-j9g.js";import"./tooltip-BeWfh8Dq.js";import"./index-S83IsEAY.js";import"./iframe-fByk2CNI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCAH2QK5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CbvKvhd4.js";import"./active-element-BuxAly_Z.js";const K={title:"USWDS/Language Selector",component:n,argTypes:{id:{required:!0},variant:{control:{type:"select",options:["default","unstyled"]}},size:{control:{type:"select",options:["default","small"]}}}},r=e=>{console.log(`${e} selected`)},a={args:{id:"selector-1",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",attr:"es",onChange:()=>r("es")}],variant:"default",size:"default"},render:e=>o.jsx(n,{...e})},t={args:{id:"selector-2",items:[{label:"English",attr:"en",onChange:()=>r("en")},{label:"Español",localLabel:"Spanish",attr:"es",onChange:()=>r("es")},{label:"Français",localLabel:"French",attr:"fr",onChange:()=>r("fr")}],variant:"default",size:"small"},render:e=>o.jsx(n,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
