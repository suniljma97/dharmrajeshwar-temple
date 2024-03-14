import React from 'react';
import { Navbar, Collapse } from '@material-tailwind/react';
import { AppNavBarList, NavBarList } from './appNavBarList';
import { color, variant } from '@material-tailwind/react/types/components/navbar';

type AppNavbarProps = {
  children: React.ReactNode;
  className: string;
  openNav: boolean;
  variant?:variant,
  color?:color,
  fullWidth?:boolean,
  setOpenNav: (bool: boolean) => void;
  navList: { data: NavBarList[]; className: string };
};

export const AppNavbar = ({
  children,
  className,
  openNav,
  variant='filled',
  fullWidth=false,
  color='white',
  setOpenNav,
  navList,
}: AppNavbarProps): JSX.Element => {
  const handleWindowResize = (): boolean | void =>
    window.innerWidth >= 960 && setOpenNav(false);
  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <Navbar
      className={className}
      color={color}
      fullWidth={fullWidth}
      variant={variant}
      placeholder={undefined}
      children={
        <div>
          {children}
          <Collapse open={openNav}>
            <AppNavBarList data={navList.data} className={navList.className} />
          </Collapse>
        </div>
      }
    />
  );
};
