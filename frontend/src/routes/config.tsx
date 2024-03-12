import { RouteName } from '../common/enums/app.enum';
import { AppPages } from '../pages';

export const routeConfig: {
  name: RouteName;
  path: string;
  Component: () => JSX.Element;
}[] = [{ name: RouteName.APP_LANDING, path: '/', Component: AppPages }];
