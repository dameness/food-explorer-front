import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'>;

export const Button = ({ className, ...props }: ButtonProps) => (
  <button className={twMerge('p-2 w-full rounded-lg', className)} {...props}>
    {props.children}
  </button>
);
