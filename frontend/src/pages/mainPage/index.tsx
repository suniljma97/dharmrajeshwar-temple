import { Header } from './header';

export const MainPage = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="border-b-2">
        <Header />
      </div>
      <div className="flex">
        <div className="border-r-2">left</div>
        <div className="border-r-2">right</div>
      </div>
    </div>
  );
};
