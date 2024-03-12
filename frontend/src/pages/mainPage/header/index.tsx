import { useEffect, useRef, useState } from 'react';
import { DropdownMenuIcon } from '../../../icons/dropdownMenuIcon';
import { CloseIcon } from '../../../icons/closeIcon';

export const AppNavbar = (): JSX.Element => {
  const [state, setState] = useState(false);
  const navRef: any = useRef(null);

  const navigation = [
    { title: 'Customers', path: 'javascript:void(0)' },
    { title: 'Careers', path: 'javascript:void(0)' },
    { title: 'Guides', path: 'javascript:void(0)' },
    { title: 'Partners', path: 'javascript:void(0)' },
    { title: 'Teams', path: 'javascript:void(0)' },
    { title: 'Blog', path: 'javascript:void(0)' },
  ];

  useEffect(() => {
    const body = document.body;
    const customBodyStyle = ['overflow-hidden', 'lg:overflow-visible'];
    if (state) body.classList.add(...customBodyStyle);
    else body.classList.remove(...customBodyStyle);
    const customStyle = ['sticky-nav', 'fixed', 'border-b'];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20">
      <div className="items-center px-4 mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <img
            src="https://res.cloudinary.com/sunil-dhakad/image/upload/v1709360657/y9mfylmit3v0dgbrl3nd.png"
            alt="NO IMAGE"
            height={120}
            width={120}
          />
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? <DropdownMenuIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                <a
                  href="javascript:void(0)"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Contact
                </a>
              </li>
              <li className="mt-4 lg:mt-0">
                <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                >
                  Login
                </a>
              </li>
              <li className="mt-8 lg:mt-0">
                <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-600 hover:text-indigo-600">
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
