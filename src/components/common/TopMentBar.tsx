import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {BackXIcon} from '@/assets/icons/common';
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
  cursor: pointer;
`;
const BlackText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

interface TopBackXBarProps {
  titleText: string;
}

export default function TopMentBar({titleText}: TopBackXBarProps) {
  const navigate = useNavigate();

  // x 클릭 시 -> main 페이지로 이동
  const onClickX = () => {
    navigate('/main');
  };

  return (
    <BarContainer>
      <BlankContainer />
      <BlackText>{titleText}</BlackText>
      <CursorButton onClick={onClickX}>
        <BackXIcon />
      </CursorButton>
    </BarContainer>
  );
}
