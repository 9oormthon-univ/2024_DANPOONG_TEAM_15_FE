import {useNavigate} from 'react-router-dom';
import * as C from '@/styles/components/ChildCardStyle';

import DefaultImage from '@/assets/default-child.svg';

interface ChildCardProps {
  name: string;
  age: number;
  image: string;
  status: string;
}

function ChildCard({name, age, image, status}: ChildCardProps) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string) => {
    navigate(path);
  };

  const displayImage = image || DefaultImage;

  return (
    <>
      <C.TotalContainer>
        <C.CardContainer onClick={() => handleNavLinkClick('/status')}>
          <C.DefaultImg src={displayImage} alt="아이 사진" />
        </C.CardContainer>
        <C.Information>
          <>{name}</>
          <C.Line />
          <>{age}살</>
        </C.Information>
        <C.StatusContainer onClick={() => handleNavLinkClick('/status/detail')}>
          <C.StatusTitle>최근 신청 현황</C.StatusTitle>
          <C.StatusBar />
          <C.StatusText>{status}</C.StatusText>
        </C.StatusContainer>
      </C.TotalContainer>
    </>
  );
}

export default ChildCard;
