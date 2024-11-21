import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const ButtonContainer = styled.div`
  background: linear-gradient(84deg, #ee8454 1.43%, #ff9d72 97.89%);
  border-radius: 16px;
  padding: 23px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  color: ${COLOR.WHITE_01};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Bold = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.375px;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fbf2ee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightIcon = styled.img`
  width: 24px;
`;
