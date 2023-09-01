// AdCard.tsx
import { Link } from 'react-router-dom';

const AdCard = () => {
  return (
    <div className="border-2 border-solid p-3 mt-3 rounded-lg mx-10 cursor-pointer hover:shadow-md transform hover:-translate-y-1 transition-all">
      <Link to="https://www.wanted.co.kr/" target="_blank">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="wanted"
          className="m-auto"
        />
      </Link>
    </div>
  );
};

export default AdCard;
