import {useNavigate} from 'react-router-dom';
import * as H from '../styles/components/HeaderStyle';
import Logo from '@/assets/ivory-logo.svg';
import Mypage from '@/assets/mypage.svg';

function Header() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <H.Header>
        <H.LogoImg
          src={Logo}
          alt="아이보리"
          onClick={() => handleNavLinkClick('/main')}
        />
        <H.MypageImg
          src={Mypage}
          alt="마이페이지"
          onClick={() => handleNavLinkClick('/mypage')}
        />
      </H.Header>
    </>
  );
}

export default Header;
