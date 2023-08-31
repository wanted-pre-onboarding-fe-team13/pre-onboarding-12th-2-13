import IssueList from '@/pages/IssueList';
import Issue from '@/pages/Issue';
import { Navigate, Outlet, useRoutes } from 'react-router';

const Router = () =>
  useRoutes([
    { path: '/', element: <Navigate to="/issue-list" replace /> },
    {
      path: '/',
      element: (
        <>
          <div>header</div>
          <Outlet />
        </>
      ),
      children: [
        { path: '/issue-list', element: <IssueList /> },
        { path: '/issue', element: <Issue /> },
      ],
    },
    { path: '*', element: <Navigate to="/issue-list" replace /> },
  ]);

export default Router;
