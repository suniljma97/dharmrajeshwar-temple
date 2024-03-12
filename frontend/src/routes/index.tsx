import { Route, Routes } from 'react-router';
import { routeConfig } from './config';

type AppRoutesType = Record<string, object>;

routeConfig.map(({ name, path, Component }) => {
  return routeConfig.push({ name, path: `:locale${path}`, Component });
});

const AppRoutes = (props: AppRoutesType): JSX.Element => {
  return (
    <Routes>
      {routeConfig.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component {...(props || {})} />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
