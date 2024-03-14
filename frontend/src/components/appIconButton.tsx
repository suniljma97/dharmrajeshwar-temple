import React from 'react';
import { IconButton } from '@material-tailwind/react';
import { variant } from '@material-tailwind/react/types/components/button';

type AppIconButtonProps = {
  children: React.ReactNode | string;
  className: string;
  variant?: variant;
  onClick: () => void;
  ripple?: boolean;
};

export const AppIconButton = ({
  children,
  className,
  variant = 'text',
  onClick,
  ripple = false,
}: AppIconButtonProps): JSX.Element => {
  return (
    <IconButton
      variant={variant}
      onClick={onClick}
      className={className}
      children={children}
      placeholder={undefined}
      ripple={ripple}
    />
  );
};
