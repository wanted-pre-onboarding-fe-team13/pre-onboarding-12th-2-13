import { useIssueContext } from '@/hooks/useIssueContext';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import '@/styles/markdown.css';
import { dateToKr } from '@/utils';

const Issue = () => {
  const { issue } = useIssueContext();

  const { avatar, body, comments, created_at, login, number, title } = issue;

  const createdDate = dateToKr(created_at);

  return (
    <main className="w-full flex justify-center">
      <article className="w-2/3">
        <div className="flex justify-between items-center border-b-2 mb-20 pt-20 pb-20 ">
          <div className="flex items-center">
            <div className="w-24 rounded-md overflow-hidden">
              <img src={avatar} />
            </div>
            <div className="ml-7 mb-3">
              <h2 className="font-bold text-2xl mb-4">
                &#91;#{number}&#93; {title}
              </h2>
              <dl>
                <dt className="inline">작성자 : </dt>
                <dd className="inline">{login}</dd>
                <dt className="inline ml-5">작성일 : </dt>
                <dd className="inline">{createdDate}</dd>
              </dl>
            </div>
          </div>
          <dl>
            <dt className="inline">코멘트 : </dt>
            <dd className="inline"> {comments}</dd>
          </dl>
        </div>
        <section className=" pr-10 pl-10">
          {!body && <p className="text-center">등록된 이슈가 없습니다.</p>}
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body">
            {body}
          </ReactMarkdown>
        </section>
      </article>
    </main>
  );
};

export default Issue;
