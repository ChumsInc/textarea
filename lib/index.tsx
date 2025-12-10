import {ChangeEvent, type TextareaHTMLAttributes} from 'react';
import styled from "@emotion/styled";
import classNames from "classnames";

const ScrollArea = styled.div`
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
`

const ScrollContent = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
`

const StyledTextArea = styled.textarea`
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
`

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
