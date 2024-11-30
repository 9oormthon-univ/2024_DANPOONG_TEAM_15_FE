import {useState, ChangeEvent} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/MemoStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import {applyService} from '@/utils/requestApi';

// onClick={() => handleNavLinkClick('/request/pay')}

function Time() {
  const [inputData, setInputData] = useState<string>(''); // inputData의 타입을 문자열로 지정

  // 입력 값 변경 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputData(value);
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackXBar />
                <S.Container>
                  <ProgressBar isStatus={2} />
                  <S.NumTitle>2. 일정 선택</S.NumTitle>
                  <S.Title>
                    돌봄 메모 작성 <S.SubTitle>(선택)</S.SubTitle>
                  </S.Title>
                  <S.Inform>
                    돌보미분께 아이 돌봄에 필요한 추가 정보를 적어주세요
                  </S.Inform>
                  <S.TextareaContainer
                    placeholder="하고 싶은 말을 자유롭게 적어주세요!"
                    value={inputData}
                    onChange={handleInputChange}
                  />
                </S.Container>
                <S.FooterContainer>
                  <S.Button>다음</S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Time;
