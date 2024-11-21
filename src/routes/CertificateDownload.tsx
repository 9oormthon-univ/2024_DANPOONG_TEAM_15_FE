import React from 'react';
import {useState} from 'react';
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
  font-size: 1.2rem;
  font-weight: 600;
  color: ${COLOR.BLACK_01};
`;

const ButtonContainer = styled.label`
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

const FileInput = styled.input`
  display: none;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  color: ${COLOR.ORANGE_02};
  font-size: 0.9rem;
  font-weight: 600;
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
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileType = file.type;
      if (fileType !== 'application/pdf') {
        setErrorMessage('올바른 PDF 파일을 업로드해주세요.');
        setPdfFile(null);
        return;
      }
      setErrorMessage(null);
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
    }
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
                <ButtonContainer htmlFor="pdf-upload">
                  <DownloadIcon />
                  <WhiteBoldText>PDF 파일 다운로드</WhiteBoldText>
                </ButtonContainer>
                <FileInput
                  id="pdf-upload"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                />

                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {pdfFile && (
                  <>
                    <BlackBoldText>미리보기</BlackBoldText>
                    <PreviewContainer>
                      <PreviewFrame src={pdfFile} title="PDF Preview" />
                    </PreviewContainer>
                  </>
                )}
              </Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CertificateDownload;
