import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-Bnk8_ZSp.js";import"./banner-DaNUWC6B.js";import"./button-BBRQUKvI.js";import"./button-group-C1nE9yV4.js";import"./checkbox-XBxn5C4M.js";import"./combo-box-bRn14VFr.js";import"./date-picker-B1RtmM0i.js";import"./error-messages-DQwxQ3pR.js";import"./index-vDXwgqiw.js";import"./form-group-DPbr_CyZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CFIGdgJV.js";import"./label-Z58zP1tT.js";import"./modal-CDfJhrME.js";import"./process-list-CNc9uPXT.js";import"./radio-button-BeBcYdRv.js";import"./range-slider-YK9VDpbJ.js";import"./search-Bk-U-dyK.js";import"./select-K_uAE42h.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BYvIIzlh.js";import"./step-indicator-CHkqJLxG.js";import"./summary-box-DyLv9KhP.js";import"./tag-B1t4DQ1l.js";import{T as p}from"./text-area-KT2cjLV_.js";import"./time-picker-zz_A-j9g.js";import"./tooltip-BeWfh8Dq.js";import"./index-S83IsEAY.js";import"./iframe-fByk2CNI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCAH2QK5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CbvKvhd4.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
