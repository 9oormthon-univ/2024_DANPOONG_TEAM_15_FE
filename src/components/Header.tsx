import {useNavigate} from 'react-router-dom';
import * as H from '../styles/components/HeaderStyle';
import Logo from '@/assets/icons/common/ivory-logo.svg';
import Mypage from '@/assets/icons/common/mypage.svg';
import Alarm from '@/assets/icons/common/alarm-bell.svg';
import AlarmRed from '@/assets/icons/common/alarm-red.svg';

interface HeaderProps {
  hasNewNotifications: boolean;
  clearNotifications: () => void;
}

function Header({hasNewNotifications, clearNotifications}: HeaderProps) {
  const navigate = useNavigate();

  const handleCheckNotifications = () => {
    clearNotifications(); // 알림 상태 초기화
    navigate('/notifications');
  };

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
        <H.ImgContainer>
          <H.LittleImg
            src={hasNewNotifications ? AlarmRed : Alarm}
            alt="알람함"
            onClick={handleCheckNotifications}
          />
          <H.LittleImg
            src={Mypage}
            alt="마이페이지"
            onClick={() => handleNavLinkClick('/mypage')}
          />
        </H.ImgContainer>
      </H.Header>
    </>
  );
}

export default Header;
