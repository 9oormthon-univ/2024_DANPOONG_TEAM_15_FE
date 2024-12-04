import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const Container = styled.div`
  padding: 8px 20px 50px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${COLOR.BLACK_01};
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin-bottom: 32px;
`;

export const AlarmIcon = styled.img`
  width: 36px;
`;

export const AlarmContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlarmCardWrapper = styled.div`
  border-bottom: 1px solid ${COLOR.GRAY_06};

  &:last-child {
    border-bottom: none;
  }
`;
