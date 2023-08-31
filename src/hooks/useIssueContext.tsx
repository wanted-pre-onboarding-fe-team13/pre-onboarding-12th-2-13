import { useContext } from 'react';
import { IssueContext } from '@/context/index';

export const useIssueContext = () => {
  const issuecontext = useContext(IssueContext);

  if (!issuecontext) throw new Error('Cannot find context');

  return issuecontext;
};
