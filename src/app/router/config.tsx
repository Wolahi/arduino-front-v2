import { RouteProps } from 'react-router';
import { MainPage, BranchingPage } from '../../pages';

// eslint-disable-next-line import/prefer-default-export
export const routes: Record<string, RouteProps> = {
  Main: {
    path: '/main',
    element: <MainPage />,
  },
  Index: {
    path: '/',
    element: <BranchingPage />,
  },
};
