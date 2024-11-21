import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/components/ChildCardStyle';

import DefaultImage from '@/assets/default-child.svg';

function ChildCard() {
  const navigate = useNavigate();

  const handleNavLinkClick = path => {
    navigate(path);
  };

  return (
    <>
      <C.TotalContainer>
        <C.CardContainer onClick={() => handleNavLinkClick('/')}>
          <C.DefaultImg src={DefaultImage} alt="아이 사진" />
        </C.CardContainer>
        <C.Information>
          <>홍길동</>
          <C.Line />
          <>8살</>
        </C.Information>
      </C.TotalContainer>
    </>
  );
}

export default ChildCard;