"use strict";const e=require("react/jsx-runtime"),y=require("classnames"),n=require("@emotion/styled"),m=n.div`
    display: flex;
    width: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    margin-bottom: 0.375rem;

    &:focus-within {
        color: var(--bs-body-color);
        background-color: var(--bs-body-bg);
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
`,p=n.textarea`
    field-sizing: content;
    overflow: hidden;
    border: none;
    resize: none;
    padding: 0;
    outline: none;
    width: 100%;
    background-color: inherit;

    &:focus {
        box-shadow: none;
        border-color: transparent;
    }
`,w=n.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`;function j({size:l,value:d,onChange:a,id:i,maxHeight:o,minHeight:r,minRows:s,maxRows:t,className:b,rowLineHeight:c,textAreaProps:u}){!r&&s&&(r=`${s*(c??21)}px`),!o&&t&&(o=`${t*(c??21)}px`);const x=y("form-control",b,{"form-control-sm":l==="sm","form-control-lg":l==="lg"}),{value:f,onChange:g,id:h,...v}=u??{};return e.jsx(m,{className:x,style:{maxHeight:o,minHeight:r},children:e.jsx(w,{children:e.jsx(p,{id:i??h,value:d??f,onChange:a??g,...v})})})}module.exports=j;
