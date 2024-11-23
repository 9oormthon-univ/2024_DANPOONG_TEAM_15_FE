import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/TimeStyle';

import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import TimePicker from '@/components/request/TimePicker';
import {applyService} from '@/utils/requestApi';

function Time() {
  const navigate = useNavigate();
  const location = useLocation();
  const {selectedDate} = location.state || {selectedDate: '0000-00-00'};

  const [startTime, setStartTime] = useState<string | null>(null);
  const [lastTime, setLastTime] = useState<string | null>(null);
  const [activeSelect, setActiveSelect] = useState<'start' | 'end'>('start');

  const calculateTimeDifference = (start: string, end: string) => {
    const [startAmpm, startTime] = start.split(' ');
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const startDate = new Date();
    startDate.setHours(
      startAmpm === 'PM' && startHour !== 12 ? startHour + 12 : startHour,
      startMinute,
    );

    const [endAmpm, endTime] = end.split(' ');
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const endDate = new Date();
    endDate.setHours(
      endAmpm === 'PM' && endHour !== 12 ? endHour + 12 : endHour,
      endMinute,
    );

    const difference = (endDate.getTime() - startDate.getTime()) / (1000 * 60);
    return difference;
  };

  const convertTo24HourFormat = (date: string, time: string): string => {
    // Ensure both date and time parts are valid
    if (!date || !time) {
      throw new Error(`Invalid date or time: date="${date}", time="${time}"`);
    }

    // Extract AM/PM and time parts
    const timeMatch = time.match(/(오전|오후) (\d{1,2}):(\d{2})/);
    if (!timeMatch) {
      throw new Error(`Invalid time format in: ${time}`);
    }

    const [_, ampm, hoursStr, minutesStr] = timeMatch;
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    // Ensure hours and minutes are numbers
    if (isNaN(hours) || isNaN(minutes)) {
      throw new Error(`Invalid hours or minutes in: ${time}`);
    }

    // Convert to 24-hour format
    let adjustedHours = hours;
    if (ampm === '오후' && hours !== 12) {
      adjustedHours += 12;
    } else if (ampm === '오전' && hours === 12) {
      adjustedHours = 0;
    }

    return `${date} ${String(adjustedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  };

  const handleNavLinkClick = async (path: string): Promise<void> => {
    if (selectedDate && startTime && lastTime) {
      try {
        console.log('Selected Date:', selectedDate);
        console.log('Start Time:', startTime);
        console.log('Last Time:', lastTime);

        const startDateTime = convertTo24HourFormat(selectedDate, startTime);
        const endDateTime = convertTo24HourFormat(selectedDate, lastTime);

        console.log('Formatted Start DateTime:', startDateTime);
        console.log('Formatted End DateTime:', endDateTime);

        const childId = Number(localStorage.getItem('childId'));
        const medicalCertificateId = Number(
          localStorage.getItem('medicalCertificateId'),
        );
        const absenceCertificateId = Number(
          localStorage.getItem('absenceCertificateId'),
        );

        console.log('Request Data:', {
          childId,
          medicalCertificateId,
          absenceCertificateId,
          startDate: startDateTime,
          endDate: endDateTime,
        });

        await applyService({
          childId,
          medicalCertificateId,
          absenceCertificateId,
          startDate: startDateTime,
          endDate: endDateTime,
        });

        navigate(path);
      } catch (error: any) {
        console.error('Error submitting request:', error.message);
      }
    } else {
      alert('날짜와 시간을 모두 선택하세요.');
    }
  };

  const handleTimeSelect = (time: string) => {
    if (activeSelect === 'start') {
      setStartTime(time);
    } else {
      setLastTime(time);
    }
  };

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.PageSpace>
                <TopBackXBar />
                <S.Container>
                  <ProgressBar isStatus={2} />
                  <S.NumTitle>2. 일정 선택</S.NumTitle>
                  <S.Title>돌봄 일정 선택</S.Title>
                  <S.TimeContainer>
                    <S.DateContainer>
                      <S.TimeTitle>선택한 날짜</S.TimeTitle>
                      <S.DateText>{selectedDate}</S.DateText>
                    </S.DateContainer>
                    <S.SelectTimeContainer>
                      <S.TimeTitle>돌봄 시간</S.TimeTitle>
                      <S.TimePickerContainer>
                        <S.SelectContainer>
                          <S.Select
                            isActive={activeSelect === 'start'}
                            onClick={() => setActiveSelect('start')}>
                            시작
                          </S.Select>
                          <S.Select
                            isActive={activeSelect === 'end'}
                            onClick={() => setActiveSelect('end')}>
                            마무리
                          </S.Select>
                        </S.SelectContainer>
                        <TimePicker
                          onTimeSelect={handleTimeSelect}
                          initialTime={
                            activeSelect === 'start' ? startTime : lastTime
                          }
                        />
                      </S.TimePickerContainer>
                    </S.SelectTimeContainer>
                  </S.TimeContainer>
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    $isActive={startTime !== null && lastTime !== null}
                    onClick={() => handleNavLinkClick('/request/pay')}>
                    다음
                  </S.Button>
                </S.FooterContainer>
              </S.PageSpace>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Time;
