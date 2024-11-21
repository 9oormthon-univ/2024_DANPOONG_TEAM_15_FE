import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ArrowLeftIcon} from '@/assets/icons/common';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
`;

const CursorButton = styled.div`
  cursor: pointer;
`;

export default function TopBackLeftArrowBar() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <BarContainer>
      <CursorButton onClick={onClickBack}>
        <ArrowLeftIcon />
      </CursorButton>
      <div />
    </BarContainer>
  );
}
