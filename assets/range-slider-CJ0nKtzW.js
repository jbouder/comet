import{j as l}from"./jsx-runtime-CKrituN3.js";const d=({id:e,minValue:n,maxValue:t,step:r="10",defaultValue:i,onChange:a,...s})=>l.jsx("input",{id:e,className:"usa-range",type:"range",min:n,max:t,step:r,defaultValue:i,onChange:a,role:"slider",...s});d.__docgenInfo={description:"A range slider allows users to choose an approximate number from a range.",methods:[],displayName:"RangeSlider",props:{id:{required:!0,tsType:{name:"string"},description:"The unique identifier for the input field"},name:{required:!0,tsType:{name:"string"},description:"The name of the input field"},minValue:{required:!1,tsType:{name:"string"},description:"A minimum value allowed for the slider"},maxValue:{required:!1,tsType:{name:"string"},description:"A maximum value allowed for the slider"},step:{required:!1,tsType:{name:"string"},description:"The value to increment the slider by as it is changed",defaultValue:{value:"'10'",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"The default value to apply to the range slider"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(this: HTMLInputElement, event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"},this:{name:"HTMLInputElement"}}},description:"Event handler will be triggered when the range slider value changes"}}};export{d as R};
