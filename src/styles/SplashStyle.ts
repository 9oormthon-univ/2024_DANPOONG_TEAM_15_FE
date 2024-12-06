import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Background = styled.div`
  background: #ffeadc;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px 50px;
`;

export const Button = styled.button`
  padding: 16px;
  background-color: ${COLOR.ORANGE_01};
  border: none;
  border-radius: 8px;
  color: ${COLOR.WHITE_01};
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;

  &:disabled {
    background-color: ${COLOR.GRAY_04};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${COLOR.ORANGE_06};
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Logintext = styled.span`
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  color: ${COLOR.BLACK_03};
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
