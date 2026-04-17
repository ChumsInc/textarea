import e from "classnames";
import t from "@emotion/styled";
import { jsx as n } from "react/jsx-runtime";
//#region lib/TextArea.tsx
var r = t.div`
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
`, i = t.textarea`
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
`, a = t.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`;
function o({ size: t, value: o, onChange: s, id: c, maxHeight: l, minHeight: u, minRows: d, maxRows: f, className: p, rowLineHeight: m, scrollAreaProps: h, scrollContentProps: g, textAreaProps: _ }) {
	!u && d && (u = `${d * (m ?? 21)}px`), !l && f && (l = `${f * (m ?? 21)}px`);
	let { className: v, style: y, ...b } = h ?? {}, { value: x, onChange: S, id: C, ...w } = _ ?? {};
	return /* @__PURE__ */ n(r, {
		className: e("form-control", v, p, {
			"form-control-sm": t === "sm",
			"form-control-lg": t === "lg"
		}),
		style: {
			maxHeight: l,
			minHeight: u,
			...y
		},
		...b,
		children: /* @__PURE__ */ n(a, {
			...g,
			children: /* @__PURE__ */ n(i, {
				id: c ?? C,
				value: o ?? x,
				onChange: s ?? S,
				...w
			})
		})
	});
}
//#endregion
export { o as default };
