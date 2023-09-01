import { ROUTES_PATH } from '@/constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const loacation = useLocation();

  console.log(loacation);

  return (
    <header className="sticky top-0 left-0 right-0 w-full text-center pt-10 pb-10 text-3xl bg-neutral-100 z-10">
      facebook / react
      {loacation.pathname !== ROUTES_PATH.ISSUE_LIST && (
        <button className="w-6 absolute top-11 left-10" onClick={() => navigate(-1)}>
          <img
            src="https://i.ibb.co/qgH5VPV/free-icon-right-arrow-271228.png"
            alt="free-icon-right-arrow-271228"
          />
        </button>
      )}
    </header>
  );
};

export default Header;
