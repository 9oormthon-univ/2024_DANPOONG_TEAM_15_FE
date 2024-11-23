import {useState, useEffect, useRef} from 'react';
import TimePickerScroll from './TimePickerScroll';
import TimePickerObserverRoot from './TimePickerObserverRoot';
import * as T from '@/styles/components/TimePickerStyle';
import {TIMES} from '@/const/time-constants';

interface TimePickerProps {
  onTimeSelect: (time: string) => void; // 시간 선택 콜백
  initialTime?: string | null; // 초기 시간 값 (선택적)
}

export default function TimePicker({
  onTimeSelect,
  initialTime,
}: TimePickerProps) {
  const [observees, setObservees] = useState<HTMLLIElement[]>([]); // observees 초기화
  const [activeStates, setActiveStates] = useState({
    ampm: TIMES.ampm[0],
    hours: TIMES.hours[0].toString(),
    minutes: TIMES.minutes[0].toString(),
  });

  const ampmRef = useRef<HTMLLIElement[]>([]);
  const hoursRef = useRef<HTMLLIElement[]>([]);
  const minutesRef = useRef<HTMLLIElement[]>([]);

  const ampmRefPusher = (el: HTMLLIElement) => {
    if (el && !ampmRef.current.includes(el)) ampmRef.current.push(el);
  };

  const hoursRefPusher = (el: HTMLLIElement) => {
    if (el && !hoursRef.current.includes(el)) hoursRef.current.push(el);
  };

  const minutesRefPusher = (el: HTMLLIElement) => {
    if (el && !minutesRef.current.includes(el)) minutesRef.current.push(el);
  };

  useEffect(() => {
    setObservees(() => [
      ...ampmRef.current,
      ...hoursRef.current,
      ...minutesRef.current,
    ]);
  }, []); // 컴포넌트 마운트 시 observees 초기화

  useEffect(() => {
    if (initialTime) {
      const [initialAmpm, initialTimeStr] = initialTime.split(' ');
      const [initialHour, initialMinute] = initialTimeStr.split(':');
      setActiveStates({
        ampm: initialAmpm,
        hours: initialHour,
        minutes: initialMinute,
      });
    }
  }, [initialTime]); // 초기값 변경 시 상태 업데이트

  const handler = {
    handleSetTimes(type: string, value: string) {
      setActiveStates(prev => ({...prev, [type]: value}));

      // 새로운 시간 조합을 onTimeSelect로 전달
      const newTime = `${activeStates.ampm} ${activeStates.hours}:${activeStates.minutes}`;
      onTimeSelect(newTime);
    },
  };

  return (
    <T.Selector>
      <TimePickerObserverRoot observees={observees} handler={handler}>
        <TimePickerScroll
          type="ampm"
          items={TIMES.ampm}
          refPusher={ampmRefPusher}
          activeState={activeStates.ampm} // 단일 문자열 전달
        />
        <TimePickerScroll
          type="hours"
          items={TIMES.hours}
          refPusher={hoursRefPusher}
          activeState={activeStates.hours} // 단일 문자열 전달
        />
        <TimePickerScroll
          type="minutes"
          items={TIMES.minutes}
          refPusher={minutesRefPusher}
          activeState={activeStates.minutes} // 단일 문자열 전달
        />
      </TimePickerObserverRoot>
    </T.Selector>
  );
}
