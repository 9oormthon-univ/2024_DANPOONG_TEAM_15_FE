import styled from 'styled-components';

export const Background = styled.div`
  background: #ffeadc;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-top: 200px;
  gap: 16px;
`;

export const Text = styled.div`
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  color: #b45a5a;
  line-height: 1.5;
  text-align: center;
  margin-bottom: -20px;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 16px;
  background-color: #ffeadc;
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
