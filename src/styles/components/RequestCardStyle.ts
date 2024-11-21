import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const CardContainer = styled.div`
  padding: 25px 24px;
  background-color: ${COLOR.WHITE_07};
  border-radius: 16px;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${COLOR.ORANGE_01};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${COLOR.BLACK_03};
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const Text = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;
