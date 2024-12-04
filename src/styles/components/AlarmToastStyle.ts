import styled, {keyframes} from 'styled-components';
import {COLOR} from '@/const/color';

const slideUpAndDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px 10px 8px;
  border-radius: 100px;
  background: ${COLOR.WHITE_08};
  box-shadow: 0px 4px 4px 0px ${COLOR.GRAY_LIGHT};

  color: ${COLOR.BLACK_03};
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.375px;
  animation: ${slideUpAndDown} 0.7s ease-in-out;
`;

export const Icon = styled.img`
  width: 20px;
`;
