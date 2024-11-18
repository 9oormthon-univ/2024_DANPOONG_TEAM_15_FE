import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentListStyle';

function AbsentList() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.AbsentList></S.AbsentList>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default AbsentList;
