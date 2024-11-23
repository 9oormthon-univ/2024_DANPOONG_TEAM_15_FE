import {useNavigate} from 'react-router-dom'; // useNavigate 추가
import styled from 'styled-components';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/SplashStyle';
import {SplashIcon} from '@/assets/icons/common';

function Main() {
  const navigate = useNavigate(); // 네비게이터 초기화

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  const handleStartClick = () => {
    navigate('/create-account'); // /create-user 페이지로 이동
  };

  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            <S.Container>
              <S.IconWrapper>
                <SplashIcon />
              </S.IconWrapper>
              <S.Footer>
                <S.Button onClick={handleStartClick}>바로 시작하기</S.Button>
                <S.LoginContainer>
                  <S.Logintext>계정이 있으신가요?</S.Logintext>
                  <S.LoginLink onClick={handleLoginClick}>로그인</S.LoginLink>
                </S.LoginContainer>
              </S.Footer>
            </S.Container>
          </C.PageSpace>
        </S.Background>
      </C.Center>
    </C.Page>
  );
}

export default Main;
