import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as H from '../styles/components/HeaderStyle';
import Logo from '@/assets/icons/common/ivory-logo.svg';
import Mypage from '@/assets/icons/common/mypage.svg';
import Alarm from '@/assets/icons/common/alarm-bell.svg';
import AlarmRed from '@/assets/icons/common/alarm-red.svg';

function Header() {
  const navigate = useNavigate();
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  // 알림 상태 변경 (예: API 호출 후 상태 업데이트)
  const handleCheckNotifications = () => {
    // 추후 API를 통해 상태를 변경
    setHasNewNotifications(false); // 예시로 알림 상태를 false로 변경
    handleNavLinkClick('/notifications');
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
