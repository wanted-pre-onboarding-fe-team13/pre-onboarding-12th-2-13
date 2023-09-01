// IssuePage.tsx
import React from 'react';
import IssueCard from './IssueCard';
import { issueDataType } from '@/types/types';
import AdCard from './AdCard';

interface IssuePageProps {
  issues: issueDataType[];
}

const IssuePage: React.FC<IssuePageProps> = ({ issues }) => {
  return (
    <div className="issue-page">
      {issues.map((issue, idx) => (
        <React.Fragment key={issue.number}>
          <IssueCard issue={issue} />
          {(idx + 1) % 4 == 0 && <AdCard />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default IssuePage;
