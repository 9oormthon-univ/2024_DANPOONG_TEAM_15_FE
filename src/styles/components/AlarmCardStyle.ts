import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 8px;

  color: ${COLOR.BLACK_03};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

export const Bold = styled.div`
  font-weight: 600;
`;

export const DateContainer = styled.div`
  color: ${COLOR.BLACK_05};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;
