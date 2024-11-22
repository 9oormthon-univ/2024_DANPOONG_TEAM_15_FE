import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ArrowLeftIcon} from '@/assets/icons/common';
import {COLOR} from '@/const/color';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
`;

const BlankContainer = styled.div`
  width: 28px;
  height: 28px;
`;

const CursorButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const BlackText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

interface TopBackXBarProps {
  titleText: string;
}

export default function TopBackMentBar({titleText}: TopBackXBarProps) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <BarContainer>
      <CursorButton onClick={onClickBack}>
        <ArrowLeftIcon />
      </CursorButton>
      <BlackText>{titleText}</BlackText>
      <BlankContainer />
    </BarContainer>
  );
}
