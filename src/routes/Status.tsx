import * as C from '../styles/CommonStyle';
import * as S from '../styles/StatusStyle';

function Status() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Status></S.Status>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Status;
