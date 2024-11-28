import * as S from '@/styles/components/WarnCardStyle';
import WarnIcon from '@/assets/icons/request/circle-warn.svg';

const WarnCard = () => {
  return (
    <S.WarnContainer>
      <S.WarnIcon src={WarnIcon} alt="주의사항" />
      <S.WarnTexts>
        <S.WarnTitle>이렇게는 일정 선택이 안돼요</S.WarnTitle>
        <S.WarnText>
          1. 결석 기간 외 기간 선택
          <br />
          2. 신청한 돌봄 시간으로부터 4시간 전 선택
        </S.WarnText>
      </S.WarnTexts>
    </S.WarnContainer>
  );
};

export default WarnCard;
