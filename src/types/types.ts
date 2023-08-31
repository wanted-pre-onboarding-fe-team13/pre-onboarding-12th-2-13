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
  issue: issueDataType;
  isLoading: boolean;
  error: boolean;
  fetchIssue: (id: number) => void;
};