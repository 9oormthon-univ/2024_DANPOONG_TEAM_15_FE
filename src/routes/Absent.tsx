import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import FileContainer from '@/components/request/FileContainer';
import RequestLoading from '@/components/request/RequestLoading';

function Absent() {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNavLinkClick = (path: string): void => {
    if (selectedPaper !== null) {
      setIsLoading(true); // 로딩 상태 활성화
      setTimeout(() => {
        setIsLoading(false); // 로딩 상태 비활성화
        navigate(path); // 경로 이동
      }, 3000); // 3초 대기
    }
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
                  <ProgressBar isStatus={1} />
                  <S.NumTitle>1. 서류 제출</S.NumTitle>
                  <S.Title>미등원 확인서 제출</S.Title>
                  <S.FileSpace>
                    <FileContainer
                      setSelectedPaper={setSelectedPaper}
                      fileListPath="/absent-list"
                    />
                  </S.FileSpace>
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    $isActive={selectedPaper !== null}
                    onClick={() =>
                      handleNavLinkClick('/request/absent-confirm')
                    }>
                    서류 검증하기
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>

      {/* 로딩 모달 */}
      {isLoading && <RequestLoading />}
    </>
  );
}

export default Absent;
