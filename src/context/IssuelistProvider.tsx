//Issueprovider: 이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
import { createContext, PropsWithChildren, useState } from 'react';

import { Endpoints } from '@octokit/types';

import { getIssuesPage } from '@/apis';

export type Issue = Endpoints['GET /issues']['response']['data'][0];

export interface IssuelistContextProps {
  issues: Issue[];
  page: number;
  hasNextPage: boolean;
  isLoading: boolean;
  error: boolean;
  fetchIssues: (page: number) => void;
  increasePage: () => void;
}

export const IssuelistContext = createContext<IssuelistContextProps | undefined>(undefined);

export const IssueProvider = ({ children }: PropsWithChildren) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchIssues = async (pageNum: number) => {
    try {
      setIsLoading(true);

      const data = await getIssuesPage(pageNum);
      const newDataPage = [data];
      setIssues([...issues, ...newDataPage]);
      setHasNextPage(!!data.length);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const increasePage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <IssuelistContext.Provider
      value={{
        issues,
        page,
        hasNextPage,
        isLoading,
        error,
        fetchIssues,
        increasePage,
      }}
    >
      {children}
    </IssuelistContext.Provider>
  );
};
