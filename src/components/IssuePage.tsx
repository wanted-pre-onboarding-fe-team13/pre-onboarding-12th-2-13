// IssuePage.tsx
import React from 'react';
import IssueCard from './IssueCard';
import { issueDataType } from '@/types/types';

interface IssuePageProps {
  issues: issueDataType[];
}

const IssuePage: React.FC<IssuePageProps> = ({ issues }) => {
  return (
    <div className="issue-page">
      {issues.map(issue => (
        <IssueCard key={issue.number} issue={issue} />
      ))}
    </div>
  );
};

export default IssuePage;
