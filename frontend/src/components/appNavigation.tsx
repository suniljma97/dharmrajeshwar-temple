import { NavigationDirection } from '../common/enums/app.enum';

type NavigationType = {
  path: string;
  title: string;
};
export type AppNavigationProps = {
  data: NavigationType[];
  isHide?: boolean;
  type?: NavigationDirection;
};

export const AppNavigation = ({
  data,
  isHide = false,
  type = NavigationDirection.VERTICAL,
}: AppNavigationProps): JSX.Element => {
  const ulClassName =
    type === NavigationDirection.HORIZONTAL
      ? 'mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0'
      : `bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${isHide ? '' : 'lg:hidden'}`;

  return (
    <ul className={ulClassName}>
      {data.map((item, idx) => (
        <li
          className={
            type === NavigationDirection.HORIZONTAL
              ? 'py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150'
              : ''
          }
        >
          <a
            key={idx}
            className={
              type === NavigationDirection.VERTICAL
                ? 'block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5'
                : ''
            }
            href={item.path}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
