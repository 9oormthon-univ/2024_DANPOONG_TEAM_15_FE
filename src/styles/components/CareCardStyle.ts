import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const TextLine = styled.div`
  width: 1px;
  height: 10px;
  background-color: ${COLOR.GRAY_09};
`;

export const CardContainer = styled.div`
  background-color: ${COLOR.ORANGE_04};
  width: 100%;
  height: 287px;
  border-radius: 12px;
  cursor: pointer;
`;

export const DefaultImg = styled.img`
  width: 100%;
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
  margin-top: calc(-4px - 58px);
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

// 매칭된 돌봄이 없는 경우
export const CareContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  color: ${COLOR.GRAY_04};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const BoryIcon = styled.img`
  width: 102px;
`;
