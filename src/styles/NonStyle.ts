import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

export const Container = styled.div`
  padding: 156px 20px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const CustomIcon = styled.img`
  width: 174px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_03};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const Text = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const FooterContainer = styled.div`
  padding: 16px 20px 50px;
  background-color: ${COLOR.WHITE_01};
`;

export const Button = styled.div`
  border-radius: 8px;
  background-color: ${COLOR.ORANGE_01};
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${COLOR.WHITE_01};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;

  &:hover {
    background-color: ${COLOR.ORANGE_02};
    transition: background-color 0.2s;
  }
`;
