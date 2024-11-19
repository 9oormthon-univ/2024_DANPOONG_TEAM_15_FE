import styled from 'styled-components';
import {COLOR} from '@/const/color';

const CardContainer = styled.div`
  background-color: ${COLOR.WHITE_07};
  border-radius: 12px;
  padding: 16px;
`;
const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export default function CaregiverCard() {
  return <div>CaregiverCard</div>;
}
