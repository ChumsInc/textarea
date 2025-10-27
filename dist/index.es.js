import { jsx as e } from "react/jsx-runtime";
import l from "@emotion/styled";
import i from "classnames";
const f = l.div`
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
`, x = l.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`, m = l.textarea`
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
`;
function g({
  size: n,
  maxHeight: o,
  minHeight: r,
  minRows: t,
  maxRows: s,
  className: c,
  rowLineHeight: d,
  textAreaProps: a
}) {
  !r && t && (r = `${t * (d ?? 21)}px`), !o && s && (o = `${s * (d ?? 21)}px`);
  const b = i("form-control", c, {
    "form-control-sm": n === "sm",
    "form-control-lg": n === "lg"
  });
  return /* @__PURE__ */ e(f, { className: b, style: { maxHeight: o, minHeight: r }, children: /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(m, { ...a }) }) });
}
export {
  g as default
};
