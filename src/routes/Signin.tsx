import * as C from '../styles/CommonStyle';
import * as S from '../styles/LoginStyle';

function Signin() {
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

export default Signin;
