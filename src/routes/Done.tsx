import React, {useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/DoneStyle';

function Done() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Done></S.Done>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Done;
