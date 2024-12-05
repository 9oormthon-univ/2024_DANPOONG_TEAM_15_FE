import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {BackXIcon} from '@/assets/icons/common';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 20px;
`;

const CursorButton = styled.div`
  cursor: pointer;
`;

export default function TopXBar() {
  const navigate = useNavigate();

  // x 클릭 시 -> main 페이지로 이동
  const onClickX = () => {
    navigate('/caregiver-main');
  };

  return (
    <BarContainer>
      <CursorButton onClick={onClickX}>
        <BackXIcon />
      </CursorButton>
    </BarContainer>
  );
}
