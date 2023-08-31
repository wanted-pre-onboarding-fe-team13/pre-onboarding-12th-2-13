import useIssueListContext from '@/hooks/useIssueListContext';

const IssueList = () => {
  const { issues } = useIssueListContext();

  return <div>IssueList</div>;
};

export default IssueList;
