import{j as s}from"./jsx-runtime-u17CrQMm.js";import{b as l}from"./table-tVkvRwNe.js";import"./banner-HTTjcrFz.js";import"./button-BWZWcovL.js";import"./button-group-CQuacBOq.js";import"./checkbox-DWIZYIAz.js";import"./combo-box-DN7wT3YT.js";import"./date-picker-DuN08b2Z.js";import"./error-messages-DQwxQ3pR.js";import"./index-A7qnn09F.js";import"./form-group-BYrP33xw.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CyaDeAHh.js";import"./label-Z58zP1tT.js";import"./modal-1IJxrc3V.js";import"./process-list-f1kOqvGm.js";import"./radio-button-DJf5KRV3.js";import"./range-slider-BhSAJvBq.js";import"./search-DwHFGHp8.js";import"./select-Bnj2EyNN.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BF9Mv073.js";import"./step-indicator-CY68gx1u.js";import"./summary-box-Cbk30fqL.js";import"./tag-JP3klHhs.js";import"./text-area-BwTbE8G8.js";import"./time-picker-DZlEhcVA.js";import"./tooltip-CyuaaLIw.js";import"./index-BKGcMkko.js";import"./iframe-DV4lgrEx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D44-oLbO.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cjsp3eWM.js";import"./active-element-BuxAly_Z.js";const N={title:"USWDS/Alert",component:l,argTypes:{id:{required:!0},type:{control:"select",required:!0}}},r={args:{id:"alert-1",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:""},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},o={args:{id:"alert-close",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!0,heading:"Alert with close button",onClose:()=>{console.log("Alert closed")}},render:e=>s.jsx(l,{...e,children:"This is the alert body"})},t={args:{id:"alert-2",type:"info",slim:!1,show:!0,noIcon:!1,allowClose:!1,heading:"",body:s.jsx("span",{children:"This is the alert body as a prop"})},render:e=>s.jsx(l,{...e,children:"This is the alert body"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
