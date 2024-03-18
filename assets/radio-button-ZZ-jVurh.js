import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as p}from"./index-Bl6ORisp.js";const c=({id:n,name:a,label:i,value:r,checked:s,isTile:o,onChange:d,onClick:l,...u})=>{const t=`${n}__usa-radio__input`,m=p("usa-radio__input",{"usa-radio__input--tile":o});return e.jsxs("div",{id:n,className:"usa-radio",children:[e.jsx("input",{className:m,id:t,type:"radio",name:a,defaultValue:r,defaultChecked:s,onChange:d,onClick:l,...u}),e.jsx("label",{className:"usa-radio__label",htmlFor:t,children:i})]})};c.__docgenInfo={description:"Radio buttons allow users to select exactly one choice from a group.",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:"The text inside of the radioButton"},value:{required:!1,tsType:{name:"union",raw:"string | readonly string[] | number",elements:[{name:"string"},{name:"unknown"},{name:"number"}]},description:"Default value of the radioButton"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radioButton is checked by default"},id:{required:!0,tsType:{name:"string"},description:"The unique identifier for this component"},name:{required:!1,tsType:{name:"string"},description:"The name for the radioButton input field"},isTile:{required:!1,tsType:{name:"boolean"},description:"Whether the component is rendered as a tile"},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:"Event handler will be triggered when the radioButton value changes"},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLInputElement"}],raw:"MouseEventHandler<HTMLInputElement>"},description:"Event handler will be triggered when the radioButton is clicked"}}};export{c as R};
