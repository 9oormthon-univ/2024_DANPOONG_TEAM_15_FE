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

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 4px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TimeTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const DateText = styled.div`
  color: ${COLOR.BLACK_00};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const SelectTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TimePickerContainer = styled.div`
  padding: 24px 38px;
  border-radius: 12px;
  background-color: ${COLOR.WHITE_07};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SelectContainer = styled.div`
  border-radius: 100px;
  background: ${COLOR.WHITE_01};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:nth-child(2) {
    margin-left: -10px;
  }
`;

export const Select = styled.div<{isActive: boolean}>`
  width: 114px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({isActive}) =>
    isActive ? COLOR.ORANGE_01 : COLOR.WHITE_01};
  color: ${({isActive}) => (isActive ? COLOR.WHITE_01 : COLOR.GRAY_04)};
  z-index: ${({isActive}) => (isActive ? 10 : 5)};
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.375px;
  cursor: pointer;
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
