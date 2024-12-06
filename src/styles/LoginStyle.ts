import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 45px;
  margin-bottom: 78px;
  text-align: center;
  gap: 8px;
`;

export const IvoryText = styled.div`
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  color: #b45a5a;
  line-height: 1.5;
  text-align: center;
  margin-bottom: -15px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding: 16px 20px 50px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${COLOR.BLACK_03};
  line-height: 1;
  text-align: left;
  margin-bottom: -12px;
`;

export const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid ${COLOR.WHITE_07};
  border-radius: 12px;
  font-size: 14px;
  color: ${COLOR.BLACK_03};
  background-color: ${COLOR.WHITE_07};
  font-family: 'Pretendard';
  &::placeholder {
    color: ${COLOR.GRAY_04};
  }

  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ORANGE_01};
  }
`;

interface ButtonProps {
  isActive: boolean;
}

export const LoginButton = styled.button<ButtonProps>`
  width: 100%;
  padding: 16px;
  bottom: 0;
  background: ${({isActive}) => (isActive ? '#fc986c' : '#dfe2e5')};
  color: ${COLOR.WHITE_01};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 14px 16px;

  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 24px;
  text-align: center;

  cursor: ${({isActive}) => (isActive ? 'pointer' : 'not-allowed')};

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: ${({isActive}) => (isActive ? '#e07a5f' : '#dfe2e5')};
  }

  &:active {
    background: ${({isActive}) => (isActive ? '#c76349' : '#dfe2e5')};
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLOR.WHITE_01};
  padding: 16px 20px 50px;
`;
