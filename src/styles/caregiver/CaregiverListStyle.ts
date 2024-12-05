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
  padding: 12px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
`;

export const SubTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;

  margin: 4px 0 32px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
