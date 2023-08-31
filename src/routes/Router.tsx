import IssueList from '@/pages/IssueList';
import Issue from '@/pages/Issue';
import { Navigate, Outlet, useRoutes } from 'react-router';
import { IssueProvider } from '@/context';
import Header from '@/components/Header';

const Router = () =>
  useRoutes([
    { path: '/', element: <Navigate to="/issue-list" replace /> },
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        { path: '/issue-list', element: <IssueList /> },
        {
          path: '/issue/:issueNumber',
          element: (
            <IssueProvider>
              <Issue />
            </IssueProvider>
          ),
        },
      ],
    },
    { path: '*', element: <Navigate to="/issue-list" replace /> },
  ]);

export default Router;
