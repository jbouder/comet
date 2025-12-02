import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-BVJUMyRR.js";import"./banner-Bw8lfjUO.js";import"./button-Dd8-kEV6.js";import"./button-group-BN71EIBV.js";import"./checkbox-CpTcJyh6.js";import"./combo-box-D5DMLfiu.js";import"./date-picker-C7Awo9Yg.js";import"./error-messages-DQwxQ3pR.js";import"./index-6AjxVyA6.js";import"./form-group-C28HkzXF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DmiP_97y.js";import"./label-Z58zP1tT.js";import"./modal-CStBDjck.js";import"./process-list-Bed8PEFh.js";import"./radio-button-_0K6zHdQ.js";import"./range-slider-CzsXM0Uq.js";import"./search-JM0QJSq7.js";import"./select-DHBXVsM-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-JtVnI_Tp.js";import"./step-indicator-D7PUQDYb.js";import"./summary-box-B_jHB6Ih.js";import"./tag-CWT_L072.js";import{T as p}from"./text-area-CFuC_m78.js";import"./time-picker-ByEt3GmI.js";import"./tooltip-DFiF7rKt.js";import"./index-a7FTRroA.js";import"./iframe-B-LHO2Aq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJf-3RvT.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DbQQjkW7.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-1'
  },
  render: (args: CharacterCountProps) => <Form id="form-1">
      <CharacterCountContainer id={args.id}>
        <TextInput id="with-hint-input" className="usa-character-count__field" maxLength={25} name="with-hint-input" label="Text input" helperText="This is an input with a character counter." />
        <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-2'
  },
  render: (args: CharacterCountProps) => <Form id="form-2">
      <CharacterCountContainer id={args.id}>
        <TextArea id="with-hint-textarea" maxLength={50} rows={5} className="usa-character-count__field" label="Textarea" helperText="This is a textarea with a character counter." />
        <CharacterCount id="with-hint-textarea-info">
          You can enter up to 50 characters
        </CharacterCount>
      </CharacterCountContainer>
    </Form>
}`,...a.parameters?.docs?.source}}};const X=["InputExample","TextAreaExample"];export{t as InputExample,a as TextAreaExample,X as __namedExportsOrder,V as default};
