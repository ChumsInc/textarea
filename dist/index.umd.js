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
`,f=o.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`,a=o.textarea`
    field-sizing: content;
    overflow: hidden;
    border: none;
    resize: none;
    padding: 0;
    outline: none;
    width: 100%;

    &:focus {
        box-shadow: none;
        border-color: transparent;
    }
`;function u({size:s,maxHeight:r,minHeight:n,minRows:t,maxRows:d,className:b,rowLineHeight:i,textAreaProps:x}){!n&&t&&(n=`${t*(i??21)}px`),!r&&d&&(r=`${d*(i??21)}px`);const m=l("form-control",b,{"form-control-sm":s==="sm","form-control-lg":s==="lg"});return e.jsx(c,{className:m,style:{maxHeight:r,minHeight:n},children:e.jsx(f,{children:e.jsx(a,{...x})})})}return u}));
