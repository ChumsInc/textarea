import { TextareaHTMLAttributes } from 'react';
export interface TextAreaProps {
    size?: 'sm' | 'lg';
    className?: string;
    maxHeight?: string;
    minHeight?: string;
    minRows?: number;
    maxRows?: number;
    rowLineHeight?: number;
    textAreaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>;
}
export default function TextArea({ size, maxHeight, minHeight, minRows, maxRows, className, rowLineHeight, textAreaProps }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
