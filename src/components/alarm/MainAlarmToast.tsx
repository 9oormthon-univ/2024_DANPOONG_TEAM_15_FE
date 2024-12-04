import * as A from '@/styles/components/MainAlarmToastStyle';
import AlarmIcon from '@/assets/icons/alarm/circle-link.svg';

interface AlarmToastProps {
  text: string;
}

function MainAlarmToast({text}: AlarmToastProps) {
  return (
    <>
      <A.TotalContainer>
        <A.Icon src={AlarmIcon} alt="알람" />
        {text}
      </A.TotalContainer>
    </>
  );
}

export default MainAlarmToast;
