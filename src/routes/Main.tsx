import {useState, useEffect} from 'react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import * as C from '../styles/CommonStyle';
import * as S from '../styles/MainStyle';
import Header from '@/components/Header';
import RequestButton from '@/components/main/RequestButton';
import ChildCard from '@/components/main/ChildCard';
import ChildCardAdd from '@/components/main/ChildCardAdd';
import DefaultImage from '@/assets/default-child.svg';
import {getChildren} from '@/utils/childApi';
import {getUserInfo} from '@/utils/userApi';
import {ChildDataSchema, Alarm} from '@/types';
import useWebSocket from '@/utils/useWebSocket';
import MainAlarmToast from '@/components/alarm/MainAlarmToast';

interface ChildData {
  id: number;
  name: string;
  age: number;
  image: string;
  status: string;
}

function Main() {
  const [userName, setUserName] = useState<string>(''); // 사용자 이름
  const [children, setChildren] = useState<ChildData[]>([]); // 아이 목록
  console.log('🚀 ~ file: Main.tsx:24 ~ Main ~ children:', children);
  const [latestMessage, setLatestMessage] = useState<string>(''); // 최신 메시지 상태
  const [showToast, setShowToast] = useState<boolean>(false);
  const [hasNewNotifications, setHasNewNotifications] =
    useState<boolean>(false); // 알림 상태
  const [processedMessages, setProcessedMessages] = useState<Set<string>>(
    new Set(),
  ); // 처리된 메시지 집합
  const [alarms, setAlarms] = useState<Alarm[]>([]); // 알림 데이터 저장

  const user_id = localStorage.getItem('user_id');
  const messages = useWebSocket(String(user_id));
  console.log('🚀 ~ file: Main.tsx:29 ~ Main ~ messages:', messages);

  useEffect(() => {
    if (messages?.messages && messages.messages.trim() !== '') {
      const message =
        messages.messages === '돌보미가 정해졌어요!'
          ? '돌보미 매칭 완료'
          : messages.messages;

      if (!processedMessages.has(message)) {
        setProcessedMessages(prev => new Set(prev).add(message));
        setLatestMessage(message);
        setShowToast(true);
        setHasNewNotifications(true);

        setAlarms(prev => [
          ...prev,
          {
            name: messages.childNames || '이름 없음',
            status: message,
            date: messages.startDates || '',
          },
        ]);

        console.log(alarms);

        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    }
  }, [messages, processedMessages, alarms]);

  const clearNotifications = () => {
    setHasNewNotifications(false); // 알림 상태 초기화
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // `getUserInfo` 호출
        const userResponse = await getUserInfo();
        setUserName(userResponse.name); // 사용자 이름 설정

        // `getChildren` API 호출
        const childrenResponse = await getChildren();
        console.log('자녀 목록:', childrenResponse);

        // 상태 업데이트
        if (childrenResponse) {
          setChildren(
            childrenResponse.map((child: ChildDataSchema) => ({
              id: child.childId,
              name: child.childName,
              age: child.age,
              image: child.image || DefaultImage, // 이미지 없으면 기본 이미지 사용
              status: child.recentApplyStatus || '상태 정보 없음', // 상태 없으면 기본 메시지
            })),
          );
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Main>
                <Header
                  hasNewNotifications={hasNewNotifications}
                  clearNotifications={clearNotifications}
                  alarms={alarms}
                />
                <S.Container>
                  <S.Title>
                    <S.Name>
                      <S.Bold>{userName}</S.Bold>님
                    </S.Name>
                    <S.SubTitle>오늘도 마음 편히 보내세요!</S.SubTitle>
                  </S.Title>
                  <S.ImgSpace>
                    <S.LottieContainer>
                      <DotLottieReact
                        src="https://lottie.host/4a0ced8f-4a78-4df8-a5cd-8d6a7fa256cf/u4G7etyXbb.json"
                        loop
                        autoplay
                      />
                    </S.LottieContainer>
                  </S.ImgSpace>
                  <RequestButton />
                  <S.ChildContainer>
                    <S.Child>우리 아이</S.Child>
                    <S.ChildList>
                      {children.map(child => (
                        <ChildCard
                          key={child.id}
                          childId={child.id}
                          name={child.name}
                          age={child.age}
                          image={child.image}
                          status={child.status}
                        />
                      ))}
                      <ChildCardAdd />
                    </S.ChildList>
                  </S.ChildContainer>
                </S.Container>
              </S.Main>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
      {showToast && <MainAlarmToast text={latestMessage} />}
    </>
  );
}

export default Main;
