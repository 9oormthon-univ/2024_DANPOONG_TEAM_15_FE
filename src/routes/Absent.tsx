import React, {useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/AbsentStyle';

function Absent() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Absent></S.Absent>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Absent;
