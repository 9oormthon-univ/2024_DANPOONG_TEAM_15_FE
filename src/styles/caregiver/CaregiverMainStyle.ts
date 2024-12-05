import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const Main = styled.div``;

export const Container = styled.div`
  padding: 8px 20px 50px;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_01};

  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: -0.6px;
`;

export const Name = styled.div`
  display: flex;
`;

export const Brown = styled.div`
  color: ${COLOR.BROWN_01};
`;

export const Bold = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.5px;
  padding-top: 2px;
`;

export const ImgSpace = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 34px 0 8px;
`;

export const LottieContainer = styled.div`
  width: 198px;
  height: 198px;
`;

export const CareContainer = styled.div`
  margin-top: 24px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${COLOR.WHITE_07};

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CareTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Care = styled.div`
  color: ${COLOR.BLACK_03};
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.375px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const RightIcon = styled.img`
  width: 12px;
`;
