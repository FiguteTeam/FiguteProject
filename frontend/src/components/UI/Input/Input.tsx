import React, { forwardRef, InputHTMLAttributes, ForwardRefExoticComponent, Ref } from 'react';
import s from './Input.module.css';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: ForwardRefExoticComponent<MyInputProps> = forwardRef(
    (props: MyInputProps, ref: Ref<HTMLInputElement>) => {

        return (
            <input
                ref={ref}
                className={s.myInput}
                style={{ outline: 'none' }}
                {...props}
            />
        );
    }
);


export default Input;