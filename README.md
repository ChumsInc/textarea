![Chums Logo](https://intranet.chums.com/images/chums/chums-badge-120x120.png)

# CHUMS TextArea component
A React component for a textarea with auto-resize.

## Notes
This component uses Bootstrap 5 for styling.

## Peer Dependencies
- react: >=18.2.0
- react-dom: >=18.2.0
- @emotion/styled:  ^11.14.0
- bootstrap: ^5.3.7
- classnames: ^2.5.1

## Usage Example
```tsx

export default function Test() {
  const id = useId();
  const [value, setValue] = useState('');

  const changeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(ev.target.value);
  }

  return (
          <div>
            <label htmlFor={id}>Test it here.</label>
            <TextArea id={id} value={value} onChange={changeHandler}
                      minHeight="3rem" maxHeight="75vh"
                      className="font-monospace"/>
          </div>
  )
}

```
