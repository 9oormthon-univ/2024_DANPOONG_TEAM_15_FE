import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateInformStyle';

function CertificateDownload() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.CertificateInform>
                미등원확인서 파일 다운로드
              </S.CertificateInform>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CertificateDownload;
