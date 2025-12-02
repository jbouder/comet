import{j as r}from"./jsx-runtime-u17CrQMm.js";import{h as i,F as o,i as n,T as c}from"./table-tVkvRwNe.js";import"./banner-HTTjcrFz.js";import"./button-BWZWcovL.js";import"./button-group-CQuacBOq.js";import"./checkbox-DWIZYIAz.js";import"./combo-box-DN7wT3YT.js";import"./date-picker-DuN08b2Z.js";import"./error-messages-DQwxQ3pR.js";import"./index-A7qnn09F.js";import"./form-group-BYrP33xw.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CyaDeAHh.js";import"./label-Z58zP1tT.js";import"./modal-1IJxrc3V.js";import"./process-list-f1kOqvGm.js";import"./radio-button-DJf5KRV3.js";import"./range-slider-BhSAJvBq.js";import"./search-DwHFGHp8.js";import"./select-Bnj2EyNN.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BF9Mv073.js";import"./step-indicator-CY68gx1u.js";import"./summary-box-Cbk30fqL.js";import"./tag-JP3klHhs.js";import{T as p}from"./text-area-BwTbE8G8.js";import"./time-picker-DZlEhcVA.js";import"./tooltip-CyuaaLIw.js";import"./index-BKGcMkko.js";import"./iframe-DV4lgrEx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D44-oLbO.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-Cjsp3eWM.js";import"./active-element-BuxAly_Z.js";const V={title:"USWDS/Forms/Character Count",component:i,argTypes:{id:{required:!0}}},t={args:{id:"character-count-1"},render:e=>r.jsx(o,{id:"form-1",children:r.jsxs(n,{id:e.id,children:[r.jsx(c,{id:"with-hint-input",className:"usa-character-count__field",maxLength:25,name:"with-hint-input",label:"Text input",helperText:"This is an input with a character counter."}),r.jsx(i,{id:"with-hint-input-info",children:"You can enter up to 25 characters"})]})})},a={args:{id:"character-count-2"},render:e=>r.jsx(o,{id:"form-2",children:r.jsxs(n,{id:e.id,children:[r.jsx(p,{id:"with-hint-textarea",maxLength:50,rows:5,className:"usa-character-count__field",label:"Textarea",helperText:"This is a textarea with a character counter."}),r.jsx(i,{id:"with-hint-textarea-info",children:"You can enter up to 50 characters"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
