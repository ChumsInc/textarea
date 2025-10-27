import TextArea from '../lib/index.js'
import {ChangeEvent, useId, useState} from "react";

export default function Test() {
    const id = useId();
    const [value, setValue] = useState('');

    const changeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(ev.target.value);
    }

    return (
        <div>
            <label htmlFor={id}>Test it here.</label>
            <TextArea textAreaProps={{id, value, onChange: changeHandler}} minHeight="3rem" maxHeight="75vh" className="font-monospace"/>
        </div>
    )
}
