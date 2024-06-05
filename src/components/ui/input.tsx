import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type InputProps = ComponentProps<'input'> & {
  error?: FieldError;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      className={twMerge(
        `dark:bg-Dark/Dark-800 bg-Light/Light-300 text-inherit py-2.5 px-2 rounded-lg w-full ${
          error && 'border border-red-400'
        }`,
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
