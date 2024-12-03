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

  margin: 4px 0 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SubTitle = styled.div`
  color: ${COLOR.GRAY_04};
`;

export const Inform = styled.div`
  padding-bottom: 24px;
  color: ${COLOR.GRAY_04};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.325px;
`;

export const TextareaContainer = styled.textarea`
  padding: 16px;
  height: 303px;
  border-radius: 12px;
  border: 1px solid ${COLOR.GRAY_06};
  background: ${COLOR.WHITE_03};
  overflow-y: scroll;

  color: ${COLOR.BLACK_01};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  resize: none;
  outline: none;

  ::placeholder {
    color: ${COLOR.GRAY_04};
  }

  &:focus {
    border: 1px solid ${COLOR.ORANGE_01};
  }
`;

export const FooterContainer = styled.div`
  padding: 16px 20px 50px;
  background-color: ${COLOR.WHITE_01};
`;

export const Button = styled.div`
  border-radius: 8px;
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
