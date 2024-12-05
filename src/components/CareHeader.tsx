import {useNavigate} from 'react-router-dom';
import * as H from '../styles/components/HeaderStyle';
import Logo from '@/assets/icons/common/ivory-logo.svg';

function CareHeader() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <H.CareHeader>
        <H.LogoImg
          src={Logo}
          alt="아이보리"
          onClick={() => handleNavLinkClick('/caregiver-main')}
        />
        <H.CareButton>보리</H.CareButton>
      </H.CareHeader>
    </>
  );
}

export default CareHeader;
