import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

export const PaddingTop = styled.div`
  height: 106px;
`;

export const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 50px;
`;

export const BlackBoldText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${COLOR.BLACK_03};
  line-height: 28px;
  letter-spacing: -0.5px;
`;

export const GrayText = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLOR.WHITE_01};
  padding: 16px 20px 50px;
`;

export const HomeButton = styled.div`
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
