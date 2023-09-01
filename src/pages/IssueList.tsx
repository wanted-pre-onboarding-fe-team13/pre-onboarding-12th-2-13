import useIssueListContext from '@/hooks/useIssueListContext';
import { issueDataType } from '@/types';
import React from 'react';
import IssuePage from '@/components/IssuePage';

const IssueList: React.FC = () => {
  const { issues } = useIssueListContext();

  return (
    <div className="issue-list">
      {issues.map((issuePage: issueDataType[], pageIndex: number) => (
        <IssuePage key={pageIndex} issues={issuePage} />
      ))}
    </div>
  );
};

export default IssueList;
