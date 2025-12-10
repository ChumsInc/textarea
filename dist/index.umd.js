(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("react/jsx-runtime"),require("@emotion/styled"),require("classnames")):typeof define=="function"&&define.amd?define(["react/jsx-runtime","@emotion/styled","classnames"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.TextArea=o(e.jsxRuntime,e.styled,e.classNames))})(this,(function(e,o,l){"use strict";const c=o.div`
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
`,a=o.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`,f=o.textarea`
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
`;function u({size:s,value:b,onChange:x,id:m,maxHeight:r,minHeight:n,minRows:t,maxRows:i,className:h,rowLineHeight:d,textAreaProps:p}){!n&&t&&(n=`${t*(d??21)}px`),!r&&i&&(r=`${i*(d??21)}px`);const y=l("form-control",h,{"form-control-sm":s==="sm","form-control-lg":s==="lg"}),{value:v,onChange:g,id:j,...w}=p??{};return e.jsx(c,{className:y,style:{maxHeight:r,minHeight:n},children:e.jsx(a,{children:e.jsx(f,{id:m??j,value:b??v,onChange:x??g,...w})})})}return u}));
