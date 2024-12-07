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
import {ChildDataSchema} from '@/types';
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
  const [latestMessage, setLatestMessage] = useState<string | null>(null); // 최신 메시지 상태

  const messages = useWebSocket(String(2));
  console.log('🚀 ~ file: Main.tsx:29 ~ Main ~ messages:', messages);

  useEffect(() => {
    if (messages.length > 0) {
      setLatestMessage(messages[messages.length - 1]); // 가장 최근 메시지 저장
    }
  }, [messages]);

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
                <Header />
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
      {latestMessage && <MainAlarmToast text={latestMessage} />}
    </>
  );
}

export default Main;
