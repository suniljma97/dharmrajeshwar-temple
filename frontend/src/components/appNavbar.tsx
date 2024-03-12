import React from 'react';
import { Navbar, Collapse } from '@material-tailwind/react';

type AppNavbarProps = {
  children: React.ReactNode;
  className: string;
  setOpen: (bool: boolean) => void;
};

export const AppNavbar = ({
  children,
  className,
  setOpen,
}: AppNavbarProps): JSX.Element => {
  const [openNav, setOpenNav] = React.useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
  setOpen(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <Navbar
      className={className}
      placeholder={undefined}
      children={
        <div>
          {children}
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </div>
      }
    />
  );
};
