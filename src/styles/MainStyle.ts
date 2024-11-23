import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #ffeadc;
  position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 150px); /* Footer를 위한 공간 확보 */
  text-align: center;
  gap: 16px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  color: #333333;
  line-height: 1.5;
  text-align: center;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px; /* 버튼과 로그인 텍스트 간 간격 */
  padding: 20px 16px; /* 하단 간격 추가 */
  background-color: #ffeadc; /* 배경색 유지 */
`;

export const Main = styled.button`
  width: 335px;
  height: 56px;
  background: #fc986c;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  border: none;

  &:hover {
    background: #e07a5f;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Logintext = styled.span`
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  color: #333333;
`;

export const LoginLink = styled.a`
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  color: #fc986c;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #e07a5f;
  }
`;
