import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
  asType,
  variant,
  color,
} from '@material-tailwind/react/types/components/typography';

type AppTypographyProps = {
  children: React.ReactNode | string;
  className: string;
  as?: asType;
  href?: string;
  variant?: variant;
  color?: color;
};

export const AppTypography = ({
  children,
  className,
  as = 'li',
  href = '#',
  variant = 'small',
  color = 'blue-gray',
}: AppTypographyProps): JSX.Element => {
  return (
    <Typography
      as={as}
      variant={variant}
      color={color}
      href={href}
      placeholder={undefined}
      className={className}
      children={children}
    />
  );
};
