import React, {useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/ScheduleStyle';

function Schedule() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Schedule></S.Schedule>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Schedule;
