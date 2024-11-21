import styled from 'styled-components';
import {COLOR} from '@/const/color';
import {ArrowRightIcon} from '@/assets/icons/common';

const CardContainer = styled.div`
  background-color: ${COLOR.WHITE_07};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 10px;
`;
const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Black3Text = styled.div`
  color: ${COLOR.BLACK_03};
  font-weight: 600;
`;

const GrayText = styled.div`
  color: ${COLOR.GRAY_04};
`;

const PointerStyle = styled.div`
  color: ${COLOR.GRAY_04};
  cursor: pointer;
`;

export default function RegistrationCard() {
  // 임시 데이터
  const registrationData = {
    name: '0000년 0월 0일 진단서',
    applyDate: '2021-08-01',
  };

  // TODO: 상세 보기 클릭 시 액션 추가
  const onClickDetail = () => {
    console.log('상세보기 클릭');
  };

  return (
    <CardContainer>
      <HeaderInfo>
        <Black3Text>{registrationData.name}</Black3Text>
        <PointerStyle onClick={onClickDetail}>
          상세보기 <ArrowRightIcon />
        </PointerStyle>
      </HeaderInfo>
      <GrayText>{registrationData.applyDate}</GrayText>
    </CardContainer>
  );
}
