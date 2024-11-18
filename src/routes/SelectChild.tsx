import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/SelectChildStyle';

function SelectChild() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.SelectChild></S.SelectChild>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default SelectChild;
