import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/CertificateStyle';

function Certificate() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Certificate></S.Certificate>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Certificate;
