import React, {useState, useEffect} from 'react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/LoginStyle';
import {IvoryTextIcon} from '@/assets/icons/common';

function Login() {
  const [id, setId] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [isButtonActive, setIsButtonActive] = useState(false); // 버튼 활성화 상태

  // 입력값 변경 시 버튼 활성화 여부를 판단
  useEffect(() => {
    setIsButtonActive(id.trim().length > 0 && password.trim().length > 0);
  }, [id, password]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value); // 입력값을 상태에 반영
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // 입력값을 상태에 반영
  };

  const handleSubmit = () => {
    if (isButtonActive) {
      console.log('ID:', id);
      console.log('Password:', password);
      // 로그인 로직 추가 가능
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

              {/* 활성화 상태에 따라 스타일 변경 */}
              <S.LoginButton
                onClick={handleSubmit}
                disabled={!isButtonActive} // 비활성화 상태에서는 클릭 불가
                isActive={isButtonActive} // 스타일링을 위한 Prop 전달
              >
                <div>로그인</div>
              </S.LoginButton>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Login;
