import * as C from '@/styles/components/CareCardStyle';
import BoryIcon from '@/assets/icons/common/gray-bory.svg';

function NoneCareCard() {
  return (
    <>
      <C.CareContainer>
        <C.BoryIcon src={BoryIcon} alt="보리" />
        아직 매칭된 돌봄 활동이 없습니다!
      </C.CareContainer>
    </>
  );
}

export default NoneCareCard;
