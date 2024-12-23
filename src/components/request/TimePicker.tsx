import {useState, useEffect, useRef} from 'react';
import TimePickerScroll from './TimePickerScroll';
import TimePickerObserverRoot from './TimePickerObserverRoot';
import * as T from '@/styles/components/TimePickerStyle';
import {TIMES} from '@/const/time-constants';

interface TimePickerProps {
  onTimeSelect: (time: string) => void; // 시간 선택 콜백
  initialTime?: string | null; // 초기 시간 값 (선택적)
  selectedDate: string; // 선택한 날짜
}

export default function TimePicker({
  onTimeSelect,
  initialTime,
  selectedDate,
}: TimePickerProps) {
  const [observees, setObservees] = useState<HTMLLIElement[]>([]); // observees 초기화
  const [activeStates, setActiveStates] = useState({
    ampm: TIMES.ampm[0],
    hours: TIMES.hours[0].toString(),
    minutes: TIMES.minutes[0].toString(),
  });
  const [availableTimes, setAvailableTimes] = useState({
    ampm: TIMES.ampm,
    hours: TIMES.hours,
    minutes: TIMES.minutes,
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

  useEffect(() => {
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);

    if (currentDate.toDateString() === selectedDateObj.toDateString()) {
      // 오늘 날짜인 경우
      const currentHours24 = currentDate.getHours(); // 현재 시간 (24시간제)
      const currentMinutes = currentDate.getMinutes(); // 현재 분
      const targetDate = new Date(currentDate);

      // 현재 시간 + 4시간 계산
      targetDate.setHours(currentHours24 + 4);
      targetDate.setMinutes(currentMinutes);

      const targetHours24 = targetDate.getHours();
      const targetMinutes = targetDate.getMinutes();

      // 24시간제를 12시간제와 AM/PM으로 변환
      const targetAmpm = targetHours24 >= 12 ? '오후' : '오전';
      const targetHours12 = targetHours24 % 12 || 12; // 0시를 12시로 변환

      // 기본값 설정
      setActiveStates({
        ampm: targetAmpm,
        hours: targetHours12.toString(),
        minutes: targetMinutes.toString(),
      });
    } else {
      // 오늘 날짜가 아닌 경우 기본값을 초기 상태로 유지
      setActiveStates({
        ampm: TIMES.ampm[0],
        hours: TIMES.hours[0].toString(),
        minutes: TIMES.minutes[0].toString(),
      });
    }

    // 전체 시간 옵션 유지
    setAvailableTimes({
      ampm: TIMES.ampm,
      hours: TIMES.hours,
      minutes: TIMES.minutes,
    });
  }, [selectedDate]);

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
          items={availableTimes.ampm}
          refPusher={ampmRefPusher}
          activeState={activeStates.ampm} // 단일 문자열 전달
        />
        <TimePickerScroll
          type="hours"
          items={availableTimes.hours}
          refPusher={hoursRefPusher}
          activeState={activeStates.hours} // 단일 문자열 전달
        />
        <TimePickerScroll
          type="minutes"
          items={availableTimes.minutes}
          refPusher={minutesRefPusher}
          activeState={activeStates.minutes} // 단일 문자열 전달
        />
      </TimePickerObserverRoot>
    </T.Selector>
  );
}
