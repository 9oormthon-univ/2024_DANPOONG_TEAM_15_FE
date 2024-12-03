import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import * as R from '@/styles/components/RequestLoadingStyle';

function RequestLoading() {
  return (
    <>
      <R.Space>
        <R.Background>
          <R.LoadingContainer>
            <DotLottieReact
              src="https://lottie.host/87e4ad75-c92b-41d1-869e-4ea0794f8556/y0kMyOnqcX.lottie"
              loop
              autoplay
              style={{width: '200px', height: '200px'}}
            />
            서류를 확인하는 중이에요!
          </R.LoadingContainer>
        </R.Background>
      </R.Space>
    </>
  );
}

export default RequestLoading;
