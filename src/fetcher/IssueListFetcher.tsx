import { useEffect } from 'react';

import useIssueListContext from '@/hooks/useIssueListContext';
import useIssueListInfiniteScroll from '@/hooks/useIssueListInfiniteScroll';

import LoadingSpinner from '@/components/LoadingSpinner';

export default function IssueListFetcher({ children }: React.PropsWithChildren) {
  const { page, isLoading, error, fetchIssues, isInitialLoad } = useIssueListContext();

  const { targetRef } = useIssueListInfiniteScroll();

  useEffect(() => {
    fetchIssues(page);
  }, [page]);

  if (error) {
    throw new Error();
  }

  if (isInitialLoad) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      {children}
      {isLoading && <LoadingSpinner />}
      <div ref={targetRef} />
    </>
  );
}
