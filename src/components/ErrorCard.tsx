import { ReactNode } from 'react';

type ErrorCard = {
  message?: string | ReactNode;
  state?: 'error' | 'notFonud';
};

const ErrorCard = ({ message, state }: ErrorCard) => {
  const defalutMessage =
    state === 'error' || !state ? (
      <>
        잠시 후 다시 시도해주세요.
        <br />
        <span className="text-sm">요청을 처리하는데 실패했습니다.</span>
      </>
    ) : (
      '404 Not found'
    );

  return (
    <div className="w-full text-center text-gray-400 text-xl pt-12 pb-12 ">
      <img
        src="https://i.ibb.co/LCjd3Mj/error.png"
        alt="error"
        className="w-16 object-center m-auto mb-7"
      />
      <p>{message ? message : defalutMessage}</p>
    </div>
  );
};

export default ErrorCard;
