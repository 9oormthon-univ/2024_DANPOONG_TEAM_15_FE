import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const WarnContainer = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: ${COLOR.RED_LIGHT};

  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 12px;
`;

export const WarnIcon = styled.img`
  width: 16px;
`;

export const WarnTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${COLOR.GRAY_04};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.3px;
`;

export const WarnTitle = styled.div`
  font-weight: 600;
`;

export const WarnText = styled.div`
  font-weight: 400;
`;
