import {useNavigate} from 'react-router-dom';
import * as R from '@/styles/components/RequestButtonStyle';
import RightIcon from '@/assets/orange-arrow-right.svg';

function RequestButton() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <R.ButtonContainer onClick={() => handleNavLinkClick('/request')}>
        <R.Text>
          아이돌봄서비스 X 아이보리
          <R.Bold>질병감염아동 아이돌봄서비스 신청하기</R.Bold>
        </R.Text>
        <R.Circle>
          <R.RightIcon src={RightIcon} alt="신청하기" />
        </R.Circle>
      </R.ButtonContainer>
    </>
  );
}

export default RequestButton;
