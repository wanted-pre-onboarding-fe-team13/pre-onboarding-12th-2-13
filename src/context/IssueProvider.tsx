import { getIssueDetails } from '@/apis';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

type IssueContextType = {
  issue: issueDataType;
  dispatch: dispatchType;
};

type dispatchType = {
  fetchIssue: (id: number) => void;
};

type issueDataType = {
  number: number;
  title: string;
  avatar: string;
  login: string;
  comments: number;
  created_at: string;
  body: string;
};

export const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const [issue, setIssue] = useState<issueDataType | null>(null);
  const param = useParams();
  const issueNumber = Number(param.issueNumber);
  const dispatch: dispatchType = {
    fetchIssue,
  };

  useEffect(() => {
    fetchIssue(issueNumber);
  }, [issueNumber]);

  if (!issue) return <div>loading...</div>;

  async function fetchIssue(id: number) {
    const response = await getIssueDetails(id);
    const isssueData = {
      number: response.number,
      title: response.title,
      avatar: response.user.avatar_url,
      login: response.user.login,
      comments: response.comments,
      created_at: response.created_at,
      body: response.body,
    };

    setIssue(isssueData);
  }

  return <IssueContext.Provider value={{ issue, dispatch }}>{children}</IssueContext.Provider>;
};
