import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {COLOR} from '@/const/color';
import {ArrowRightIcon} from '@/assets/icons/common';

const CardContainer = styled.div`
  background-color: ${COLOR.WHITE_07};
  border-radius: 12px;
  padding: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CardSubText = styled.div`
  font-size: 12px;
  color: ${COLOR.GRAY_04};
`;

const StatusContainer = styled.div`
  margin-top: 16px;
  padding: 20px 16px;
  background-color: ${COLOR.ORANGE_LIGHT};
  border: 1px solid ${COLOR.ORANGE_01};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

const StatusTitle = styled.span`
  font-weight: 600;
  color: ${COLOR.BLACK_03};
`;

const StatusText = styled.span`
  color: ${COLOR.BLACK_03};
`;
const StatusBar = styled.div`
  color: ${COLOR.GRAY_09};
`;
const PointerStyle = styled.div`
  cursor: pointer;
`;

interface ApplicationCardProps {
  applyId: string;
  applyDate: string;
  careDate: string;
  careTime: string;
  status: string;
}

const ApplicationCard = ({
  applyId,
  applyDate,
  careDate,
  careTime,
  status,
}: ApplicationCardProps) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/status/detail?applyId=${applyId}`);
  };

  return (
    <CardContainer>
      <CardHeader>
        <StatusTitle>{applyDate}에 신청했어요</StatusTitle>
        <CardSubText>
          <PointerStyle onClick={goDetail}>
            상세보기 <ArrowRightIcon />
          </PointerStyle>
        </CardSubText>
      </CardHeader>
      <CardSubText>
        돌봄 일정 | {careDate} | {careTime}
      </CardSubText>
      <StatusContainer>
        <StatusTitle>신청 현황</StatusTitle>
        <StatusBar> | </StatusBar>
        <StatusText>{status}</StatusText>
      </StatusContainer>
    </CardContainer>
  );
};

export default ApplicationCard;
