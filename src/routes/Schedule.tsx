import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/ScheduleStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import Calendar from '@/components/request/Calendar';
import WarnCard from '@/components/request/WarnCard';

function Schedule() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const {startdate, enddate} = location.state || {}; // 전달받은 데이터

  // startdate와 enddate를 Date 객체로 변환
  const disabledDateRange =
    startdate && enddate
      ? {
          start: new Date(startdate - 1),
          end: new Date(enddate),
        }
      : undefined;

  const handleNavLinkClick = (path: string): void => {
    if (selectedDate !== null) {
      // 날짜를 로컬 시간 기준으로 YYYY-MM-DD 형식으로 변환
      const formattedDate = `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1,
      ).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

      navigate(path, {state: {selectedDate: formattedDate}}); // 날짜 전달
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
                  <WarnCard />
                  <Calendar
                    onDateSelect={setSelectedDate}
                    disabledDateRange={disabledDateRange}
                  />
                </S.Container>
                <S.FooterContainer>
                  <S.Button
                    $isActive={selectedDate !== null}
                    onClick={() => handleNavLinkClick('/request/time')}>
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

export default Schedule;
