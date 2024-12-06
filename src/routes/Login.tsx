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

        const authority = localStorage.getItem('authority');

        // 권한에 따라 경로 변경
        if (authority === 'ROLE_CAREGIVER') {
          navigate('/caregiver-main');
        } else {
          navigate('/main');
        }
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
              <S.Container>
                <S.LogoContainer>
                  <S.IvoryText>우리 아이의 안심 케어를 약속하는</S.IvoryText>
                  <IvoryTextIcon />
                </S.LogoContainer>

                <S.LoginContainer>
                  <S.Text>이메일</S.Text>
                  <S.Input
                    type="text"
                    placeholder="이메일을 입력해주세요"
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
                    로그인
                  </S.LoginButton>
                </S.Footer>
              </S.Container>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Login;
