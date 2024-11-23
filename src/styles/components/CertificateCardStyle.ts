import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const CertificateCardContainer = styled.div<{$isSelected: boolean}>`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  input {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 3px solid
      ${({$isSelected}) => ($isSelected ? COLOR.ORANGE_01 : COLOR.WHITE_08)};
    border-radius: 50%;
    background-color: ${({$isSelected}) =>
      $isSelected ? COLOR.WHITE_01 : COLOR.WHITE_01};
    position: relative;
    margin: 0;
    cursor: pointer;

    &::after {
      content: '';
      display: ${({$isSelected}) => ($isSelected ? 'block' : 'none')};
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      background-color: ${COLOR.ORANGE_01};
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const CardContainer = styled.div<{$isSelected: boolean}>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  background: ${COLOR.WHITE_07};

  border: 1px solid
    ${({$isSelected}) => ($isSelected ? COLOR.ORANGE_01 : COLOR.WHITE_07)};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_03};
  font-weight: 600;
`;

export const Date = styled.div`
  color: ${COLOR.GRAY_04};
  font-weight: 400;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const RightIcon = styled.img`
  width: 12px;
`;
