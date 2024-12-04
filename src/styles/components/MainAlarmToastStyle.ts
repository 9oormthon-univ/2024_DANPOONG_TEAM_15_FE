import styled, {keyframes} from 'styled-components';
import {COLOR} from '@/const/color';

const slideUpAndDown = keyframes`
  0% {
    transform: translate(-50%, 100px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -20px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

export const TotalContainer = styled.div`
  position: fixed; // 화면의 고정 위치
  bottom: 80px; // 화면 아래에서 80px 위
  left: 50%; // 가로 중앙 정렬
  transform: translateX(-50%);

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
