//Issueprovider: 이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Endpoints } from '@octokit/types';
import { getIssuesPage } from '@/apis';

export type Issue = Endpoints['GET /issues']['response']['data'][0];

export interface IssuelistContextProps {
  issues: Issue[];
  isLoading: boolean;
  hasNextPage: boolean;
}

export const IssuelistContext = createContext<IssuelistContextProps | undefined>(undefined);

export const IssueProvider = ({ children }: PropsWithChildren) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  const fetchIssues = async (pageNum: number) => {
    try {
      const data = await getIssuesPage(pageNum);
      setIssues([...issues, ...data]);
      setHasNextPage(Boolean(data.length));
    } catch {
      console.log('error getting');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchIssues(pageNum);
  }, [pageNum]);

  return (
    <IssuelistContext.Provider value={{ issues, isLoading, hasNextPage }}>
      {children}
    </IssuelistContext.Provider>
  );
};
