import * as R from '@/styles/components/RequestLoadingStyle';

import ListIcon from '@/assets/icons/request/list.svg';

function RequestLoading() {
  return (
    <>
      <R.Space>
        <R.Background>
          <R.LoadingContainer>
            <R.Circle>
              <R.ListIcon src={ListIcon} alt="서류 검증 중" />
            </R.Circle>
            서류 검증하는 중...
          </R.LoadingContainer>
        </R.Background>
      </R.Space>
    </>
  );
}

export default RequestLoading;
