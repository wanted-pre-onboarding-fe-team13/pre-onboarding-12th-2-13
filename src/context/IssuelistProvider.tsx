//Issueprovider: 이슈번호, 이슈제목, 작성자, 작성일, 코멘트수
import { createContext, PropsWithChildren, useState } from 'react';
import { getIssuesPage } from '@/apis';
import { issueDataType, Issue } from '@/types';

export interface IssuelistContextProps {
  issues: issueDataType[][];
  page: number;
  hasNextPage: boolean;
  isLoading: boolean;
  error: Error | null;
  fetchIssues: (page: number) => void;
  increasePage: () => void;
}

export const IssuelistContext = createContext<IssuelistContextProps | undefined>(undefined);

export const IssuelistProvider = ({ children }: PropsWithChildren) => {
  const [issues, setIssues] = useState<issueDataType[][]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchIssues = async (pageNum: number) => {
    try {
      setIsLoading(true);
      const data = await getIssuesPage(pageNum);
      const simplifiedData = data.map((issueData: Issue) => ({
        number: issueData.number,
        title: issueData.title,
        avatar: issueData.user?.avatar_url,
        login: issueData.user?.login,
        comments: issueData.comments,
        created_at: issueData.created_at,
        body: issueData.body,
      }));

      setIssues(prevIssues => [...prevIssues, simplifiedData]);
      setPage(pageNum);
      setHasNextPage(!!data.length);
    } catch (error) {
      setError(error);
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
