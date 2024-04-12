/* eslint-disable react/require-default-props */
import { XCircle } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';

import { cn } from '../../../utils/cn';

interface IInputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => (
    <div className="relative w-full">
      <input
        {...props}
        id={id ?? name}
        ref={ref}
        name={name}
        placeholder=" "
        className={cn(
          'peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-gray-800',
          className,
          error && '!border-red-400',
        )}
      />

      <label
        htmlFor={id ?? name}
        className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
      >
        {placeholder}
      </label>

      {error && (
        <div className="mt-2 flex items-center gap-1 text-red-400">
          <XCircle size={16} />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  ),
);

Input.displayName = 'Input';
