import { ChangeEvent, TextareaHTMLAttributes } from 'react';
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
    rowLineHeight?: number;
    textAreaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>;
}
export default function TextArea({ size, value, onChange, id, maxHeight, minHeight, minRows, maxRows, className, rowLineHeight, textAreaProps }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
