import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const Background = styled.div`
  background-color: #ffffff;
`;

export const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

export const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const NumTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.3px;

  margin-top: 24px;
`;

export const Title = styled.div`
  color: ${COLOR.BLACK_01};
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.45px;

  margin: 4px 0 32px;
`;

export const InformList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InformTitle = styled.div`
  color: ${COLOR.GRAY_04};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const InformText = styled.div`
  color: ${COLOR.BLACK_00};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
`;

export const FooterContainer = styled.div`
  padding: 16px 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: ${COLOR.WHITE_01};
`;

export const Badge = styled.div`
  padding: 10px 16px 10px 8px;
  background-color: ${COLOR.WHITE_08};
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${COLOR.BLACK_03};
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.375px;
  box-shadow: 0px 4px 4px 0px ${COLOR.GRAY_LIGHT};
`;

export const BadgeCircle = styled.img`
  width: 20px;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: none;
  background-color: ${COLOR.ORANGE_01};
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${COLOR.WHITE_01};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;

  &:hover {
    background-color: ${COLOR.ORANGE_02};
    transition: background-color 0.2s;
  }
`;
