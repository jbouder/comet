import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-fByk2CNI.js";import{P as i}from"./table-Bnk8_ZSp.js";import"./banner-DaNUWC6B.js";import"./button-BBRQUKvI.js";import"./button-group-C1nE9yV4.js";import"./checkbox-XBxn5C4M.js";import"./combo-box-bRn14VFr.js";import"./date-picker-B1RtmM0i.js";import"./error-messages-DQwxQ3pR.js";import"./index-vDXwgqiw.js";import"./form-group-DPbr_CyZ.js";import"./helper-text-C5i0f8Ge.js";import"./icon-CFIGdgJV.js";import"./label-Z58zP1tT.js";import"./modal-CDfJhrME.js";import"./process-list-CNc9uPXT.js";import"./radio-button-BeBcYdRv.js";import"./range-slider-YK9VDpbJ.js";import"./search-Bk-U-dyK.js";import"./select-K_uAE42h.js";import"./side-navigation-Bh4Ckbga.js";import"./site-alert-BYvIIzlh.js";import"./step-indicator-CHkqJLxG.js";import"./summary-box-DyLv9KhP.js";import"./tag-B1t4DQ1l.js";import"./text-area-KT2cjLV_.js";import"./time-picker-zz_A-j9g.js";import"./tooltip-BeWfh8Dq.js";import"./index-S83IsEAY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCAH2QK5.js";import"./config-U0NUeV76.js";import"./select-or-matches-CBCk0u7F.js";import"./events-CleOcHg4.js";import"./sanitizer-u4rxq2Pl.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-CbvKvhd4.js";import"./active-element-BuxAly_Z.js";const Y={title:"USWDS/Pagination",component:i,argTypes:{id:{required:!0}}},g=r=>(t,n)=>{t.preventDefault(),r(n)},a={args:{id:"pagination-1",currentPage:9,amountOfPages:24,ariaLabel:"Pagination 1",amountOfVisiblePageItems:3},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}},o={args:{id:"pagination-2",currentPage:2,amountOfPages:5,ariaLabel:"Pagination 2",amountOfVisiblePageItems:1},render:r=>{const[t,n]=p.useState(r.currentPage),e={...r};return e.currentPage=t,e.onPage=g(n),s.jsx(i,{...e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
