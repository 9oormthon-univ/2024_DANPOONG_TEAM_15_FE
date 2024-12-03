import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Space = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.BLACK_LIGHT};
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  color: ${COLOR.WHITE_01};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  z-index: 60;
`;
