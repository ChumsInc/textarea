import {type TextareaHTMLAttributes} from "react";

export interface TextAreaProps extends Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'id' | 'className'> {
    size?: 'sm' | 'lg';
    maxHeight?: string;
    minHeight?: string;
    minRows?: number;
    maxRows?: number;
    rowLineHeight?: number; // line height in px, used if minRows or maxRows is set
    textAreaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>
}
