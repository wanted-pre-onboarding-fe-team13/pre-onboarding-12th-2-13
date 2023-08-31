import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useIssueContext } from '@/hooks/useIssueContext';

import LoadingSpinner from '@/components/LoadingSpinner';

export default function IssueListFetcher({ children }: React.PropsWithChildren) {
  const { isLoading, error, fetchIssue } = useIssueContext();

  const param = useParams();

  const issueNumber = Number(param.issueNumber);

  useEffect(() => {
    fetchIssue(issueNumber);
  }, []);

  if (error) {
    throw new Error();
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}
