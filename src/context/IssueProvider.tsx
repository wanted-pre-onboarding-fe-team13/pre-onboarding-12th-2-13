import { ReactNode, createContext, useState } from 'react';

import { getIssueDetails } from '@/apis';

import { issueDataType, IssueContextType } from '@/types';

export const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [issue, setIssue] = useState<issueDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchIssue = async (id: number) => {
    setIssue(null);
    try {
      setIsLoading(true);

      const data = await getIssueDetails(id);

      const isssueData = {
        number: data.number,
        title: data.title,
        avatar: data.user.avatar_url,
        login: data.user.login,
        comments: data.comments,
        created_at: data.created_at,
        body: data.body,
      };

      setIssue(isssueData);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IssueContext.Provider
      value={{
        issue,
        isLoading,
        error,
        fetchIssue,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};
