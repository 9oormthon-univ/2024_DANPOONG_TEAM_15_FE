import styled from 'styled-components';
import {COLOR} from '@/const/color';
import {IvoryIcon} from '@/assets/icons/common';

const CardContainer = styled.div`
  background-color: ${COLOR.WHITE_07};
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'hasCaregiver',
})<{hasCaregiver: boolean}>`
  border-radius: 50%;
  overflow: hidden;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.hasCaregiver ? COLOR.ORANGE_LIGHT : COLOR.BLACK_09};
  border: ${props =>
    props.hasCaregiver ? `2px solid ${COLOR.ORANGE_01}` : 'none'};
`;

const PlaceholderImageContainer = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${COLOR.BLACK_09};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerCircle = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-color: ${COLOR.WHITE_01};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${COLOR.GRAY_04};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BlackText = styled.div`
  color: ${COLOR.BLACK_03};
  font-size: 14px;
`;

interface CaregiverCardProps {
  status: string;
}

export default function CaregiverCard({status}: CaregiverCardProps) {
  const hasCaregiver = status !== '서비스 신청 완료';

  // 돌보미 정보 더미 데이터
  const caregiverInfo = {
    name: '구르미',
    age: '49세',
    gender: '여성',
  };

  return (
    <CardContainer>
      <ImageContainer hasCaregiver={hasCaregiver}>
        {hasCaregiver ? (
          <IvoryIcon width={58} height={58} />
        ) : (
          <PlaceholderImageContainer>
            <InnerCircle>?</InnerCircle>
          </PlaceholderImageContainer>
        )}
      </ImageContainer>
      <TextContainer>
        {hasCaregiver ? (
          <BlackText>
            {caregiverInfo.name} | {caregiverInfo.age} | {caregiverInfo.gender}
          </BlackText>
        ) : (
          <BlackText>아직 매칭된 돌보미가 없습니다</BlackText>
        )}
      </TextContainer>
    </CardContainer>
  );
}
