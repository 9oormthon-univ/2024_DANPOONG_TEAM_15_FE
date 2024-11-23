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

export const NumTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;

  margin-top: 24px;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.45px;

  margin: 4px 0 8px;
`;

export const WarnContainer = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: ${COLOR.RED_LIGHT};

  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 12px;
`;

export const WarnIcon = styled.img`
  width: 16px;
`;

export const WarnTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${COLOR.GRAY_04};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const WarnTitle = styled.div`
  font-weight: 600;
`;

export const WarnText = styled.div`
  font-weight: 400;
`;

export const FooterContainer = styled.div`
  padding: 16px 20px 50px;
  background-color: ${COLOR.WHITE_01};
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
