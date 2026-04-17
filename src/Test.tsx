import TextArea from '../lib/TextArea.js'
import {ChangeEvent, useId, useState} from "react";

export default function Test() {
    const id = useId();
    const [value, setValue] = useState('This is a read-only text area.');

    const changeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(ev.target.value);
    }

    return (
        <div>
            <label htmlFor={id}>Test it here.</label>
            <TextArea id={id} value={value} onChange={changeHandler}
                      readOnly
                      minHeight="3rem" maxHeight="75vh"
                      className="font-monospace"/>
        </div>
    )
}
