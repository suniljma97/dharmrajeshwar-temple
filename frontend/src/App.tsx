import { Suspense } from 'react';
import { AppPages } from './pages';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

export const App = (): JSX.Element => {
  return (
    <Suspense fallback="loading...">
      <BrowserRouter>
        <AppPages />
      </BrowserRouter>
    </Suspense>
  );
};
