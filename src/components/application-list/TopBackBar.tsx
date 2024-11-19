import styled from 'styled-components';
import {BackXIcon} from '@/assets/icons/common';
import {useNavigate} from 'react-router-dom';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
`;

const BackButton = styled.div`
  cursor: pointer;
`;

export default function TopBackBar() {
  const navigate = useNavigate();

  // x 클릭 시 -> main 페이지로 이동
  const goBack = () => {
    navigate('/main');
  };

  return (
    <BarContainer>
      <div />
      <BackButton onClick={goBack}>
        <BackXIcon />
      </BackButton>
    </BarContainer>
  );
}
