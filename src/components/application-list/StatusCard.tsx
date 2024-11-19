import {COLOR} from '@/const/color';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${COLOR.ORANGE_LIGHT};
  border-radius: 8px;
  padding: 12px;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const CircleNumber = styled.div<{isActive: boolean}>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props =>
    props.isActive ? COLOR.ORANGE_01 : COLOR.BLACK_09};
  color: ${COLOR.WHITE_01};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const OrangeText = styled.div<{isActive: boolean}>`
  font-size: 0.875rem;
  color: ${props => (props.isActive ? COLOR.ORANGE_01 : COLOR.BLACK_09)};
`;

interface StatusCardProps {
  status: string;
}

export default function StatusCard({status}: StatusCardProps) {
  const steps = [
    {id: 1, status: '서비스 신청 완료', text: '신청 완료'},
    {id: 2, status: '돌봄 중', text: '돌봄 중'},
    {id: 3, status: '이용 완료', text: '이용 완료'},
  ];

  return (
    <CardContainer>
      <StatusContainer>
        {steps.map(step => (
          <StatusInfo key={step.id}>
            <CircleNumber isActive={status === step.status}>
              {step.id}
            </CircleNumber>
            <OrangeText isActive={status === step.status}>
              {step.text}
            </OrangeText>
          </StatusInfo>
        ))}
      </StatusContainer>
    </CardContainer>
  );
}
