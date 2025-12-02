import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n,a}from"./table-BVJUMyRR.js";import"./banner-Bw8lfjUO.js";import"./button-Dd8-kEV6.js";import"./button-group-BN71EIBV.js";import"./checkbox-CpTcJyh6.js";import"./combo-box-D5DMLfiu.js";import"./date-picker-C7Awo9Yg.js";import"./error-messages-DQwxQ3pR.js";import"./index-6AjxVyA6.js";import"./form-group-C28HkzXF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DmiP_97y.js";import"./label-Z58zP1tT.js";import"./modal-CStBDjck.js";import"./process-list-Bed8PEFh.js";import"./radio-button-_0K6zHdQ.js";import"./range-slider-CzsXM0Uq.js";import"./search-JM0QJSq7.js";import"./select-DHBXVsM-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-JtVnI_Tp.js";import"./step-indicator-D7PUQDYb.js";import"./summary-box-B_jHB6Ih.js";import"./tag-CWT_L072.js";import"./text-area-CFuC_m78.js";import"./time-picker-ByEt3GmI.js";import"./tooltip-DFiF7rKt.js";import"./index-a7FTRroA.js";import"./iframe-B-LHO2Aq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJf-3RvT.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DbQQjkW7.js";import"./active-element-BuxAly_Z.js";const Q={title:"USWDS/Accordion",component:n,argTypes:{id:{required:!0}}},o={args:{id:"accordion-1",allowMultiSelect:!1,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!0},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},i={args:{id:"accordion-2",allowMultiSelect:!0,items:[{id:"item-1",label:"Item 1",children:e.jsx("span",{children:"Hello"}),expanded:!1},{id:"item-2",label:"Item 2",children:e.jsx("span",{children:"World"}),expanded:!1}]},render:r=>e.jsx(n,{...r})},t={args:{id:"accordion-3",allowMultiSelect:!1},render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{id:"item-1",label:"Item 1",expanded:!0,children:e.jsx("span",{children:"Hello"})}),e.jsx(a,{id:"item-2",label:"Item 2",expanded:!1,children:e.jsx("span",{children:"World"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accordion-1',
    allowMultiSelect: false,
    items: [{
      id: 'item-1',
      label: 'Item 1',
      children: <span>Hello</span>,
      expanded: true
    }, {
      id: 'item-2',
      label: 'Item 2',
      children: <span>World</span>,
      expanded: false
    }]
  },
  render: (args: AccordionProps) => <Accordion {...args} />
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accordion-2',
    allowMultiSelect: true,
    items: [{
      id: 'item-1',
      label: 'Item 1',
      children: <span>Hello</span>,
      expanded: false
    }, {
      id: 'item-2',
      label: 'Item 2',
      children: <span>World</span>,
      expanded: false
    }]
  },
  render: (args: AccordionProps) => <Accordion {...args} />
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accordion-3',
    allowMultiSelect: false
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <AccordionItem id="item-1" label="Item 1" expanded={true}>
        <span>Hello</span>
      </AccordionItem>
      <AccordionItem id="item-2" label="Item 2" expanded={false}>
        <span>World</span>
      </AccordionItem>
    </Accordion>
}`,...t.parameters?.docs?.source}}};const V=["Default","MultiSelect","WithChildren"];export{o as Default,i as MultiSelect,t as WithChildren,V as __namedExportsOrder,Q as default};
