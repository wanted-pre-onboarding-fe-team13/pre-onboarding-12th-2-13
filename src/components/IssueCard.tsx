import React from 'react';
import { issueDataType } from '@/types';
import { dateToKr } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '@/constants/routes';

interface IssueCardProps {
  issue: issueDataType;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const navigate = useNavigate();
  const createdDate = dateToKr(issue.created_at);
  return (
    <div
      className="issue-card flex flex-row justify-between border-2 border-solid p-3 mt-3 rounded-lg mx-10 cursor-pointer hover:shadow-md transform hover:-translate-y-1 transition-all"
      onClick={() => {
        navigate(ROUTES_PATH.ISSUE(issue.number));
      }}
    >
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
