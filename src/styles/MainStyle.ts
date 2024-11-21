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

export const Bold = styled.div`
  font-weight: 600;
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

export const BoryImg = styled.img`
  width: 198px;
`;

export const ChildContainer = styled.div`
  margin-top: 24px;
  padding: 24px 0px 24px 24px;
  border-radius: 16px;
  background-color: ${COLOR.WHITE_07};

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Child = styled.div`
  color: ${COLOR.BLACK_03};
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.375px;
`;

export const ChildList = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  overflow-x: scroll;

  &:last-child {
    margin-right: 24px;
  }

  /* 크롬, 엣지, 사파리 */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }

  /* 파이어폭스 */
  scrollbar-width: none; /* 스크롤바 너비 없애기 */
  scrollbar-color: transparent transparent; /* 스크롤바 색상 투명으로 설정 */

  /* IE 10+ (Optional: IE 지원 필요할 경우) */
  -ms-overflow-style: none; /* 스크롤바 비활성화 */
`;
