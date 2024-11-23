import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/LoginStyle';
import {IvoryTextIcon} from '@/assets/icons/common';
import {loginApi} from '@/utils/userApi';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsButtonActive(id.trim().length > 0 && password.trim().length > 0);
  }, [id, password]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (isButtonActive) {
      try {
        console.log('ID:', id);
        console.log('Password:', password);

        // 로그인 API 호출
        await loginApi(id, password);

        // 성공 시 메인 페이지로 이동
        navigate('/main');
      } catch (error: any) {
        // 실패 시 에러 메시지 출력
        alert(error.message || '로그인 중 문제가 발생했습니다.');
      }
    }
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.LogoContainer>
                <S.IvoryText>우리 아이의 안심 케어를 약속하는</S.IvoryText>
                <IvoryTextIcon />
              </S.LogoContainer>

              <S.LoginContainer>
                <S.Text>아이디</S.Text>
                <S.Input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  value={id}
                  onChange={handleIdChange}
                />
                <S.Text>비밀번호</S.Text>
                <S.Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </S.LoginContainer>
              <S.Footer>
                <S.LoginButton
                  onClick={handleSubmit}
                  disabled={!isButtonActive}
                  isActive={isButtonActive}>
                  <div>로그인</div>
                </S.LoginButton>
              </S.Footer>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Login;
