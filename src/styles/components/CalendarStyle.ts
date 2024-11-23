import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Container = styled.div`
  padding: 16px 6px;
  border-radius: 12px;
  background: ${COLOR.WHITE_07};
  box-shadow: 0px 2px 4px 0px ${COLOR.GRAY_LIGHT};
`;

export const Title = styled.div`
  width: 100%;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CurrentDate = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

export const ArrowIcon = styled.img`
  width: 16px;
  cursor: pointer;
`;

export const TableThead = styled.th`
  width: 44px;
  height: 44px;

  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.3px;
`;

export const TableBody = styled.td`
  width: 44px;
  height: 44px;

  border-radius: 8px;

  color: ${COLOR.BLACK_01};
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.3px;
`;
