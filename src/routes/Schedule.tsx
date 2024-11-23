import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/ScheduleStyle';
import TopBackXBar from '@/components/common/TopBackXBar';
import ProgressBar from '@/components/request/ProgressBar';
import WarnIcon from '@/assets/icons/request/circle-warn.svg';
import Calendar from '@/components/request/Calendar';

function Schedule() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
                  <S.WarnContainer>
                    <S.WarnIcon src={WarnIcon} alt="주의사항" />
                    <S.WarnTexts>
                      <S.WarnTitle>이렇게는 일정 선택이 안돼요</S.WarnTitle>
                      <S.WarnText>
                        1. 당일 선택
                        <br />
                        2. 결석 기간 외 기간 선택
                      </S.WarnText>
                    </S.WarnTexts>
                  </S.WarnContainer>
                  <Calendar onDateSelect={setSelectedDate} />
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
