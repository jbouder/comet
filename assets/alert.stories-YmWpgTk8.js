import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-Bnk8_ZSp.js";import"./banner-DaNUWC6B.js";import"./button-BBRQUKvI.js";import"./button-group-C1nE9yV4.js";import"./checkbox-XBxn5C4M.js";import"./combo-box-bRn14VFr.js";import"./date-picker-B1RtmM0i.js";import"./error-messages-DQwxQ3pR.js";import"./index-vDXwgqiw.js";import"./form-group-DPbr_CyZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CFIGdgJV.js";import"./label-Z58zP1tT.js";import"./modal-CDfJhrME.js";import"./process-list-CNc9uPXT.js";import"./radio-button-BeBcYdRv.js";import"./range-slider-YK9VDpbJ.js";import"./search-Bk-U-dyK.js";import"./select-K_uAE42h.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BYvIIzlh.js";import"./step-indicator-CHkqJLxG.js";import"./summary-box-DyLv9KhP.js";import"./tag-B1t4DQ1l.js";import"./text-area-KT2cjLV_.js";import"./time-picker-zz_A-j9g.js";import"./tooltip-BeWfh8Dq.js";import"./index-S83IsEAY.js";import"./iframe-fByk2CNI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCAH2QK5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CbvKvhd4.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-1',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: ''
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-close',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: true,
    heading: 'Alert with close button',
    onClose: () => {
      // eslint-disable-next-line no-console
      console.log('Alert closed');
    }
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-2',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: '',
    body: <span>This is the alert body as a prop</span>
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>
}`,...t.parameters?.docs?.source}}};const Q=["Default","AllowClose","WithBody"];export{o as AllowClose,r as Default,t as WithBody,Q as __namedExportsOrder,N as default};
