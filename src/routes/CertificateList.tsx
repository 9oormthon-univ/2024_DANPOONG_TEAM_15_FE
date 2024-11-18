import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateListStyle';

function CertificateList() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.CertificateList></S.CertificateList>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default CertificateList;
