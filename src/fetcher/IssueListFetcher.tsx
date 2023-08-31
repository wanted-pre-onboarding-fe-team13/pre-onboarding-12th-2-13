import { useEffect } from 'react';

import useIssueListContext from '@/hooks/useIssueListContext';
import useIssueListInfiniteScroll from '@/hooks/useIssueListInfiniteScroll';

import LoadingSpinner from '@/components/LoadingSpinner';

export default function IssueListFetcher({ children }: React.PropsWithChildren) {
  const { page, isLoading, error, fetchIssues } = useIssueListContext();

  const { targetRef } = useIssueListInfiniteScroll();

  useEffect(() => {
    fetchIssues(page);
  }, [page]);

  if (error) {
    throw new Error();
  }

  // TODO : Loading 컴포넌트 추가
  if (isLoading) {
    return (
      <>
        {children}
        <LoadingSpinner />
        <div ref={targetRef} />
      </>
    );
  }

  return (
    <>
      {children}
      <div ref={targetRef} />
    </>
  );
}
