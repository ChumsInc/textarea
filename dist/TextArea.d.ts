import { HTMLAttributes, type TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'id' | 'className'> {
    size?: 'sm' | 'lg';
    maxHeight?: string;
    minHeight?: string;
    minRows?: number;
    maxRows?: number;
    rowLineHeight?: number;
    scrollAreaProps?: HTMLAttributes<HTMLDivElement>;
    scrollContentProps?: HTMLAttributes<HTMLDivElement>;
    textAreaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>;
}
export default function TextArea({ size, value, onChange, id, maxHeight, minHeight, minRows, maxRows, className, rowLineHeight, scrollAreaProps, scrollContentProps, textAreaProps }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
