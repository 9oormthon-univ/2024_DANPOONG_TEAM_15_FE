import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const CardContainer = styled.div`
  background-color: ${COLOR.ORANGE_04};
  width: 287px;
  height: 287px;
  border-radius: 12px;
  cursor: pointer;
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

export const StatusContainer = styled.div`
  padding: 19px 16px;
  background-color: ${COLOR.ORANGE_LIGHT};
  border: 1px solid ${COLOR.ORANGE_01};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  cursor: pointer;
`;

export const StatusTitle = styled.div`
  font-weight: 600;
  color: ${COLOR.BLACK_03};
`;

export const StatusText = styled.div`
  color: ${COLOR.BLACK_03};
`;

export const StatusBar = styled.div`
  width: 1px;
  height: 10px;
  background-color: ${COLOR.GRAY_09};
`;

// 아이 등록 버튼
export const CardContainerAdd = styled.div`
  background-color: ${COLOR.GRAY_10};
  width: 287px;
  height: 287px;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${COLOR.WHITE_01};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;

  margin-right: 24px;
`;

export const AddIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const StatusContainerAdd = styled.div`
  padding: 19px 68px;
  background-color: ${COLOR.GRAY_10};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  margin-right: 24px;
`;

export const StatusTextAdd = styled.div`
  color: ${COLOR.WHITE_01};
  line-height: 18px; /* 150% */
  letter-spacing: -0.3px;
`;
