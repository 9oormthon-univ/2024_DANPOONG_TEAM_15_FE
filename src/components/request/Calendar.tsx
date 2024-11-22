import {useState} from 'react';
import useCalendar from './useCalendar';
import * as C from '@/styles/components/CalendarStyle';
import {COLOR} from '@/const/color';

import LeftIcon from '@/assets/icons/request/arrow-left.svg';
import RightIcon from '@/assets/icons/request/arrow-right.svg';

interface CalendarProps {
  onDateSelect: (date: Date | null) => void;
}

const Calendar: React.FC<CalendarProps> = ({onDateSelect}) => {
  const {weekCalendarList, currentDate, goToNextMonth, goToPrevMonth} =
    useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const isToday = (year: number, month: number, day: number) =>
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day;

  const isPast = (year: number, month: number, day: number) =>
    new Date(year, month, day) < today;

  const handleDateClick = (
    day: number,
    isPrevMonth: boolean,
    isNextMonth: boolean,
  ) => {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    // 이전 달, 다음 달에 해당하는 경우 월 수정
    if (isPrevMonth) month -= 1;
    if (isNextMonth) month += 1;

    const newDate = new Date(year, month, day);

    // 비활성화된 날짜 처리
    if (
      isPrevMonth ||
      isNextMonth ||
      isToday(year, month, day) ||
      isPast(year, month, day)
    ) {
      alert('선택이 불가능한 날짜입니다.');
      return;
    }

    // 활성화된 날짜 처리
    setSelectedDate(newDate);
    onDateSelect(newDate); // 부모로 선택 날짜 전달
  };

  return (
    <C.Container>
      <C.Title>
        <C.ArrowIcon src={LeftIcon} alt="이전 달" onClick={goToPrevMonth} />
        <C.CurrentDate>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </C.CurrentDate>
        <C.ArrowIcon src={RightIcon} alt="다음 달" onClick={goToNextMonth} />
      </C.Title>

      <table>
        <thead>
          <tr>
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <C.TableThead key={day}>{day}</C.TableThead>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekCalendarList.map((week, weekIdx) => (
            <tr key={weekIdx}>
              {week.map((day, dayIdx) => {
                const isPrevMonth = weekIdx === 0 && day > 7; // 이전 달 날짜
                const isNextMonth =
                  weekIdx === weekCalendarList.length - 1 && day <= 7; // 다음 달 날짜
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();

                const isDisabled =
                  isToday(year, month, day) || isPast(year, month, day);

                const isSelected =
                  selectedDate &&
                  selectedDate.getFullYear() === year &&
                  selectedDate.getMonth() ===
                    (isPrevMonth
                      ? month - 1
                      : isNextMonth
                        ? month + 1
                        : month) &&
                  selectedDate.getDate() === day;

                const textColor =
                  isPrevMonth || isNextMonth
                    ? COLOR.GRAY_10 // 이전 달/다음 달은 회색
                    : isDisabled
                      ? COLOR.BLACK_01 // 이번 달의 비활성화 날짜는 검정색
                      : isSelected
                        ? COLOR.WHITE_01 // 선택된 날짜는 흰색
                        : COLOR.BLACK_01; // 기본 검정색

                return (
                  <C.TableBody
                    key={dayIdx}
                    style={{
                      textAlign: 'center',
                      backgroundColor: isSelected
                        ? COLOR.ORANGE_01
                        : 'transparent',
                      color: textColor,
                      cursor:
                        isPrevMonth || isNextMonth || isDisabled
                          ? 'not-allowed'
                          : 'pointer',
                    }}
                    onClick={() =>
                      handleDateClick(day, isPrevMonth, isNextMonth)
                    }>
                    {day || ''}
                  </C.TableBody>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </C.Container>
  );
};

export default Calendar;
