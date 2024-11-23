import * as C from '../styles/CommonStyle';
import * as S from '../styles/MainStyle';
import {IvoryAppLogo} from '@/assets/icons/common';
import {IvoryTextLogo} from '@/assets/icons/common';

function Main() {
  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            <S.IconWrapper>
              <IvoryAppLogo />
              <S.Text>우리 아이의 안심케어를 약속하는</S.Text>
              <IvoryTextLogo />
            </S.IconWrapper>
            {/* 버튼과 로그인 컨테이너를 Footer로 묶음 */}
            <S.Footer>
              <S.Main>바로 시작하기</S.Main>
              <S.LoginContainer>
                <S.Logintext>계정이 있으신가요?</S.Logintext>
                <S.LoginLink href="/login">로그인</S.LoginLink>
              </S.LoginContainer>
            </S.Footer>
          </C.PageSpace>
        </S.Background>
      </C.Center>
    </C.Page>
  );
}

export default Main;
