import {useLocation} from 'react-router-dom';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/NotificationsStyle';
import TopBackLeftArrowBar from '@/components/common/TopBackLeftArrowBar';
import AlarmIcon from '@/assets/icons/common/alarm-orange.svg';
import AlarmCard from '@/components/alarm/AlarmCard';
import {Alarm} from '@/types';

function Notifications() {
  const location = useLocation();
  const alarms: Alarm[] = location.state?.alarms || []; // 전달된 알람 데이터

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
                {alarms.map((alarm: Alarm, index: number) => (
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
