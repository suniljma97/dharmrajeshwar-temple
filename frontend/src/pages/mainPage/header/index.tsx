import React from 'react';
import { AppNavBarList, NavBarList } from '../../../components/appNavBarList';
import { AppNavbar } from '../../../components/appNavbar';
import { AppIconButton } from '../../../components/appIconButton';
import { AppTypography } from '../../../components/appTypography';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navListData: NavBarList[] = [
  { name: '1', path: '#' },
  { name: '2', path: '#' },
  { name: '2', path: '#' },
];

export const Header = (): JSX.Element => {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <AppNavbar
      navList={{
        data: navListData,
        className:
          'my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6',
      }}
      variant='gradient'
      openNav={openNav}
      setOpenNav={setOpenNav}
      className="mx-auto max-w-screen-xl px-6 py-3"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <AppTypography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </AppTypography>
        <div className="hidden lg:block">
          <AppNavBarList
            data={navListData}
            className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
          />
        </div>
        <AppIconButton
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        >
          {
            openNav
              ?  <XMarkIcon className="h-6 w-6" strokeWidth={2} /> 
              :  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          }
        </AppIconButton>
      </div>
    </AppNavbar>
  );
};
