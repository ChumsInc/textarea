(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("react/jsx-runtime"),require("classnames"),require("@emotion/styled")):typeof define=="function"&&define.amd?define(["react/jsx-runtime","classnames","@emotion/styled"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.TextArea=o(e.jsxRuntime,e.classNames,e.styled))})(this,(function(e,o,r){"use strict";const c=r.div`
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
`,a=r.textarea`
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
`,f=r.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`;function u({size:t,value:b,onChange:x,id:m,maxHeight:n,minHeight:s,minRows:i,maxRows:d,className:h,rowLineHeight:l,textAreaProps:p}){!s&&i&&(s=`${i*(l??21)}px`),!n&&d&&(n=`${d*(l??21)}px`);const y=o("form-control",h,{"form-control-sm":t==="sm","form-control-lg":t==="lg"}),{value:v,onChange:g,id:j,...w}=p??{};return e.jsx(c,{className:y,style:{maxHeight:n,minHeight:s},children:e.jsx(f,{children:e.jsx(a,{id:m??j,value:b??v,onChange:x??g,...w})})})}return u}));
