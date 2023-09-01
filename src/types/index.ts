import { Endpoints } from '@octokit/types';

export type Issue = Endpoints['GET /issues']['response']['data'][0];

export type issueDataType = {
  number: number;
  title: string;
  avatar: string;
  login: string;
  comments: number;
  created_at: string;
  body: string;
};

export type IssueContextType = {
  issue: issueDataType | null;
  isLoading: boolean;
  error: boolean;
  fetchIssue: (id: number) => void;
};
