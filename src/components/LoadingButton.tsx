
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const LoadingButton = ({ 
  loading = false, 
  children, 
  disabled, 
  className = '',
  variant = 'default',
  size = 'default',
  ...props 
}: LoadingButtonProps) => {
  return (
    <Button
      {...props}
      disabled={loading || disabled}
      variant={variant}
      size={size}
      className={`${className} min-h-[44px] relative`}
    >
      {loading && (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      )}
      {children}
    </Button>
  );
};
