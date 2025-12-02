import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-B-LHO2Aq.js";import{P as i}from"./table-BVJUMyRR.js";import"./banner-Bw8lfjUO.js";import"./button-Dd8-kEV6.js";import"./button-group-BN71EIBV.js";import"./checkbox-CpTcJyh6.js";import"./combo-box-D5DMLfiu.js";import"./date-picker-C7Awo9Yg.js";import"./error-messages-DQwxQ3pR.js";import"./index-6AjxVyA6.js";import"./form-group-C28HkzXF.js";import"./helper-text-C5i0f8Ge.js";import"./icon-DmiP_97y.js";import"./label-Z58zP1tT.js";import"./modal-CStBDjck.js";import"./process-list-Bed8PEFh.js";import"./radio-button-_0K6zHdQ.js";import"./range-slider-CzsXM0Uq.js";import"./search-JM0QJSq7.js";import"./select-DHBXVsM-.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-JtVnI_Tp.js";import"./step-indicator-D7PUQDYb.js";import"./summary-box-B_jHB6Ih.js";import"./tag-CWT_L072.js";import"./text-area-CFuC_m78.js";import"./time-picker-ByEt3GmI.js";import"./tooltip-DFiF7rKt.js";import"./index-a7FTRroA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJf-3RvT.js";import"./config-dDnJbKjy.js";import"./select-or-matches-Dn4vh_Vj.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-D2a0Holi.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DbQQjkW7.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'pagination-1',
    currentPage: 9,
    amountOfPages: 24,
    ariaLabel: 'Pagination 1',
    amountOfVisiblePageItems: 3
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const newProps = {
      ...args
    };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);
    return <Pagination {...newProps} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'pagination-2',
    currentPage: 2,
    amountOfPages: 5,
    ariaLabel: 'Pagination 2',
    amountOfVisiblePageItems: 1
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const newProps = {
      ...args
    };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);
    return <Pagination {...newProps} />;
  }
}`,...o.parameters?.docs?.source}}};const Z=["LargePagination","SmallPagination"];export{a as LargePagination,o as SmallPagination,Z as __namedExportsOrder,Y as default};
