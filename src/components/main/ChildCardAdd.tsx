import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/components/ChildCardStyle';

import CircleAddIcon from '@/assets/circle-add.svg';

function ChildCardAdd() {
  const navigate = useNavigate();

  const handleNavLinkClick = path => {
    navigate(path);
  };

  return (
    <>
      <C.TotalContainer>
        <C.CardContainerAdd
          onClick={() => handleNavLinkClick('/main/child-addition')}>
          <C.AddIcon src={CircleAddIcon} alt="아이 등록" />
          아이 등록
        </C.CardContainerAdd>
        <C.StatusContainerAdd>
          <C.StatusTextAdd>아이 등록이 필요한 서비스입니다</C.StatusTextAdd>
        </C.StatusContainerAdd>
      </C.TotalContainer>
    </>
  );
}

export default ChildCardAdd;
