import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'>;

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={twMerge(
      'flex items-center justify-center gap-2 px-6 py-3 w-full rounded-lg bg-Tints/Tomato-100 text-Light/Light-300',
      className
    )}
    {...props}
  >
    {props.children}
  </button>
);
