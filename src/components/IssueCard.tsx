import React from 'react';
import { issueDataType } from '@/types/types';
import { dateToKr } from '@/utils';

interface IssueCardProps {
  issue: issueDataType;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const createdDate = dateToKr(issue.created_at);
  return (
    <div className="issue-card flex flex-row justify-between border-2 border-solid p-3 mt-3 rounded-lg">
      <div className="issue-content">
        <h3 className="font-bold mb-2">
          #{issue.number} {issue.title}
        </h3>
        <p>
          작성자: {issue.login}, 작성일: {createdDate}
        </p>
      </div>

      <div className="issue-comment flex justify-center items-center">코멘트: {issue.comments}</div>
    </div>
  );
};

export default IssueCard;
