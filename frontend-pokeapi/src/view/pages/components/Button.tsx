/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import { ComponentProps } from 'react';

import { cn } from '../../../utils/cn';

import { Spinner } from './Spinner';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  variant,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading ?? disabled}
      className={cn(
        'bg-primary-600 hover:bg-primary-700 flex h-12 items-center justify-center rounded-2xl px-6 font-medium text-white transition-all disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
        variant === 'danger' && 'bg-red-600 hover:bg-red-700',
        variant === 'ghost' &&
          'text-primary-600 border-primary-600 hover:bg-primary-600/5 border bg-transparent',
        className,
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="h-6 w-6" />}
    </button>
  );
}
