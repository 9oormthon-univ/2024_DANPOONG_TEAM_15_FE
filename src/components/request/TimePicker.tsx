import {useState, useEffect, useRef} from 'react';
import * as T from '@/styles/components/TimePickerStyle';
import TimePickerScroll from './TimePickerScroll';
import {TIMES} from '@/const/time-constants';
import TimePickerObserverRoot from './TimePickerObserverRoot';

interface TimePickerProps {
  onTimeSelect: (time: string) => void; // 시간 선택 콜백
  initialTime?: string | null; // 초기 시간 값 (선택적)
}

export default function TimePicker({
  onTimeSelect,
  initialTime,
}: TimePickerProps) {
  const [ampm, setAmpm] = useState(TIMES.ampm[0]);
  const [hour, setHour] = useState(TIMES.hours[0].toString());
  const [minute, setMinute] = useState(TIMES.minutes[0].toString());
  const [observees, setObservees] = useState<HTMLLIElement[]>([]); // observees 초기화

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
      setAmpm(initialAmpm);
      setHour(initialHour);
      setMinute(initialMinute);
    }
  }, [initialTime]); // 초기값 변경 시 상태 업데이트

  const handler = {
    handleSetTimes(type: string, value: string) {
      if (type === 'ampm') setAmpm(value);
      if (type === 'hours') setHour(value);
      if (type === 'minutes') setMinute(value);

      // 새로운 시간 조합을 onTimeSelect로 전달
      const newTime = `${ampm} ${hour}:${minute}`;
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
        />
        <TimePickerScroll
          type="hours"
          items={TIMES.hours}
          refPusher={hoursRefPusher}
        />
        <TimePickerScroll
          type="minutes"
          items={TIMES.minutes}
          refPusher={minutesRefPusher}
        />
      </TimePickerObserverRoot>
    </T.Selector>
  );
}
