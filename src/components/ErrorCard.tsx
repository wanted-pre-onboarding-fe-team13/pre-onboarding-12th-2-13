import { ReactNode } from 'react';

type ErrorCard = {
  message?: string | ReactNode;
  reset?: () => void;
};

const ErrorCard = ({ message }: ErrorCard) => {
  const defalutMessage = (
    <>
      잠시 후 다시 시도해주세요.
      <br />
      <span className="text-sm">요청을 처리하는데 실패했습니다.</span>
    </>
  );

  return (
    <div className="w-full pt-12 pb-12 text-xl text-center text-gray-400 ">
      <img
        src="https://i.ibb.co/LCjd3Mj/error.png"
        alt="error"
        className="object-center w-16 m-auto mb-7"
      />
      <p>{message ? message : defalutMessage}</p>
    </div>
  );
};

export default ErrorCard;
