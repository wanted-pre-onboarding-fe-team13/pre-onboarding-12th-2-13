import { ReactNode, createContext, useState } from 'react';

import { getIssueDetails } from '@/apis';

import { issueDataType, IssueContextType } from '@/types/types';

const nullIssue = {
  number: 0,
  title: '',
  avatar: '',
  login: '',
  comments: 0,
  created_at: '',
  body: '',
};

export const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [issue, setIssue] = useState<issueDataType>(nullIssue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchIssue = async (id: number) => {
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
