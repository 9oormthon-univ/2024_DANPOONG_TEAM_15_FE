import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';
import {COLOR} from '@/const/color';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import {DownloadIcon} from '@/assets/icons/common';

const Container = styled.div`
  padding: 0px 20px 50px;
`;

const HeaderSubText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px 0px 50px;
  padding: 20px 0px;
  background-color: ${COLOR.ORANGE_01};
  border: none;
  border-radius: 16px;
  gap: 8px;
  cursor: pointer;
`;

const WhiteBoldText = styled.div`
  font-weight: 600;
  color: ${COLOR.WHITE_01};
`;

const BlackBoldText = styled.div`
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const PreviewContainer = styled.div`
  margin-top: 20px;
  border: 1px solid ${COLOR.GRAY_09};
  border-radius: 8px;
  overflow: hidden;
`;

const PreviewFrame = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
`;

function CertificateDownload() {
  const pdfFilePath = '/file/absent-paper.pdf'; // 파일 경로

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFilePath; // PDF 파일 경로
    link.download = 'absent-paper.pdf';
    link.click();
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <TopBackLeftArrowBar />
              <Container>
                <HeaderSubText>미등원확인서 파일 다운로드</HeaderSubText>
                <ButtonContainer onClick={handleDownload}>
                  <DownloadIcon />
                  <WhiteBoldText>PDF 파일 다운로드</WhiteBoldText>
                </ButtonContainer>
                <BlackBoldText>미리보기</BlackBoldText>
                <PreviewContainer>
                  <PreviewFrame src={pdfFilePath} title="PDF Preview" />
                </PreviewContainer>
              </Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CertificateDownload;
