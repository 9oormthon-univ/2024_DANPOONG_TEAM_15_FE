import {useState} from 'react';
import useCalendar from './useCalendar';
import * as C from '@/styles/components/CalendarStyle';
import {COLOR} from '@/const/color';
import LeftIcon from '@/assets/icons/request/arrow-left.svg';
import RightIcon from '@/assets/icons/request/arrow-right.svg';

interface CalendarProps {
  onDateSelect: (date: Date) => void;
  disabledDateRange?: {start: Date; end: Date}; // 비활성화 범위 추가
}

const Calendar = ({onDateSelect, disabledDateRange}: CalendarProps) => {
  const {weekCalendarList, currentDate, goToNextMonth, goToPrevMonth} =
    useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const now = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const isTodayDisabled = now.getHours() >= 20; // 현재 시간이 20시(8PM) 이후라면 오늘 선택 불가능

  const handleDateClick = (
    day: number | null,
    isPrevMonth: boolean,
    isNextMonth: boolean,
  ) => {
    if (day === null) return; // null-safe 처리

    // 비활성화된 날짜 클릭 방지
    if (isPrevMonth || isNextMonth) return;

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    if (isPrevMonth) {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
    }

    if (isNextMonth) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
    }

    const newDate = new Date(year, month, day);

    // 오늘 이전 날짜 클릭 방지
    if (newDate <= yesterday) return;

    // 오늘이 비활성화되었는지 확인
    if (isTodayDisabled && newDate.toDateString() === now.toDateString()) {
      return;
    }

    // 비활성화 범위 안에 날짜가 있는지 확인
    if (
      disabledDateRange &&
      (newDate < disabledDateRange.start || newDate > disabledDateRange.end)
    ) {
      return;
    }

    setSelectedDate(newDate);
    onDateSelect(newDate);
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

      <C.CenterContainer>
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
                  if (day === null) return <td key={dayIdx}></td>;

                  const isPrevMonth = weekIdx === 0 && day > 20;
                  const isNextMonth = weekIdx >= 4 && day <= 14;

                  const displayYear = isPrevMonth
                    ? currentDate.getFullYear() -
                      (currentDate.getMonth() === 0 ? 1 : 0)
                    : isNextMonth
                      ? currentDate.getFullYear() +
                        (currentDate.getMonth() === 11 ? 1 : 0)
                      : currentDate.getFullYear();

                  const displayMonth = isPrevMonth
                    ? (currentDate.getMonth() - 1 + 12) % 12
                    : isNextMonth
                      ? (currentDate.getMonth() + 1) % 12
                      : currentDate.getMonth();

                  const isToday =
                    new Date(displayYear, displayMonth, day).toDateString() ===
                    now.toDateString();
                  const isDisabled =
                    new Date(displayYear, displayMonth, day) < yesterday ||
                    (disabledDateRange &&
                      (new Date(displayYear, displayMonth, day) <
                        disabledDateRange.start ||
                        new Date(displayYear, displayMonth, day) >
                          disabledDateRange.end)) ||
                    (isTodayDisabled && isToday);

                  const isSelected =
                    selectedDate &&
                    selectedDate.getFullYear() === displayYear &&
                    selectedDate.getMonth() === displayMonth &&
                    selectedDate.getDate() === day;

                  const textColor =
                    isPrevMonth || isNextMonth
                      ? COLOR.GRAY_10 // 이전 달/다음 달은 회색
                      : isDisabled
                        ? COLOR.GRAY_10 // 이번 달의 비활성화 날짜는 회색
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
                        handleDateClick(day!, isPrevMonth, isNextMonth)
                      }>
                      {day}
                    </C.TableBody>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </C.CenterContainer>
    </C.Container>
  );
};

export default Calendar;
