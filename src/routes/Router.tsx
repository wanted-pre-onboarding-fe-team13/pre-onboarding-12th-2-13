import { Navigate, Outlet, useRoutes } from 'react-router';

import { IssueProvider, IssuelistProvider } from '@/context';

import IssueList from '@/pages/IssueList';
import Issue from '@/pages/Issue';

import IssueFetcher from '@/fetcher/IssueFetcher';
import IssueListFetcher from '@/fetcher/IssueListFetcher';

import Header from '@/components/Header';
import ApiErrorBoundary from '@/boundary/ApiErrorBoundary';
import ErrorCard from '@/components/ErrorCard';

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
        {
          path: '/issue-list',
          element: (
            <IssuelistProvider>
              <ApiErrorBoundary fallback={({ error, reset }) => <ErrorCard />}>
                <IssueListFetcher>
                  <IssueList />
                </IssueListFetcher>
              </ApiErrorBoundary>
            </IssuelistProvider>
          ),
        },
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
