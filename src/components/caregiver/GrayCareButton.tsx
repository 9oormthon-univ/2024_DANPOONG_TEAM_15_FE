import * as R from '@/styles/components/RequestButtonStyle';
import RightIcon from '@/assets/gray-arrow-right.svg';

function GrayCareButton() {
  return (
    <>
      <R.GrayButtonContainer>
        <R.Text>
          돌봄 활동하는 중..
          <R.Bold>질병감염아동 아이돌봄 활동 중</R.Bold>
        </R.Text>
        <R.GrayCircle>
          <R.RightIcon src={RightIcon} alt="신청하기" />
        </R.GrayCircle>
      </R.GrayButtonContainer>
    </>
  );
}

export default GrayCareButton;
