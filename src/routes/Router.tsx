import { Navigate, Outlet, useRoutes } from 'react-router';

import { IssueProvider } from '@/context';

import IssueList from '@/pages/IssueList';
import Issue from '@/pages/Issue';

import IssueFetcher from '@/fetcher/IssueFetcher';

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
              <IssueFetcher>
                <Issue />
              </IssueFetcher>
            </IssueProvider>
          ),
        },
      ],
    },
    { path: '*', element: <Navigate to="/issue-list" replace /> },
  ]);

export default Router;
