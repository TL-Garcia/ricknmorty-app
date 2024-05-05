import React from 'react';
import './Input.scss';

interface Input
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
}

export const Input = (props: Input) => {
  const id = React.useId();

  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {props.label} {props.required && '*'}
      </label>
      {props.type === 'long' ? (
        <textarea id={id} className="input__box" {...props} />
      ) : (
        <input id={id} className="input__box" {...props} />
      )}
    </div>
  );
};
