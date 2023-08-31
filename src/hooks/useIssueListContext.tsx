import { useContext } from 'react';

import { IssuelistContext } from '@/context/IssuelistProvider';

const useIssueListContext = () => {
  const issueListContext = useContext(IssuelistContext);

  if (!issueListContext) throw new Error('Cannot find issue list context');

  return issueListContext;
};

export default useIssueListContext;