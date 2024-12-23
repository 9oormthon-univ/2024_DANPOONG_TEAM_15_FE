import styled from 'styled-components';
import {COLOR} from '@/const/color';

interface ButtonProps {
  $isActive: boolean;
}

export const Background = styled.div`
  background-color: #ffffff;
`;

export const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

export const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.45px;
`;

export const SubTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;

  margin: 4px 0 32px;
`;

export const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 114px;
`;

export const FooterContainer = styled.div`
  padding: 16px 20px 50px;
  background-color: ${COLOR.WHITE_01};
  position: fixed;
  bottom: 0;
  width: calc(100% - 32px);

  @media (hover: hover) and (pointer: fine) {
    width: calc(360px - 32px);
  }
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  border: none;
  background-color: ${({$isActive}) =>
    $isActive ? COLOR.ORANGE_01 : COLOR.GRAY_05};
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({$isActive}) => ($isActive ? 'pointer' : 'not-allowed')};

  color: ${COLOR.WHITE_01};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;

  &:hover {
    background-color: ${({$isActive}) =>
      $isActive ? COLOR.ORANGE_02 : COLOR.GRAY_05};
    transition: background-color 0.2s;
  }
`;
