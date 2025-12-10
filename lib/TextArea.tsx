import {ChangeEvent, type TextareaHTMLAttributes} from 'react';
import classNames from "classnames";
import {ScrollArea, ScrollContent, StyledTextArea} from "./styled-components.tsx";


export interface TextAreaProps {
    value?: string;
    onChange?: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
    size?: 'sm' | 'lg';
    id?: string;
    className?: string;
    maxHeight?: string;
    minHeight?: string;
    minRows?: number;
    maxRows?: number;
    rowLineHeight?: number; // line height in px, used if minRows or maxRows is set
    textAreaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>
}

export default function TextArea({
                                     size,
                                     value,
                                     onChange,
                                     id,
                                     maxHeight,
                                     minHeight,
                                     minRows,
                                     maxRows,
                                     className,
                                     rowLineHeight,
                                     textAreaProps
                                 }: TextAreaProps) {
    if (!minHeight && !!minRows) {
        minHeight = `${minRows * (rowLineHeight ?? 21)}px`;
    }
    if (!maxHeight && !!maxRows) {
        maxHeight = `${maxRows * (rowLineHeight ?? 21)}px`;
    }
    const _className = classNames('form-control', className, {
        'form-control-sm': size === 'sm',
        'form-control-lg': size === 'lg',
    })
    const {value: _value, onChange: _onChange, id: _id, ...rest} = textAreaProps ?? {};
    return (
        <ScrollArea className={_className} style={{maxHeight, minHeight}}>
            <ScrollContent>
                <StyledTextArea id={id ?? _id} value={value ?? _value}
                                onChange={onChange ?? _onChange}
                                {...rest} />
            </ScrollContent>
        </ScrollArea>
    )
}
