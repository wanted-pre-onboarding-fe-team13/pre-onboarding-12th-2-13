import { useEffect, useRef } from 'react';

import useIssueListContext from './useIssueListContext';

const useIssueListInfiniteScroll = () => {
  const { hasNextPage, isLoading, error, increasePage } = useIssueListContext();

  const targetRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (hasNextPage && !isLoading && !error) {
      increasePage();
    }
  });

  useEffect(() => {
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef.current]);

  return {
    targetRef,
  };
};

export default useIssueListInfiniteScroll;
