import { HTMLAttributes, type TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows' | 'cols'> {
    size?: 'sm' | 'lg';
    maxHeight?: string;
    minHeight?: string;
    minRows?: number;
    maxRows?: number;
    rowLineHeight?: number;
    scrollAreaProps?: HTMLAttributes<HTMLDivElement>;
    scrollContentProps?: HTMLAttributes<HTMLDivElement>;
}
export default function TextArea({ size, value, onChange, id, maxHeight, minHeight, minRows, maxRows, className, rowLineHeight, scrollAreaProps, scrollContentProps, ...rest }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
