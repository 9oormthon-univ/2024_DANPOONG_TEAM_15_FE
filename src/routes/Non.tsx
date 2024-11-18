import React, {useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/NonStyle';

function Non() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Non></S.Non>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Non;
