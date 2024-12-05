import styled from 'styled-components';
import {COLOR} from '@/const/color';

interface CardContainerProps {
  $isSelected: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  padding: 16px;
  background-color: ${({$isSelected}) =>
    $isSelected ? COLOR.ORANGE_LIGHT : COLOR.WHITE_07};
  border: 1px solid
    ${({$isSelected}) => ($isSelected ? COLOR.ORANGE_01 : COLOR.WHITE_07)};
  transition: background-color 0.2s;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  cursor: pointer;
`;

export const Name = styled.div`
  color: ${COLOR.BLACK_03};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const TextContainer = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OneLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Line = styled.div`
  width: 1px;
  height: 10px;
  background-color: ${COLOR.GRAY_09};
`;
