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
    <main className="w-full flex justify-center pb-20">
      <article className="w-11/12 md:w-10/12 lg:max-w-5xl">
        <div className="flex items-center border-b-2 mb-20 pt-20 pb-20">
          <div className="w-24 rounded-md overflow-hidden">
            <img src={avatar} className="w-24 rounded-md overflow-hidden" />
          </div>
          <div className="ml-8 lg:mb-3 w-full">
            <h2 className="font-bold text-l mb-4 md:text-xl lg:text-2xl">
              &#91;#{number}&#93; {title}
            </h2>
            <div className="w-full md:flex md:justify-between">
              <div>
                <dl className="md:inline-block">
                  <dt className="inline">작성자 : </dt>
                  <dd className="inline">{login}</dd>
                </dl>
                <dl className="md:inline-block md:ml-3">
                  <dt className="inline">작성일 : </dt>
                  <dd className="inline">{createdDate}</dd>
                </dl>
              </div>
              <dl>
                <dt className="inline">코멘트 : </dt>
                <dd className="inline"> {comments}</dd>
              </dl>
            </div>
          </div>
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
