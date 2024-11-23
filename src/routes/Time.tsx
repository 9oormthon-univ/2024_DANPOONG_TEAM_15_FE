import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/TimeStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import TimePicker from '@/components/request/TimePicker';

function Time() {
  const navigate = useNavigate();
  const location = useLocation();
  const {selectedDate} = location.state || {selectedDate: '0000-00-00'};

  const [startTime, setStartTime] = useState<string | null>(null); // 시작 시간
  const [lastTime, setLastTime] = useState<string | null>(null); // 마무리 시간
  const [activeSelect, setActiveSelect] = useState<'start' | 'end'>('start'); // 활성 버튼 상태

  // 시간 차이를 계산하는 함수
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

    const difference = (endDate.getTime() - startDate.getTime()) / (1000 * 60); // 차이를 분 단위로 계산
    return difference; // 차이를 반환
  };

  const handleNavLinkClick = (path: string): void => {
    if (startTime !== null && lastTime !== null) {
      const timeDifference = calculateTimeDifference(startTime, lastTime);
      if (timeDifference >= 120) {
        navigate(path); // 최소 2시간 이상일 경우 이동
      } else {
        alert('최소 2시간 이상 선택해야 합니다.'); // 조건 불만족 시 알림
      }
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
                          } // 초기값 전달
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
