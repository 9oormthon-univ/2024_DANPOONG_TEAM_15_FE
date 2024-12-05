import {useNavigate} from 'react-router-dom';
import * as R from '@/styles/components/RequestButtonStyle';
import RightIcon from '@/assets/brown-arrow-right.svg';

function RequestCareButton() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path: string): void => {
    navigate(path);
  };

  return (
    <>
      <R.CareButtonContainer
        onClick={() => handleNavLinkClick('/caregiver-list')}>
        <R.Text>
          아이돌봄서비스 X 아이보리
          <R.Bold>질병감염아동 돌봄 활동하러 가기</R.Bold>
        </R.Text>
        <R.Circle>
          <R.RightIcon src={RightIcon} alt="신청하기" />
        </R.Circle>
      </R.CareButtonContainer>
    </>
  );
}

export default RequestCareButton;
