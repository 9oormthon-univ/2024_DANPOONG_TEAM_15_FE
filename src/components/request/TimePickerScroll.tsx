import * as T from '@/styles/components/TimePickerScrollStyle';

interface TimePickerScrollProps {
  type: 'ampm' | 'hours' | 'minutes';
  items: (string | number)[];
  refPusher: (el: HTMLLIElement) => void;
  activeState: string | number; // 단일 값으로 변경
}

export default function TimePickerScroll({
  type,
  items,
  refPusher,
  activeState,
}: TimePickerScrollProps) {
  return (
    <T.TimePickerScroll>
      {items.map(item => (
        <T.TimePickerScrollItem
          key={`${type}-${item}`} // 고유 key 생성
          ref={refPusher}
          isActive={item === activeState} // activeState와 비교하여 isActive 계산
          className={`time-picker__scroll-item ${type}`}>
          {item}
        </T.TimePickerScrollItem>
      ))}
    </T.TimePickerScroll>
  );
}
