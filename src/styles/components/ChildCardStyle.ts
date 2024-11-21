import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const CardContainer = styled.div`
  background-color: ${COLOR.ORANGE_03};
  width: 287px;
  height: 287px;
  border-radius: 12px;
`;

export const DefaultImg = styled.img`
  width: 287px;
  height: 287px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Information = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 58px;
  margin-top: calc(-11px - 58px);
  border-radius: 0 0 12px 12px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );

  color: ${COLOR.WHITE_01};
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.375px;
`;

export const Line = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${COLOR.GRAY_10};
`;
