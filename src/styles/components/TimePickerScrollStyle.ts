import styled from 'styled-components';
import {COLOR} from '@/const/color';

export const TimePickerScroll = styled.ul`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  user-select: none;
  font-size: 16px;
  line-height: 52px;
  list-style-type: none;
  padding: 0;

  color: ${COLOR.BLACK_09};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;

  .time-picker__scroll--no-snap {
    scroll-snap-type: none;
  }
`;

export const TimePickerScrollItem = styled.li.withConfig({
  shouldForwardProp: prop => prop !== 'isActive',
})<{isActive: boolean}>`
  scroll-snap-align: center;
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: ${({isActive}) => (isActive ? COLOR.ORANGE_01 : COLOR.BLACK_09)};

  &:first-of-type {
    margin-top: calc(75px - 12px);
  }
  &:last-of-type {
    margin-bottom: calc(75px - 12px);
  }
`;
