import styled from 'styled-components';
import {COLOR} from '@/const/color';

interface BarProps {
  $isActive: boolean;
}

export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const LeftHalfBar = styled.div<BarProps>`
  width: 40px;
  height: 2px;
  border-radius: 8px 0 0 8px;
  background-color: ${({$isActive}) =>
    $isActive ? COLOR.ORANGE_01 : COLOR.GRAY_06};
`;

export const RightHalfBar = styled.div<BarProps>`
  width: 40px;
  height: 2px;
  border-radius: 0 8px 8px 0;
  background-color: ${({$isActive}) =>
    $isActive ? COLOR.ORANGE_01 : COLOR.GRAY_06};
  margin-left: -6px;
`;

export const Bar = styled.div<BarProps>`
  width: 80px;
  height: 2px;
  border-radius: 8px;
  background-color: ${({$isActive}) =>
    $isActive ? COLOR.ORANGE_01 : COLOR.GRAY_06};
`;
