import * as C from '../styles/CommonStyle';
import * as S from '../styles/StartStyle';
import {IvoryIcon} from '@/assets/icons/common';
import {IvoryTextIcon} from '@/assets/icons/common';

function Start() {
  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            <S.IconWrapper>
              <IvoryIcon />
              <S.Text>우리 아이의 안심케어를 약속하는</S.Text>
              <IvoryTextIcon />
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

export default Start;
