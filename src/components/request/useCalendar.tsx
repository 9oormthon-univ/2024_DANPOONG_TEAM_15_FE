import React from 'react';
import {
  getDaysInMonth,
  subMonths,
  addMonths,
  startOfMonth,
  getDay,
} from 'date-fns';

interface UseCalendarReturn {
  weekCalendarList: (number | null)[][];
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
}

const CALENDAR_LENGTH = 42; // 6 weeks * 7 days
const DAY_OF_WEEK = 7;

const useCalendar = (): UseCalendarReturn => {
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());
  const totalMonthDays = getDaysInMonth(currentDate);

  // 이전 달 마지막 날과 시작 요일
  const prevMonth = subMonths(currentDate, 1);
  const prevMonthDays = getDaysInMonth(prevMonth);
  const firstDayOfMonth = getDay(startOfMonth(currentDate));

  // 다음 달의 시작 날짜 계산
  // const lastDayOfMonth = getDay(endOfMonth(currentDate));

  // 이전 달 날짜 리스트
  const prevDayList: number[] = Array.from(
    {length: firstDayOfMonth},
    (_, i) => prevMonthDays - firstDayOfMonth + i + 1,
  );

  // 현재 달 날짜 리스트
  const currentDayList: number[] = Array.from(
    {length: totalMonthDays},
    (_, i) => i + 1,
  );

  // 다음 달 날짜 리스트
  const nextDayList: number[] = Array.from(
    {length: CALENDAR_LENGTH - (prevDayList.length + currentDayList.length)},
    (_, i) => i + 1,
  );

  // 전체 캘린더 리스트
  const currentCalendarList: (number | null)[] = [
    ...prevDayList,
    ...currentDayList,
    ...nextDayList,
  ];

  // 주별로 나누기
  const weekCalendarList: (number | null)[][] = currentCalendarList.reduce(
    (acc: (number | null)[][], cur: number | null, idx: number) => {
      const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(cur);
      return acc;
    },
    [],
  );

  const goToNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1));
  };

  const goToPrevMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1));
  };

  return {
    weekCalendarList,
    currentDate,
    setCurrentDate,
    goToNextMonth,
    goToPrevMonth,
  };
};

export default useCalendar;
