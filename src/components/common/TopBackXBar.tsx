import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ArrowLeftIcon, BackXIcon} from '@/assets/icons/common';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
`;

const CursorButton = styled.div`
  cursor: pointer;
`;

export default function TopBackXBar() {
  const navigate = useNavigate();

  // x 클릭 시 -> main 페이지로 이동
  const onClickX = () => {
    navigate('/main');
  };

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <BarContainer>
      <CursorButton onClick={onClickBack}>
        <ArrowLeftIcon />
      </CursorButton>
      <CursorButton onClick={onClickX}>
        <BackXIcon />
      </CursorButton>
    </BarContainer>
  );
}
