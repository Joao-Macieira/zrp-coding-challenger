/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import { ComponentProps } from 'react';

import { cn } from '../../../app/utils/cn';

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
        'flex h-12 items-center justify-center rounded-2xl bg-[#3761A8] px-6 font-medium text-white transition-all hover:bg-[#1B3778] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
        variant === 'danger' && 'bg-red-600 hover:bg-red-700',
        variant === 'ghost' &&
          'border border-white bg-transparent text-white hover:border-[#3761A8] hover:bg-[#3761A8]',
        className,
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="h-6 w-6" />}
    </button>
  );
}
