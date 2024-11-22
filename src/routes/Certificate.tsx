import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import FileContainer from '@/components/request/FileContainer';

function Certificate() {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<File | null>(null);

  const handleNavLinkClick = (path: string): void => {
    if (selectedPaper !== null) {
      navigate(path);
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
                  <ProgressBar isStatus={0} />
                  <S.NumTitle>1. 서류 제출</S.NumTitle>
                  <S.Title>진단서 제출</S.Title>
                  <S.FileSpace>
                    <FileContainer
                      setSelectedPaper={setSelectedPaper}
                      fileListPath="/certificate-list"
                    />
                  </S.FileSpace>
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    $isActive={selectedPaper !== null}
                    onClick={() =>
                      handleNavLinkClick('/request/certificate-confirm')
                    }>
                    서류 검증하기
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Certificate;
