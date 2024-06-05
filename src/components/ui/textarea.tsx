import { twMerge } from 'tailwind-merge';
import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

type TextAreaProps = ComponentProps<'textarea'> & {
  error?: FieldError;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          `dark:bg-Dark/Dark-800 bg-Light/Light-300 text-inherit resize-none py-2.5 px-2 rounded-lg w-full ${
            error ? 'border border-red-400' : 'border-2'
          }`,
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
