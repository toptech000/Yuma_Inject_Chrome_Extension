import React, { useRef, useState } from 'react';
import { classNames } from '@/utils/helpers/css';
import { isErrorExist } from '@/utils/helpers/form';
import { SelectBoxPropsType } from '@/utils/types/selectbox';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormContext } from 'react-hook-form';
import styles from './selectbox.module.css';

const sizeStyles = {
  'half': styles.half,
  'full': styles.full
};

export default function SelectBox({name, label, size = 'half', type = 'text', items}: SelectBoxPropsType) {
  const inputRef = useRef(null);
  const [text, setText] = useState<string>('');
  const [value, setValue] = useState<string | number>('');

  const { register, formState: { errors } } = useFormContext();
  const isError = isErrorExist(name, errors);

  const { ref, ...rest } = register(name, {
    required: {
      value: true,
      message: '{name} is required',
    },
  });

  return (
    <div className={classNames(styles.container, sizeStyles[size])}>
      <label htmlFor={name}>{label}</label>
      <div className={classNames(styles.wrapper, isError ? 'error' : '')} onClick={() => {inputRef.current.focus();}}>
        <div className={styles.select}>
          <span className={styles.label}>{text}</span>
          <input 
            className={styles.input} 
            type={type} 
            name={name} 
            value={value}
            {...rest}
            ref={(e) => {
              ref(e);
              inputRef.current = e;
            }}
          />
          <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <div className={styles.menu}>
          {items.map((item: {label: string; value: string | number}, idx: number) => {
            return (
              <div 
                key={idx}
                className={styles.menuItem} 
                onMouseDown={() => {
                  setText(item.label);
                  setValue(item.value);
                }}
              >
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}