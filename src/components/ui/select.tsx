import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type SelectProps = ComponentProps<'select'> & {
  error?: FieldError;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, ...props }, ref) => (
    <select
      className={twMerge(
        `py-2.5 px-2  rounded-lg w-full ${error && 'border border-red-400'}`,
        className
      )}
      ref={ref}
      {...props}
    >
      {props.children}
    </select>
  )
);
