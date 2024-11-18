import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentInformStyle';

function AbsentInform() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.AbsentInform></S.AbsentInform>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default AbsentInform;
