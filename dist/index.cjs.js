var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},s=(n,r,a)=>(a=n==null?{}:e(i(n)),o(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let c=require(`classnames`);c=s(c);let l=require(`@emotion/styled`);l=s(l);let u=require(`react/jsx-runtime`);var d=l.default.div`
    display: flex;
    width: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    margin-bottom: 0.375rem;

    &:focus-within {
        color: var(--bs-body-color);
        background-color: var(--bs-body-bg);
        border-color: var(--bs-border-color);
        outline: 0;
        box-shadow: 0 0 0 0.25rem var(--bs-border-color-translucent);
    }
`,f=l.default.textarea`
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
`,p=l.default.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`;function m({size:e,value:t,onChange:n,id:r,maxHeight:i,minHeight:a,minRows:o,maxRows:s,className:l,rowLineHeight:m,textAreaProps:h}){!a&&o&&(a=`${o*(m??21)}px`),!i&&s&&(i=`${s*(m??21)}px`);let g=(0,c.default)(`form-control`,l,{"form-control-sm":e===`sm`,"form-control-lg":e===`lg`}),{value:_,onChange:v,id:y,...b}=h??{};return(0,u.jsx)(d,{className:g,style:{maxHeight:i,minHeight:a},children:(0,u.jsx)(p,{children:(0,u.jsx)(f,{id:r??y,value:t??_,onChange:n??v,...b})})})}module.exports=m;