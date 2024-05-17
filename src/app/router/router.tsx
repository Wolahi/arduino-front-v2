import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router';
import { routes } from './config';
import Loading from '../../shared/Loading';

const AppRouter = () => {
  const withRouter = (route: RouteProps) => {
    const element = <Suspense fallback={<Loading />}>{route.element}</Suspense>;
    return <Route key={route.path} path={route.path} element={element} />;
  };

  return <Routes>{Object.values(routes).map(withRouter)}</Routes>;
};

export default AppRouter;
