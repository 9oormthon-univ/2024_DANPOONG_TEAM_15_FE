import React from 'react';
import * as T from '@/styles/components/TimePickerScrollStyle';

interface TimePickerScrollProps {
  type: 'ampm' | 'hours' | 'minutes';
  items: (string | number)[];
  refPusher: (el: HTMLLIElement) => void;
  activeStates: {[key: string]: boolean}; // activeStates 전달받음
}

export default function TimePickerScroll({
  type,
  items,
  refPusher,
  activeStates,
}: TimePickerScrollProps) {
  return (
    <T.TimePickerScroll>
      {items.map(item => {
        const key = `${type}-${item}`; // type과 item으로 고유 key 생성
        return (
          <T.TimePickerScrollItem
            key={key}
            ref={refPusher}
            isActive={!!activeStates[key]} // activeStates를 기반으로 isActive 계산
            className={`time-picker__scroll-item ${type}`}>
            {item}
          </T.TimePickerScrollItem>
        );
      })}
    </T.TimePickerScroll>
  );
}
