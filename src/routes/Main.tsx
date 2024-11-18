import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/MainStyle';

function Main() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Main></S.Main>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Main;
