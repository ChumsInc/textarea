import { jsx as e } from "react/jsx-runtime";
import n from "@emotion/styled";
import h from "classnames";
const v = n.div`
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
`, y = n.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`, w = n.textarea`
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
`;
function A({
  size: l,
  value: a,
  onChange: c,
  id: i,
  maxHeight: o,
  minHeight: r,
  minRows: t,
  maxRows: d,
  className: b,
  rowLineHeight: s,
  textAreaProps: f
}) {
  !r && t && (r = `${t * (s ?? 21)}px`), !o && d && (o = `${d * (s ?? 21)}px`);
  const x = h("form-control", b, {
    "form-control-sm": l === "sm",
    "form-control-lg": l === "lg"
  }), { value: m, onChange: u, id: g, ...p } = f ?? {};
  return /* @__PURE__ */ e(v, { className: x, style: { maxHeight: o, minHeight: r }, children: /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(
    w,
    {
      id: i ?? g,
      value: a ?? m,
      onChange: c ?? u,
      ...p
    }
  ) }) });
}
export {
  A as default
};
