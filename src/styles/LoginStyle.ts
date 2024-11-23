import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  flex-grow: 2;
  gap: 8px;
`;

export const IvoryText = styled.div`
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  color: #b45a5a;
  line-height: 1.5;
  text-align: center;
  margin-bottom: -20px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  text-align: center;
  gap: 10px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  color: #333333;
  line-height: 1;
  text-align: left;
  width: 80%;
  margin-left: -20px;
`;

export const Input = styled.input`
  width: 80%;
  height: 34px;
  background: #f3f3f3;
  border-radius: 12px;
  padding: 14px 16px;
  color: #333333;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 24px;
  border: none;
  overflow: hidden;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    border: 1px solid #e07a5f;
  }
`;

interface ButtonProps {
  isActive: boolean;
}

export const LoginButton = styled.button<ButtonProps>`
  width: 328px;
  height: 56px;
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
  position: absolute;
  bottom: 0;
  display: flex;
  width: 370px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
