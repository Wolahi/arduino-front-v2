import { RouteProps } from 'react-router';
import { MainPage } from '../../pages';

// eslint-disable-next-line import/prefer-default-export
export const routes: Record<string, RouteProps> = {
  Main: {
    path: '/',
    element: <MainPage />,
  },
};
