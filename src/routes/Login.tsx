import React from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/LoginStyle';

function Login() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Login></S.Login>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Login;
