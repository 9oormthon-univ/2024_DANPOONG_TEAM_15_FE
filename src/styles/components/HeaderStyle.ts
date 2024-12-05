import styled from 'styled-components';
import {COLOR} from '@/const/color';
// import palette from "../lib/colorPalette";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
`;

export const LogoImg = styled.img`
  width: 96px;
  cursor: pointer;
`;

export const LittleImg = styled.img`
  width: 28px;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// 돌보미 헤더
export const CareHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
`;

export const CareButton = styled.div`
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5.748px;
  background-color: ${COLOR.BROWN_01};
  box-shadow: 0px 3.832px 3.832px 0px ${COLOR.BROWN_LIGHT};

  color: ${COLOR.WHITE_01};
  font-size: 12px;
  font-weight: 600;
  line-height: 11.496px;
  letter-spacing: -0.3px;
`;
