import { AppTypography } from './appTypography';

export type NavBarList = {
  name: string;
  path: string;
  className?: string;
};
type AppNavBarListProps = {
  data: NavBarList[];
  className: string;
};

export const AppNavBarList = ({
  data,
  className,
}: AppNavBarListProps): JSX.Element => {
  return (
    <ul className={className}>
      {data.map(({ name, path }) => (
        <AppTypography
          className="p-1 font-medium"
          children={
            <a
              href={path}
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              {name}
            </a>
          }
        />
      ))}
    </ul>
  );
};
