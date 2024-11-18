import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/PayStyle';

function Pay() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Pay></S.Pay>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Pay;
