import * as C from '../styles/CommonStyle';
import * as S from '../styles/NotificationsStyle';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import AlarmIcon from '@/assets/icons/common/alarm-orange.svg';
import AlarmCard from '@/components/alarm/AlarmCard';

function Notifications() {
  const alarms = [
    {name: '이지훈', status: '돌봄 서비스 이용 완료', date: '2024-12-04'},
    {name: '이지훈', status: '돌봄 중', date: '2024-12-05'},
    {name: '김구름', status: '돌보미 매칭 완료', date: '2024-12-06'},
  ]; // 더미 데이터

  return (
    <C.Page>
      <C.Center>
        <S.Background>
          <C.PageSpace>
            <TopBackLeftArrowBar />
            <S.Container>
              <S.TitleContainer>
                <S.AlarmIcon src={AlarmIcon} alt="알림" />
                알림
              </S.TitleContainer>
              <S.AlarmContainer>
                {alarms.map((alarm, index) => (
                  <S.AlarmCardWrapper key={index}>
                    <AlarmCard
                      name={alarm.name}
                      status={alarm.status}
                      date={alarm.date}
                    />
                  </S.AlarmCardWrapper>
                ))}
              </S.AlarmContainer>
            </S.Container>
          </C.PageSpace>
        </S.Background>
      </C.Center>
    </C.Page>
  );
}

export default Notifications;
